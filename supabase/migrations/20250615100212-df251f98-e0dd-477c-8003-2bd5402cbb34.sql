
-- First, let's add the missing courses (this should work fine)
INSERT INTO public.courses (id, title, description, education_level, category, subject, price, thumbnail_url, overview, what_you_will_learn, is_active) VALUES
(gen_random_uuid(), 'Tes Potensi Skolastik (TPS) SNBT 2024', 'Persiapan lengkap untuk menghadapi Tes Potensi Skolastik SNBT 2024 dengan materi terkini dan strategi jitu.', 'SMA', 'SNBT/UTBK', 'TPS', 150000, '', 'Kursus persiapan TPS SNBT 2024 yang komprehensif untuk membantu siswa mencapai skor maksimal.', ARRAY['Pemahaman konsep dasar TPS', 'Strategi mengerjakan soal', 'Latihan soal dan pembahasan', 'Tips dan trik ujian'], true),

(gen_random_uuid(), 'Belajar React JS', 'Pelajari React JS dari dasar hingga mahir dengan project-based learning.', 'Semua Level', 'Programming', 'Web Development', 250000, '', 'Kursus React JS lengkap untuk pemula hingga advanced developer.', ARRAY['Component-based architecture', 'State management', 'Hooks dan Context API', 'Project deployment'], true),

(gen_random_uuid(), 'Node.js untuk Pemula', 'Membangun aplikasi backend dengan Node.js dan Express.', 'Pemula', 'Programming', 'Backend Development', 200000, '', 'Kursus Node.js dari basic hingga membuat REST API lengkap.', ARRAY['JavaScript fundamentals', 'Node.js core modules', 'Express framework', 'Database integration'], true),

(gen_random_uuid(), 'Pemrograman Python', 'Belajar Python dari dasar hingga data science dan web development.', 'Pemula', 'Programming', 'Python', 180000, '', 'Kursus Python komprehensif untuk berbagai aplikasi.', ARRAY['Python syntax', 'Data structures', 'Object-oriented programming', 'Libraries dan frameworks'], true),

(gen_random_uuid(), 'Web Design dengan Figma', 'Desain UI/UX modern menggunakan Figma untuk website dan aplikasi.', 'Pemula', 'Design', 'UI/UX', 175000, '', 'Kursus desain UI/UX menggunakan Figma dari basic hingga advanced.', ARRAY['Design principles', 'Figma tools mastery', 'Prototyping', 'Design systems'], true),

(gen_random_uuid(), 'Digital Marketing', 'Strategi pemasaran digital terkini untuk meningkatkan brand awareness.', 'Semua Level', 'Marketing', 'Digital Marketing', 220000, '', 'Kursus digital marketing lengkap dengan case study real.', ARRAY['Social media marketing', 'SEO dan SEM', 'Content marketing', 'Analytics dan reporting'], true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS for courses table if not already enabled
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Anyone can view courses" ON public.courses;
DROP POLICY IF EXISTS "Only admins can manage courses" ON public.courses;

-- Allow everyone to read active courses (public access)
CREATE POLICY "Anyone can view courses" 
  ON public.courses 
  FOR SELECT 
  USING (is_active = true);

-- Only admins can insert, update, or delete courses
CREATE POLICY "Only admins can manage courses" 
  ON public.courses 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Enable RLS for course_purchases table if not already enabled
ALTER TABLE public.course_purchases ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Users can view their own purchases" ON public.course_purchases;
DROP POLICY IF EXISTS "Users can create their own purchases" ON public.course_purchases;
DROP POLICY IF EXISTS "Admins can manage all purchases" ON public.course_purchases;

-- Users can only see their own purchases
CREATE POLICY "Users can view their own purchases" 
  ON public.course_purchases 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Users can create their own purchases
CREATE POLICY "Users can create their own purchases" 
  ON public.course_purchases 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Admins can view and update all purchases (for verification)
CREATE POLICY "Admins can manage all purchases" 
  ON public.course_purchases 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
