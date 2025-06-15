
-- Insert comprehensive course data into the courses table
INSERT INTO public.courses (
  id, title, description, overview, what_you_will_learn, education_level, 
  category, subject, price, discount_percentage, is_active, thumbnail_url
) VALUES 

-- SD Courses
(
  gen_random_uuid(),
  'Matematika Dasar SD Kelas 1-3',
  'Belajar konsep dasar matematika untuk siswa SD kelas rendah',
  'Kursus ini dirancang khusus untuk membantu siswa SD kelas 1-3 memahami konsep dasar matematika dengan cara yang menyenangkan dan mudah dipahami.',
  ARRAY['Mengenal angka 1-100', 'Operasi penjumlahan dan pengurangan', 'Konsep dasar geometri', 'Pemecahan masalah sederhana'],
  'SD',
  'SD Kelas 1-2-3',
  'Matematika',
  150000,
  20,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Bahasa Indonesia SD Kelas 1-3',
  'Pembelajaran membaca, menulis, dan berbicara untuk SD kelas rendah',
  'Kursus bahasa Indonesia yang komprehensif untuk mengembangkan kemampuan membaca, menulis, dan berbicara siswa SD kelas 1-3.',
  ARRAY['Membaca dengan lancar', 'Menulis huruf dan kata', 'Bercerita sederhana', 'Memahami teks bacaan'],
  'SD',
  'SD Kelas 1-2-3',
  'Bahasa Indonesia',
  150000,
  15,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Matematika SD Kelas 4-6',
  'Matematika lanjutan untuk siswa SD kelas tinggi',
  'Kursus matematika yang membahas topik-topik yang lebih kompleks untuk siswa SD kelas 4-6 dengan pendekatan yang sistematis.',
  ARRAY['Operasi hitung campuran', 'Pecahan dan desimal', 'Bangun datar dan ruang', 'Statistika dasar'],
  'SD',
  'SD Kelas 4-5-6',
  'Matematika',
  180000,
  25,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'IPA Terpadu SD Kelas 4-6',
  'Ilmu Pengetahuan Alam untuk siswa SD kelas tinggi',
  'Eksplorasi dunia sains melalui eksperimen sederhana dan penjelasan konsep IPA yang mudah dipahami untuk siswa SD kelas 4-6.',
  ARRAY['Konsep dasar fisika', 'Pengenalan biologi', 'Eksperimen sederhana', 'Lingkungan dan ekosistem'],
  'SD',
  'SD Kelas 4-5-6',
  'IPA',
  180000,
  20,
  true,
  '/placeholder.svg'
),

-- SMP Courses
(
  gen_random_uuid(),
  'Matematika SMP Kelas 7',
  'Fondasi matematika untuk siswa SMP kelas 7',
  'Kursus matematika yang membahas konsep-konsep dasar aljabar, geometri, dan statistika untuk siswa SMP kelas 7.',
  ARRAY['Bilangan bulat dan pecahan', 'Aljabar dasar', 'Geometri bidang datar', 'Statistika dan peluang'],
  'SMP',
  'SMP',
  'Matematika',
  220000,
  15,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Bahasa Inggris SMP',
  'English for Junior High School Students',
  'Comprehensive English course covering grammar, vocabulary, reading, and speaking skills for junior high school students.',
  ARRAY['Basic grammar structures', 'Vocabulary building', 'Reading comprehension', 'Speaking practice'],
  'SMP',
  'SMP',
  'Bahasa Inggris',
  200000,
  20,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'IPA Terpadu SMP',
  'Ilmu Pengetahuan Alam untuk siswa SMP',
  'Kursus IPA terpadu yang mengintegrasikan fisika, kimia, dan biologi untuk siswa SMP dengan pendekatan eksperimental.',
  ARRAY['Konsep dasar fisika', 'Pengenalan kimia', 'Biologi dan lingkungan', 'Metode ilmiah'],
  'SMP',
  'SMP',
  'IPA',
  250000,
  25,
  true,
  '/placeholder.svg'
),

-- SMA Courses
(
  gen_random_uuid(),
  'Matematika SMA Kelas 10',
  'Matematika dasar untuk siswa SMA kelas 10',
  'Kursus matematika wajib yang membahas fungsi, trigonometri, dan geometri untuk siswa SMA kelas 10.',
  ARRAY['Fungsi dan grafik', 'Trigonometri dasar', 'Geometri analitik', 'Logika matematika'],
  'SMA',
  'SMA Kelas 10',
  'Matematika',
  280000,
  20,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Fisika SMA IPA',
  'Fisika untuk siswa SMA jurusan IPA',
  'Kursus fisika komprehensif yang membahas mekanika, termodinamika, dan gelombang untuk siswa SMA IPA.',
  ARRAY['Mekanika Newton', 'Termodinamika', 'Gelombang dan bunyi', 'Listrik dan magnet'],
  'SMA',
  'SMA IPA',
  'Fisika',
  320000,
  25,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Kimia SMA IPA',
  'Kimia untuk siswa SMA jurusan IPA',
  'Mempelajari konsep-konsep dasar kimia, reaksi kimia, dan kimia organik untuk siswa SMA IPA.',
  ARRAY['Struktur atom', 'Ikatan kimia', 'Reaksi redoks', 'Kimia organik dasar'],
  'SMA',
  'SMA IPA',
  'Kimia',
  320000,
  20,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Biologi SMA IPA',
  'Biologi untuk siswa SMA jurusan IPA',
  'Eksplorasi kehidupan dari tingkat sel hingga ekosistem untuk siswa SMA jurusan IPA.',
  ARRAY['Struktur dan fungsi sel', 'Genetika dasar', 'Evolusi', 'Ekologi dan lingkungan'],
  'SMA',
  'SMA IPA',
  'Biologi',
  300000,
  15,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Geografi SMA IPS',
  'Geografi untuk siswa SMA jurusan IPS',
  'Mempelajari fenomena geosfer dan interaksi manusia dengan lingkungan untuk siswa SMA IPS.',
  ARRAY['Geografi fisik', 'Geografi manusia', 'Peta dan kartografi', 'Lingkungan hidup'],
  'SMA',
  'SMA IPS',
  'Geografi',
  280000,
  20,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Sejarah SMA IPS',
  'Sejarah untuk siswa SMA jurusan IPS',
  'Pembelajaran sejarah Indonesia dan dunia untuk mengembangkan pemahaman kronologis dan analisis historis.',
  ARRAY['Sejarah Indonesia', 'Sejarah dunia', 'Analisis sumber sejarah', 'Kronologi peristiwa'],
  'SMA',
  'SMA IPS',
  'Sejarah',
  260000,
  15,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Ekonomi SMA IPS',
  'Ekonomi untuk siswa SMA jurusan IPS',
  'Memahami konsep-konsep ekonomi mikro dan makro serta aplikasinya dalam kehidupan sehari-hari.',
  ARRAY['Ekonomi mikro', 'Ekonomi makro', 'Sistem ekonomi', 'Kebijakan ekonomi'],
  'SMA',
  'SMA IPS',
  'Ekonomi',
  290000,
  20,
  true,
  '/placeholder.svg'
),

-- SNBT/UTBK Preparation
(
  gen_random_uuid(),
  'Persiapan SNBT - Tes Potensi Skolastik',
  'Persiapan komprehensif untuk Tes Potensi Skolastik SNBT 2024',
  'Kursus persiapan intensif untuk menghadapi Tes Potensi Skolastik (TPS) dalam SNBT dengan strategi dan latihan soal terbaru.',
  ARRAY['Penalaran umum', 'Pengetahuan kuantitatif', 'Pemahaman bacaan', 'Pengetahuan umum'],
  'SMA',
  'SNBT/UTBK',
  'TPS',
  450000,
  30,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'SNBT Literasi Bahasa Indonesia',
  'Persiapan Literasi Bahasa Indonesia untuk SNBT',
  'Kursus khusus untuk meningkatkan kemampuan literasi bahasa Indonesia dalam menghadapi SNBT.',
  ARRAY['Pemahaman teks', 'Analisis wacana', 'Kaidah bahasa', 'Strategi menjawab soal'],
  'SMA',
  'SNBT/UTBK',
  'Bahasa Indonesia',
  380000,
  25,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'SNBT Literasi Bahasa Inggris',
  'English Literacy for SNBT Preparation',
  'Comprehensive preparation for English literacy section of SNBT with focus on reading comprehension and language skills.',
  ARRAY['Reading comprehension', 'Grammar mastery', 'Vocabulary expansion', 'Test strategies'],
  'SMA',
  'SNBT/UTBK',
  'Bahasa Inggris',
  380000,
  25,
  true,
  '/placeholder.svg'
),

-- Ujian Mandiri
(
  gen_random_uuid(),
  'Persiapan Ujian Mandiri UGM',
  'Persiapan khusus untuk Ujian Mandiri Universitas Gadjah Mada',
  'Kursus persiapan intensif untuk menghadapi Ujian Mandiri UGM dengan materi dan strategi yang disesuaikan dengan pola soal UGM.',
  ARRAY['Matematika IPA/IPS', 'Bahasa Indonesia', 'Bahasa Inggris', 'Tes Potensi Akademik'],
  'SMA',
  'Ujian Mandiri',
  'Ujian Mandiri UGM',
  500000,
  20,
  true,
  '/placeholder.svg'
),
(
  gen_random_uuid(),
  'Persiapan Ujian Mandiri UNDIP',
  'Persiapan khusus untuk Ujian Mandiri Universitas Diponegoro',
  'Kursus persiapan yang dirancang khusus untuk menghadapi Ujian Mandiri UNDIP dengan fokus pada pola soal dan materi yang sering keluar.',
  ARRAY['Kemampuan dasar', 'Kemampuan IPA/IPS', 'Bahasa Inggris', 'Strategi mengerjakan soal'],
  'SMA',
  'Ujian Mandiri',
  'Ujian Mandiri UNDIP',
  480000,
  20,
  true,
  '/placeholder.svg'
);

-- Insert some sample course stats for the new courses
INSERT INTO public.course_stats (course_id, total_enrollments, total_revenue, average_rating, total_reviews)
SELECT 
  id,
  FLOOR(RANDOM() * 500 + 50)::INTEGER as total_enrollments,
  FLOOR(RANDOM() * 10000000 + 1000000)::NUMERIC as total_revenue,
  ROUND((RANDOM() * 2 + 3)::NUMERIC, 1) as average_rating,
  FLOOR(RANDOM() * 200 + 20)::INTEGER as total_reviews
FROM public.courses
WHERE id NOT IN (SELECT course_id FROM public.course_stats WHERE course_id IS NOT NULL);
