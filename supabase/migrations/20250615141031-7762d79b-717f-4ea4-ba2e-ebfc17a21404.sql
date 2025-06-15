
-- Step 1: Create a function to securely get the current user's role.
-- This function is a SECURITY DEFINER, allowing it to bypass RLS on the profiles table
-- to prevent recursion, which has been the source of previous errors.
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = '' -- Clears search_path for security
AS $$
  -- This query can read the 'role' because it runs with the permissions of the function owner (postgres), bypassing RLS.
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

-- Step 2: Clean up ALL existing policies on the 'courses' table to start fresh.
DROP POLICY IF EXISTS "Admins can manage all courses" ON public.courses;
DROP POLICY IF EXISTS "Instructors can manage their own courses" ON public.courses;
DROP POLICY IF EXISTS "Public can view active courses" ON public.courses;
DROP POLICY IF EXISTS "Public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Authenticated read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Enable read access for all users on courses" ON public.courses;
DROP POLICY IF EXISTS "Allow public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Allow authenticated users to read courses" ON public.courses;

-- Step 3: Re-create clear policies for 'courses'.
-- Public users can view active courses.
CREATE POLICY "Public can view active courses"
ON public.courses FOR SELECT
TO public
USING (is_active = true);

-- Instructors can manage their own courses.
CREATE POLICY "Instructors can manage their own courses"
ON public.courses FOR ALL
TO authenticated
USING (instructor_id = auth.uid())
WITH CHECK (instructor_id = auth.uid());

-- Admins can manage all courses.
CREATE POLICY "Admins can manage all courses"
ON public.courses FOR ALL
TO authenticated
USING (public.get_current_user_role() = 'admin');


-- Step 4: Clean up ALL existing policies on the 'profiles' table.
DROP POLICY IF EXISTS "Enable read access for authenticated users on profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can delete any profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can read their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can manage all profiles" ON public.profiles;


-- Step 5: Re-create clear policies for 'profiles'.
-- A user can perform all actions on their own profile.
CREATE POLICY "Users can manage their own profile"
ON public.profiles FOR ALL
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Admins can manage all profiles. This is combined with the policy above.
-- A user can access a profile if they own it OR if they are an admin.
CREATE POLICY "Admins can manage all profiles"
ON public.profiles FOR ALL
TO authenticated
USING (public.get_current_user_role() = 'admin');

-- Step 6: Ensure RLS is enabled on both tables.
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
