
-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public read access to active courses" ON public.courses;
DROP POLICY IF EXISTS "Allow authenticated users to read courses" ON public.courses;

-- Create simple RLS policy for courses table that allows public read access
-- This avoids any recursion issues with profiles table
CREATE POLICY "Enable read access for all users on courses" 
ON public.courses FOR SELECT 
USING (is_active = true);

-- Ensure RLS is enabled on courses table
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Also ensure profiles table has proper policies to avoid recursion
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

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
