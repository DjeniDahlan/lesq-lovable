
-- This migration provides a definitive fix for the "infinite recursion" error
-- by removing the problematic RLS policy from the 'profiles' table.

-- The root cause is a policy on 'profiles' that calls a function which, in turn, reads from 'profiles'.
-- This creates a circular dependency that must be broken.

-- Step 1: Drop the policy that causes the recursion.
DROP POLICY IF EXISTS "Admins can manage all profiles" ON public.profiles;

-- Step 2: To be absolutely sure the remaining policy is correct and doesn't cause issues,
-- we will drop and re-create the policy that allows users to manage their own profile.
DROP POLICY IF EXISTS "Users can manage their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can manage their own profile, and Admins can manage all" ON public.profiles;

CREATE POLICY "Users can manage their own profile"
ON public.profiles FOR ALL
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());
