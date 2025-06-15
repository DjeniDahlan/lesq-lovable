
-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  overview TEXT,
  what_you_will_learn TEXT[],
  curriculum JSONB,
  materials JSONB,
  questions JSONB,
  instructor_id UUID REFERENCES public.profiles(id),
  reviews JSONB DEFAULT '[]'::jsonb,
  education_level TEXT NOT NULL, -- SD, SMP, SMA
  category TEXT NOT NULL,
  subject TEXT NOT NULL,
  price NUMERIC NOT NULL DEFAULT 0,
  discount_percentage INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course_stats table for analytics
CREATE TABLE public.course_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  total_enrollments INTEGER DEFAULT 0,
  total_revenue NUMERIC DEFAULT 0,
  average_rating NUMERIC DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for courses
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Policy for admins to manage all courses
CREATE POLICY "Admins can manage all courses" 
  ON public.courses 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Policy for instructors to manage their own courses
CREATE POLICY "Instructors can manage their own courses" 
  ON public.courses 
  FOR ALL 
  USING (instructor_id = auth.uid());

-- Policy for public to view active courses
CREATE POLICY "Public can view active courses" 
  ON public.courses 
  FOR SELECT 
  USING (is_active = true);

-- Add RLS policies for course_stats
ALTER TABLE public.course_stats ENABLE ROW LEVEL SECURITY;

-- Policy for admins to view all stats
CREATE POLICY "Admins can view all course stats" 
  ON public.course_stats 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create function to update course stats
CREATE OR REPLACE FUNCTION update_course_stats()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    -- Update enrollment count and revenue for new purchase
    INSERT INTO public.course_stats (course_id, total_enrollments, total_revenue)
    VALUES (NEW.course_id, 1, NEW.price)
    ON CONFLICT (course_id) 
    DO UPDATE SET 
      total_enrollments = course_stats.total_enrollments + 1,
      total_revenue = course_stats.total_revenue + NEW.price,
      last_updated = now();
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update course stats
CREATE TRIGGER update_course_stats_trigger
  AFTER INSERT ON public.course_purchases
  FOR EACH ROW EXECUTE FUNCTION update_course_stats();
