
-- Hapus semua constraint yang ada terkait role
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_role_check;

-- Update semua data yang ada untuk memastikan role valid
UPDATE public.profiles 
SET role = 'student' 
WHERE role IS NULL OR role NOT IN ('student', 'instructor', 'admin');

-- Tambahkan constraint baru setelah data dibersihkan
ALTER TABLE public.profiles ADD CONSTRAINT profiles_role_check 
  CHECK (role IN ('student', 'instructor', 'admin'));

-- Update trigger function untuk memastikan role default yang benar
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'fullName', 'User'),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'student')
  );
  RETURN NEW;
END;
$$;
