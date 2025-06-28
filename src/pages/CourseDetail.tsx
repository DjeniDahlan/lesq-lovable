
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PurchaseDialog from '@/components/course/PurchaseDialog';
import CourseHeader from '@/components/course/CourseHeader';
import CourseImage from '@/components/course/CourseImage';
import CourseContent from '@/components/course/CourseContent';
import CourseSidebar from '@/components/course/CourseSidebar';
import CourseDetailLoading from '@/components/course/CourseDetailLoading';
import CourseDetailError from '@/components/course/CourseDetailError';
import { supabase } from '@/integrations/supabase/client';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail_url?: string;
  education_level: string;
  category: string;
  subject: string;
  overview?: string;
  what_you_will_learn?: string[];
  is_active: boolean;
  instructor_name: string;
}

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) {
        setError('ID kursus tidak valid');
        setLoading(false);
        return;
      }

      console.log('Fetching course with ID:', id);

      try {
        const { data, error } = await supabase
          .rpc('get_course_details_by_id', { p_course_id: id });

        console.log('RPC response:', { data, error });

        if (error) {
          console.error('Error fetching course:', error);
          setError('Gagal memuat detail kursus');
          return;
        }

        if (!data || data.length === 0) {
          console.log('No course found with ID:', id);
          setError('Kursus tidak ditemukan');
          return;
        }

        const courseData = data[0];
        console.log('Course data:', courseData);
        
        setCourse(courseData);
        setError(null);
      } catch (error) {
        console.error('Unexpected error:', error);
        setError('Terjadi kesalahan saat memuat kursus');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <CourseDetailLoading />;
  }

  if (error || !course) {
    return <CourseDetailError error={error || 'Kursus tidak ditemukan'} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <CourseHeader
              title={course.title}
              description={course.description}
              category={course.category}
              subject={course.subject}
              educationLevel={course.education_level}
              instructorName={course.instructor_name}
            />

            <CourseImage
              thumbnailUrl={course.thumbnail_url}
              title={course.title}
            />

            <CourseContent
              overview={course.overview}
              description={course.description}
              whatYouWillLearn={course.what_you_will_learn}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar
              price={course.price}
              onPurchaseClick={() => setIsPurchaseDialogOpen(true)}
            />
          </div>
        </div>
      </main>

      <Footer />

      <PurchaseDialog
        isOpen={isPurchaseDialogOpen}
        onClose={() => setIsPurchaseDialogOpen(false)}
        courseTitle={course.title}
        courseId={course.id}
        isTrial={course.price === 0}
        price={course.price}
      />
    </div>
  );
};

export default CourseDetail;
