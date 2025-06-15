
-- Drop legacy/old function names if they exist to avoid conflicts
DROP FUNCTION IF EXISTS public.get_courses_by_category(TEXT, INTEGER);

-- Create the new, robust function to fetch courses
CREATE OR REPLACE FUNCTION public.get_active_courses(p_category TEXT, p_limit INTEGER)
RETURNS TABLE (
    id uuid,
    title text,
    thumbnail_url text,
    price numeric,
    discount_percentage integer,
    education_level text,
    category text,
    created_at timestamptz,
    instructor_name text -- We can safely join to profiles here
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    RETURN QUERY
    SELECT
        c.id,
        c.title,
        c.thumbnail_url,
        c.price,
        c.discount_percentage,
        c.education_level,
        c.category,
        c.created_at,
        COALESCE(p.full_name, 'Les-Q Team') AS instructor_name
    FROM
        courses AS c
    LEFT JOIN
        profiles AS p ON c.instructor_id = p.id
    WHERE
        c.is_active = true
        AND (p_category IS NULL OR c.category = p_category)
    ORDER BY
        c.created_at DESC
    LIMIT
        p_limit;
END;
$$;

-- Grant execution permission to all roles (anonymous and authenticated users)
GRANT EXECUTE ON FUNCTION public.get_active_courses(TEXT, INTEGER) TO anon, authenticated;

