
-- Insert sample courses data
INSERT INTO public.courses (
  title, 
  description, 
  overview,
  category, 
  subject, 
  education_level, 
  price, 
  discount_percentage,
  thumbnail_url,
  what_you_will_learn,
  is_active
) VALUES 
(
  'Matematika Dasar SD Kelas 1-3',
  'Kursus matematika dasar untuk siswa sekolah dasar kelas 1, 2, dan 3',
  'Pelajari konsep dasar matematika dengan cara yang menyenangkan dan mudah dipahami',
  'Sekolah Dasar (SD)',
  'Matematika',
  'SD Kelas 1-3',
  150000,
  20,
  'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400',
  ARRAY['Mengenal angka 1-100', 'Operasi penjumlahan dan pengurangan', 'Mengenal bentuk geometri dasar'],
  true
),
(
  'Bahasa Indonesia untuk SD',
  'Pelajari bahasa Indonesia dengan baik dan benar untuk siswa SD',
  'Kursus komprehensif bahasa Indonesia yang mencakup membaca, menulis, dan berbicara',
  'Sekolah Dasar (SD)',
  'Bahasa Indonesia',
  'SD Kelas 4-6',
  180000,
  15,
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
  ARRAY['Membaca dengan lancar', 'Menulis karangan sederhana', 'Memahami tata bahasa'],
  true
),
(
  'IPA Terpadu SMP',
  'Ilmu Pengetahuan Alam untuk siswa SMP kelas 7, 8, dan 9',
  'Eksplorasi dunia sains melalui eksperimen dan penjelasan yang mudah dipahami',
  'Sekolah Menengah Pertama (SMP)',
  'IPA',
  'SMP',
  250000,
  25,
  'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
  ARRAY['Memahami konsep fisika dasar', 'Mengenal biologi dan lingkungan', 'Eksperimen kimia sederhana'],
  true
),
(
  'Matematika IPA SMA',
  'Matematika tingkat lanjut untuk siswa SMA jurusan IPA',
  'Persiapan matematika untuk ujian dan kuliah dengan materi yang mendalam',
  'SMA IPA',
  'Matematika',
  'SMA Kelas 11-12',
  300000,
  30,
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
  ARRAY['Kalkulus dasar', 'Trigonometri lanjutan', 'Statistika dan peluang'],
  true
),
(
  'Persiapan SNBT UTBK',
  'Kursus persiapan SNBT dan UTBK untuk masuk perguruan tinggi',
  'Latihan soal dan strategi mengerjakan tes untuk sukses SNBT/UTBK',
  'SNBT/UTBK',
  'TPS',
  'Alumni SMA',
  400000,
  35,
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
  ARRAY['Tes Potensi Skolastik', 'Literasi dan Numerasi', 'Strategi mengerjakan soal'],
  true
),
(
  'Bahasa Inggris SMA',
  'Kursus bahasa Inggris untuk siswa SMA semua jurusan',
  'Tingkatkan kemampuan bahasa Inggris untuk akademik dan komunikasi',
  'SMA Kelas 10',
  'Bahasa Inggris',
  'SMA Kelas 10',
  220000,
  20,
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
  ARRAY['Grammar dan vocabulary', 'Reading comprehension', 'Speaking dan listening'],
  true
);
