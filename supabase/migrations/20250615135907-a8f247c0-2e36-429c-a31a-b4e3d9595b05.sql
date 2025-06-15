
-- Create a new, securely defined function to get the current user's ID
-- Using a new name to avoid any potential caching issues with the old function.
CREATE OR REPLACE FUNCTION public.get_user_id_securely()
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = '' -- Explicitly clear search_path for security
AS $$
  SELECT auth.uid();
$$;

-- Drop all existing policies on the 'profiles' table to ensure a clean state.
DROP POLICY IF EXISTS "Enable read access for authenticated users on profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON public.profiles;

-- Re-create policies for 'profiles' using the new secure function.
-- This ensures that any user can only access their own profile data.

CREATE POLICY "Enable read access for authenticated users on profiles"
ON public.profiles FOR SELECT
TO authenticated
USING (public.get_user_id_securely() = id);

CREATE POLICY "Enable update for users based on id"
ON public.profiles FOR UPDATE
TO authenticated
USING (public.get_user_id_securely() = id)
WITH CHECK (public.get_user_id_securely() = id);

CREATE POLICY "Enable insert for authenticated users"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (public.get_user_id_securely() = id);

CREATE POLICY "Users can delete their own profile"
ON public.profiles FOR DELETE
TO authenticated
USING (public.get_user_id_securely() = id);

-- The policies for the 'courses' table are simple and don't depend on user context,
-- but we'll ensure they are correct.
DROP POLICY IF EXISTS "Public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Authenticated read access to active courses" ON public.courses;

CREATE POLICY "Public read access to active courses"
ON public.courses FOR SELECT
TO public
USING (is_active = true);

-- Re-enable RLS on both tables just in case it was disabled.
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
