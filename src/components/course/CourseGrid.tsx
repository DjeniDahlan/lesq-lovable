
import { useQuery } from '@tanstack/react-query';
import CourseCard, { CourseType } from './CourseCard';
import { supabase } from '@/integrations/supabase/client';

interface CourseGridProps {
  title?: string;
  description?: string;
  category?: string;
  limit?: number;
}

const fetchCourses = async ({ category, limit }: { category?: string, limit?: number }): Promise<CourseType[]> => {
  console.log('Fetching courses with TanStack Query. Category:', category, 'limit:', limit);
  
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

  console.log('Courses query result:', { data, error });

  if (error) {
    // React Query akan menangkap error ini
    throw error;
  }

  if (data) {
    const formattedCourses: CourseType[] = data.map(course => ({
      id: course.id,
      title: course.title,
      instructor: 'Les-Q Team', // Default instructor
      thumbnail: course.thumbnail_url || '/placeholder.svg',
      price: course.price,
      discountPrice: course.discount_percentage ? 
        Math.round(course.price * (1 - course.discount_percentage / 100)) : undefined,
      rating: 4.5, // Default rating
      reviewCount: 124, // Default review count
      level: course.education_level as any || 'Semua Level',
      duration: '8 jam',
      studentCount: 1250,
      category: course.category,
      isBestseller: course.price > 200000,
      isNew: new Date(course.created_at).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000
    }));
    console.log('Formatted courses:', formattedCourses);
    return formattedCourses;
  }
  return [];
};


const CourseGrid = ({ title, description, category, limit }: CourseGridProps) => {
  const { data: courses, isLoading, error } = useQuery<CourseType[], Error>({
    queryKey: ['courses', { category, limit }],
    queryFn: () => fetchCourses({ category, limit }),
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(limit || 4)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-80 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-600 mb-2">Gagal memuat kursus</p>
          <p className="text-sm text-red-500">{error.message}</p>
        </div>
      </div>
    );
  }

  if (courses?.length === 0) {
    return (
      <div className="space-y-4">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className="text-center py-12 bg-gray-50 rounded-lg border">
          <p className="text-gray-600 mb-2">Belum ada kursus tersedia</p>
          <p className="text-sm text-gray-500">Kursus untuk kategori ini akan segera ditambahkan</p>
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
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
