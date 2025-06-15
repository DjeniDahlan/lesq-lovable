
-- Add the missing foreign key constraint between course_purchases and courses
ALTER TABLE public.course_purchases 
ADD CONSTRAINT course_purchases_course_id_fkey 
FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;

-- Also add foreign key for course_stats to courses if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'course_stats_course_id_fkey'
        AND table_name = 'course_stats'
    ) THEN
        ALTER TABLE public.course_stats 
        ADD CONSTRAINT course_stats_course_id_fkey 
        FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;
    END IF;
END $$;
