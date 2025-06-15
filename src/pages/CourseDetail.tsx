
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Play, BookOpen, Star, Clock, Award, Users, Globe, 
  CheckCircle, Heart, Share2, Download 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PurchaseDialog from '@/components/course/PurchaseDialog';
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
}

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from('courses')
          .select('*')
          .eq('id', id)
          .eq('is_active', true)
          .single();

        if (error) {
          console.error('Error fetching course:', error);
          return;
        }

        setCourse(data);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-60 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Kursus tidak ditemukan</h1>
            <p className="text-muted-foreground">Kursus yang Anda cari mungkin tidak tersedia.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">{course.category}</Badge>
                <Badge variant="outline">{course.subject}</Badge>
                <Badge variant="outline">{course.education_level}</Badge>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">4.5</span>
                  <span>(124 ulasan)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>1,250 siswa</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 jam</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>Bahasa Indonesia</span>
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center">
              {course.thumbnail_url ? (
                <img 
                  src={course.thumbnail_url} 
                  alt={course.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <BookOpen className="h-24 w-24 text-gray-400" />
              )}
            </div>

            {/* Course Overview */}
            <div>
              <h2 className="text-xl font-bold mb-4">Tentang Kursus Ini</h2>
              <p className="text-muted-foreground leading-relaxed">
                {course.overview || course.description}
              </p>
            </div>

            {/* What You'll Learn */}
            {course.what_you_will_learn && course.what_you_will_learn.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Apa yang Akan Anda Pelajari</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.what_you_will_learn.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6 sticky top-6">
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary">
                  {course.price === 0 ? "Gratis" : `Rp ${course.price.toLocaleString()}`}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <Button 
                  className="w-full"
                  onClick={() => setIsPurchaseDialogOpen(true)}
                >
                  {course.price === 0 ? "Daftar Gratis" : "Beli Sekarang"}
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Simpan
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Bagikan
                  </Button>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="font-medium">Termasuk dalam kursus ini:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-muted-foreground" />
                    <span>Video pembelajaran</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>Materi pembelajaran</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span>Sumber daya unduhan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>Sertifikat penyelesaian</span>
                  </li>
                </ul>
              </div>
            </div>
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
