
-- Disable RLS temporarily on courses table to allow public access
ALTER TABLE public.courses DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on courses table
DROP POLICY IF EXISTS "Enable read access for all users on courses" ON public.courses;
DROP POLICY IF EXISTS "Allow public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Allow authenticated users to read courses" ON public.courses;

-- Re-enable RLS with a simple policy that doesn't reference other tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Create a simple policy that allows public read access to active courses
-- without any dependency on profiles table
CREATE POLICY "Public read access to active courses" 
ON public.courses FOR SELECT 
TO public
USING (is_active = true);

-- Also create policy for authenticated users
CREATE POLICY "Authenticated read access to active courses" 
ON public.courses FOR SELECT 
TO authenticated
USING (is_active = true);
