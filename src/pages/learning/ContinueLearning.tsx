
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Play, BookOpen, Clock, ArrowLeft, CheckCircle, XCircle, AlertCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';

interface CourseWithPurchase {
  id: string;
  title: string;
  description: string;
  price: number;
  status: string;
  purchase_date: string;
  thumbnail_url?: string;
  education_level?: string;
  category?: string;
  subject?: string;
  overview?: string;
}

const ContinueLearning = () => {
  const [enrolledCourses, setEnrolledCourses] = useState<CourseWithPurchase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          const { data: coursesWithPurchases, error } = await supabase
            .from('course_purchases')
            .select(`
              *,
              courses (
                id,
                title,
                description,
                thumbnail_url,
                education_level,
                category,
                subject,
                overview
              )
            `)
            .eq('user_id', session.user.id)
            .eq('status', 'completed')
            .order('purchase_date', { ascending: false });
            
          if (coursesWithPurchases && coursesWithPurchases.length > 0) {
            const coursesData: CourseWithPurchase[] = coursesWithPurchases.map(purchase => {
              const courseData = purchase.courses as any;
              return {
                id: purchase.course_id,
                title: courseData?.title || `Kursus ${purchase.course_id}`,
                description: courseData?.description || `Kursus yang dibeli pada ${new Date(purchase.purchase_date).toLocaleDateString('id-ID')}`,
                price: purchase.price,
                status: purchase.status,
                purchase_date: purchase.purchase_date,
                thumbnail_url: courseData?.thumbnail_url || '',
                education_level: courseData?.education_level || 'Unknown',
                category: courseData?.category || 'Unknown',
                subject: courseData?.subject || 'Unknown',
                overview: courseData?.overview || ''
              };
            });
            
            setEnrolledCourses(coursesData);
          }
        }
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-500"><CheckCircle className="h-3 w-3 mr-1" />Aktif</Badge>;
      case 'pending':
        return <Badge variant="secondary"><AlertCircle className="h-3 w-3 mr-1" />Menunggu</Badge>;
      case 'failed':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Gagal</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard/student">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Dashboard
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-poppins text-xl font-bold">Les-Q</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Lanjutkan Belajar</h1>
          <p className="text-muted-foreground">
            Lanjutkan pembelajaran Anda dari kursus yang sedang aktif
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Memuat kursus Anda...</p>
          </div>
        ) : enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  {course.thumbnail_url ? (
                    <img 
                      src={course.thumbnail_url} 
                      alt={course.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <BookOpen className="h-12 w-12 text-gray-400" />
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium line-clamp-2">{course.title}</h3>
                    {getStatusBadge(course.status)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">{course.category}</Badge>
                    <Badge variant="outline" className="text-xs">{course.subject}</Badge>
                    <Badge variant="outline" className="text-xs">{course.education_level}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Lanjutkan Belajar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Belum ada kursus aktif</h3>
            <p className="text-muted-foreground mb-4">
              Anda belum memiliki kursus yang bisa dilanjutkan
            </p>
            <div className="flex gap-2 justify-center">
              <Link to="/dashboard/student">
                <Button variant="outline">Kembali ke Dashboard</Button>
              </Link>
              <Link to="/search">
                <Button>Jelajahi Kursus</Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ContinueLearning;
