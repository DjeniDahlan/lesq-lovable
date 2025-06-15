
import { useEffect, useState } from 'react';
import CourseCard, { CourseType } from './CourseCard';
import { supabase } from '@/integrations/supabase/client';

interface CourseGridProps {
  title?: string;
  description?: string;
  category?: string;
  limit?: number;
}

const CourseGrid = ({ title, description, category, limit }: CourseGridProps) => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let query = supabase
          .from('courses')
          .select('*')
          .eq('is_active', true);

        if (category) {
          query = query.eq('category', category);
        }

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) {
          console.error('Error fetching courses:', error);
          return;
        }

        if (data) {
          const formattedCourses: CourseType[] = data.map(course => ({
            id: course.id,
            title: course.title,
            instructor: 'Les-Q Team', // Default instructor
            thumbnail: course.thumbnail_url || '/placeholder.svg',
            price: course.price,
            discountPrice: course.discount_percentage ? 
              course.price * (1 - course.discount_percentage / 100) : undefined,
            rating: 4.5, // Default rating
            reviewCount: 124, // Default review count
            level: course.education_level as any || 'Semua Level',
            duration: '8 jam',
            studentCount: 1250,
            category: course.category,
            isBestseller: course.price > 200000,
            isNew: new Date(course.created_at).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000
          }));

          setCourses(formattedCourses);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [category, limit]);

  if (loading) {
    return (
      <div className="space-y-4">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-80 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
