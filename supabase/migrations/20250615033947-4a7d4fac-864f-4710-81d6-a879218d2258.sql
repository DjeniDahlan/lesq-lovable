
-- Hapus semua RLS policies yang ada di tabel profiles untuk menghindari infinite recursion
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;

-- Buat RLS policies yang sederhana dan aman untuk tabel profiles
CREATE POLICY "Enable read access for users to their own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Enable insert access for users to their own profile"
ON public.profiles FOR INSERT
WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable update access for users to their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id);

-- Pastikan user yang sudah login memiliki profil yang benar
-- Update profil untuk user yang sudah ada dengan data yang benar
UPDATE public.profiles 
SET 
  full_name = 'Khalil Abrori Dahlan',
  email = 'khalil.abrori.dahlan@gmail.com'
WHERE id = '18739a69-edcb-445b-9fdb-3c6b395aaa5e';

-- Jika belum ada profil untuk user ini, insert yang baru
INSERT INTO public.profiles (id, full_name, email, role, created_at, updated_at)
VALUES (
  '18739a69-edcb-445b-9fdb-3c6b395aaa5e',
  'Khalil Abrori Dahlan',
  'khalil.abrori.dahlan@gmail.com',
  'student',
  now(),
  now()
)
ON CONFLICT (id) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  email = EXCLUDED.email,
  updated_at = now();
