
-- First, let's insert some sample courses that we can reference
INSERT INTO public.courses (id, title, description, education_level, category, subject, price, instructor_id, is_active)
VALUES 
  ('f86c235a-6cbc-4070-95fb-9f9d74ba4f8f', 'Pengembangan Web Frontend dengan React & TypeScript', 'Kursus lengkap untuk mempelajari pengembangan web modern menggunakan React dan TypeScript', 'SMA', 'Teknologi', 'Programming', 299000, '18739a69-edcb-445b-9fdb-3c6b395aaa5e', true),
  ('a123b456-7890-1234-5678-90abcdef1234', 'Keuangan Pribadi: Strategi Investasi dan Pengelolaan', 'Belajar mengelola keuangan pribadi dan strategi investasi yang efektif', 'SMA', 'Keuangan', 'Investasi', 199000, '18739a69-edcb-445b-9fdb-3c6b395aaa5e', true)
ON CONFLICT (id) DO NOTHING;

-- Add unique constraint on course_id in course_stats table
ALTER TABLE public.course_stats ADD CONSTRAINT course_stats_course_id_unique UNIQUE (course_id);

-- Fix the course_purchases table to use UUID instead of TEXT for course_id
ALTER TABLE public.course_purchases 
ALTER COLUMN course_id TYPE UUID USING course_id::UUID;

-- Drop existing problematic RLS policies if they exist
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;

-- Create a security definer function to get current user ID safely
CREATE OR REPLACE FUNCTION public.get_current_user_id()
RETURNS UUID AS $$
  SELECT auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Create new RLS policies that avoid infinite recursion
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (id = get_current_user_id());

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (id = get_current_user_id());

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (id = get_current_user_id());

-- Also fix course_purchases table RLS policies
DROP POLICY IF EXISTS "Users can view own purchases" ON public.course_purchases;
DROP POLICY IF EXISTS "Users can insert own purchases" ON public.course_purchases;

CREATE POLICY "Users can view own purchases" ON public.course_purchases
  FOR SELECT USING (user_id = get_current_user_id());

CREATE POLICY "Users can insert own purchases" ON public.course_purchases
  FOR INSERT WITH CHECK (user_id = get_current_user_id());

-- Enable RLS on both tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_purchases ENABLE ROW LEVEL SECURITY;

-- Insert sample course purchase data for Maulana Wafi Dahlan using the course IDs we just created
INSERT INTO public.course_purchases (user_id, course_id, price, status, purchase_date)
VALUES 
  ('24220d5d-71a2-4da0-96f8-5ae7c51b9b05', 'f86c235a-6cbc-4070-95fb-9f9d74ba4f8f', 299000, 'completed', NOW() - INTERVAL '2 days'),
  ('24220d5d-71a2-4da0-96f8-5ae7c51b9b05', 'a123b456-7890-1234-5678-90abcdef1234', 199000, 'pending', NOW() - INTERVAL '1 day')
ON CONFLICT DO NOTHING;
