
-- Complete cleanup to resolve infinite recursion issues
-- This will remove all problematic policies and recreate only safe ones

-- Step 1: Clean up all policies on courses table
DROP POLICY IF EXISTS "Public can view active courses" ON public.courses;
DROP POLICY IF EXISTS "Instructors can manage their own courses" ON public.courses;
DROP POLICY IF EXISTS "Admins can manage all courses" ON public.courses;
DROP POLICY IF EXISTS "Authenticated read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Public read access to active courses" ON public.courses;

-- Step 2: Clean up all policies on profiles table to be absolutely sure
DROP POLICY IF EXISTS "Users can manage their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can manage all profiles" ON public.profiles;

-- Step 3: Create simple, safe policies
-- Allow public to view active courses (no dependency on profiles table)
CREATE POLICY "Public can view active courses"
ON public.courses FOR SELECT
TO public
USING (is_active = true);

-- Allow users to manage their own profile (simple, no recursion)
CREATE POLICY "Users can manage their own profile"
ON public.profiles FOR ALL
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Ensure RLS is enabled
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
