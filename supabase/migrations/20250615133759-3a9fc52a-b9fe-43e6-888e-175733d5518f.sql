
-- Drop all existing policies on courses table to be safe
DROP POLICY IF EXISTS "Public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Authenticated read access to active courses" ON public.courses;

-- Re-create simple policies for courses
CREATE POLICY "Public read access to active courses" 
ON public.courses FOR SELECT 
TO public
USING (is_active = true);

CREATE POLICY "Authenticated read access to active courses" 
ON public.courses FOR SELECT 
TO authenticated
USING (is_active = true);

-- Drop all existing policies on profiles table to be safe
DROP POLICY IF EXISTS "Enable read access for authenticated users on profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.profiles;

-- Re-create policies for profiles using the security definer function
-- This is a more robust way to prevent recursion issues.
CREATE POLICY "Enable read access for authenticated users on profiles" 
ON public.profiles FOR SELECT 
USING (public.get_current_user_id() = id);

CREATE POLICY "Enable update for users based on id" 
ON public.profiles FOR UPDATE 
USING (public.get_current_user_id() = id);

CREATE POLICY "Enable insert for authenticated users" 
ON public.profiles FOR INSERT 
WITH CHECK (public.get_current_user_id() = id);

-- Ensure RLS is enabled on both tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
