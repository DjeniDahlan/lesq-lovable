
-- Fix infinite recursion in RLS policies by creating a simple function
-- and updating policies to avoid self-referencing queries

-- First, drop all existing problematic policies
DROP POLICY IF EXISTS "allow_own_profile_access" ON public.profiles;
DROP POLICY IF EXISTS "allow_own_purchases_access" ON public.course_purchases;

-- Create a simple security definer function to get current user ID
CREATE OR REPLACE FUNCTION public.get_auth_user_id()
RETURNS UUID AS $$
BEGIN
  RETURN auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create simple, non-recursive policies for profiles
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT 
  TO authenticated
  USING (id = get_auth_user_id());

CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT 
  TO authenticated
  WITH CHECK (id = get_auth_user_id());

CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE 
  TO authenticated
  USING (id = get_auth_user_id())
  WITH CHECK (id = get_auth_user_id());

-- Create simple, non-recursive policies for course_purchases
CREATE POLICY "purchases_select_own" ON public.course_purchases
  FOR SELECT 
  TO authenticated
  USING (user_id = get_auth_user_id());

CREATE POLICY "purchases_insert_own" ON public.course_purchases
  FOR INSERT 
  TO authenticated
  WITH CHECK (user_id = get_auth_user_id());

CREATE POLICY "purchases_update_own" ON public.course_purchases
  FOR UPDATE 
  TO authenticated
  USING (user_id = get_auth_user_id())
  WITH CHECK (user_id = get_auth_user_id());
