
-- Disable RLS temporarily on courses table to allow public access
ALTER TABLE public.courses DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on courses table
DROP POLICY IF EXISTS "Enable read access for all users on courses" ON public.courses;
DROP POLICY IF EXISTS "Allow public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Allow authenticated users to read courses" ON public.courses;
DROP POLICY IF EXISTS "Public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Authenticated read access to active courses" ON public.courses;

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

-- Also ensure profiles table has proper policies to avoid recursion
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Enable read access for authenticated users on profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.profiles;

-- Create simple policies for profiles
CREATE POLICY "Enable read access for authenticated users on profiles" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Enable update for users based on id" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Enable insert for authenticated users" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = id);

-- Ensure RLS is enabled on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
