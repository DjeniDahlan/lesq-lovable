
CREATE OR REPLACE FUNCTION public.get_course_details_by_id(p_course_id UUID)
RETURNS TABLE (
    id uuid,
    title text,
    description text,
    price numeric,
    thumbnail_url text,
    education_level text,
    category text,
    subject text,
    overview text,
    what_you_will_learn text[],
    is_active boolean,
    instructor_name text
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
        c.description,
        c.price,
        c.thumbnail_url,
        c.education_level,
        c.category,
        c.subject,
        c.overview,
        c.what_you_will_learn,
        c.is_active,
        COALESCE(p.full_name, 'Les-Q Team') AS instructor_name
    FROM
        courses AS c
    LEFT JOIN
        profiles AS p ON c.instructor_id = p.id
    WHERE
        c.id = p_course_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_course_details_by_id(UUID) TO anon, authenticated;
