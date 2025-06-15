
-- First, drop all policies that depend on the problematic functions
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own purchases" ON public.course_purchases;
DROP POLICY IF EXISTS "Users can insert own purchases" ON public.course_purchases;

-- Now we can safely drop the functions
DROP FUNCTION IF EXISTS public.get_current_user_role() CASCADE;
DROP FUNCTION IF EXISTS public.get_user_id_securely() CASCADE;
DROP FUNCTION IF EXISTS public.get_current_user_id() CASCADE;

-- Completely disable RLS temporarily to clear any cached policies
ALTER TABLE public.courses DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_purchases DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies to ensure clean slate
DROP POLICY IF EXISTS "Public can view active courses" ON public.courses;
DROP POLICY IF EXISTS "Instructors can manage their own courses" ON public.courses;
DROP POLICY IF EXISTS "Admins can manage all courses" ON public.courses;
DROP POLICY IF EXISTS "Authenticated read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Users can manage their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can manage all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable read access for authenticated users on profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON public.profiles;

-- Re-enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_purchases ENABLE ROW LEVEL SECURITY;

-- Create the most basic policies possible
-- Allow anyone to read active courses (no authentication check at all)
CREATE POLICY "allow_public_read_active_courses"
ON public.courses FOR SELECT
USING (is_active = true);

-- Only allow authenticated users to manage their own profile using basic auth.uid()
CREATE POLICY "allow_own_profile_access"
ON public.profiles FOR ALL
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Allow users to view and manage their own purchases
CREATE POLICY "allow_own_purchases_access"
ON public.course_purchases FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());
