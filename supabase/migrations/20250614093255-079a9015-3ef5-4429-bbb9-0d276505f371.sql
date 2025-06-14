
-- Add missing columns to the profiles table for instructor information
ALTER TABLE public.profiles 
ADD COLUMN bio text,
ADD COLUMN expertise text,
ADD COLUMN education text,
ADD COLUMN experience text;
