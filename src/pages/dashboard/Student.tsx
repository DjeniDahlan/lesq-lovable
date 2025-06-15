import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, BookOpen, Award, Bell, User, LogOut, Search,
  Clock, BarChart, MessageCircle, Heart, Star, FileText, Settings, CreditCard,
  CheckCircle, XCircle, AlertCircle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';

// Types
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

// Sample data for notifications
const notifications = [
  {
    id: '1',
    type: 'course-update',
    title: 'Materi baru ditambahkan',
    course: 'Pengembangan Web Frontend dengan React & TypeScript',
    time: '2 jam yang lalu',
    read: false
  },
  {
    id: '2',
    type: 'announcement',
    title: 'Webinar bersama pakar industri',
    message: 'Bergabunglah dalam sesi langsung dengan pakar industri pada Jumat pukul 19:00 WIB',
    time: '1 hari yang lalu',
    read: true
  },
  {
    id: '3',
    type: 'certificate',
    title: 'Sertifikat Anda tersedia',
    course: 'Keuangan Pribadi: Strategi Investasi dan Pengelolaan',
    time: '1 minggu yang lalu',
    read: true
  }
];

const Student = () => {
  const [activeTab, setActiveTab] = useState('learning');
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<CourseWithPurchase[]>([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        console.log("Session:", session);
        console.log("Session error:", sessionError);
        
        if (session?.user) {
          setUser(session.user);
          console.log("User ID:", session.user.id);
          console.log("User metadata:", session.user.user_metadata);
          
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .maybeSingle();
            
          console.log("Profile data from DB:", profileData);
          console.log("Profile error:", profileError);
          
          if (profileData) {
            setProfile(profileData);
          } else if (session.user.user_metadata) {
            const { data: newProfile, error: insertError } = await supabase
              .from('profiles')
              .insert({
                id: session.user.id,
                full_name: session.user.user_metadata.fullName || session.user.user_metadata.full_name || 'Pengguna',
                email: session.user.email || '',
                role: session.user.user_metadata.role || 'student'
              })
              .select()
              .single();
              
            console.log("New profile created:", newProfile);
            console.log("Insert error:", insertError);
            
            if (newProfile) {
              setProfile(newProfile);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          console.log("Fetching courses for user:", session.user.id);
          
          // Join course_purchases with courses to get complete course information
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
            .order('purchase_date', { ascending: false });
            
          console.log("Courses with purchases data:", coursesWithPurchases);
          console.log("Courses with purchases error:", error);
          
          if (coursesWithPurchases && coursesWithPurchases.length > 0) {
            // Transform the joined data into the expected format
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
        setCoursesLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

  const getUserName = () => {
    if (loading) return "Loading...";
    if (profile?.full_name) return profile.full_name;
    if (user?.user_metadata?.fullName) return user.user_metadata.fullName;
    if (user?.user_metadata?.full_name) return user.user_metadata.full_name;
    return "Pengguna";
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error);
      navigate('/login');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-500"><CheckCircle className="h-3 w-3 mr-1" />Sudah Dibayar</Badge>;
      case 'pending':
        return <Badge variant="secondary"><AlertCircle className="h-3 w-3 mr-1" />Belum Dibayar</Badge>;
      case 'failed':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Gagal</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const CourseCard = ({ course }: { course: CourseWithPurchase }) => (
    <div className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
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
      
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-sm line-clamp-2">{course.title}</h3>
          {getStatusBadge(course.status)}
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-2">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-1">
          <Badge variant="outline" className="text-xs">{course.category}</Badge>
          <Badge variant="outline" className="text-xs">{course.subject}</Badge>
          <Badge variant="outline" className="text-xs">{course.education_level}</Badge>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Rp {course.price.toLocaleString()}</span>
          <span>{new Date(course.purchase_date).toLocaleDateString('id-ID')}</span>
        </div>
        
        <div className="flex gap-2">
          {course.status === 'completed' ? (
            <Button size="sm" className="flex-1">
              <Play className="h-3 w-3 mr-1" />
              Mulai Belajar
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="flex-1">
              <Clock className="h-3 w-3 mr-1" />
              Menunggu Verifikasi
            </Button>
          )}
        </div>
        
        {course.status === 'completed' && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Progress</span>
              <span>0%</span>
            </div>
            <Progress value={0} className="h-1" />
          </div>
        )}
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-poppins text-xl font-bold">Les-Q</span>
            </Link>
          </div>
          
          <div className="flex-1 mx-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Cari kursus, topik, atau keahlian..."
                className="w-full rounded-full bg-gray-100 pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative p-2">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifikasi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className={`py-3 ${!notification.read ? 'bg-primary/5' : ''}`}>
                    <div className="flex gap-3 w-full">
                      <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                        {notification.type === 'course-update' && <FileText className="h-4 w-4 text-primary" />}
                        {notification.type === 'announcement' && <Bell className="h-4 w-4 text-primary" />}
                        {notification.type === 'certificate' && <Award className="h-4 w-4 text-primary" />}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {notification.course || notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/notifications" className="w-full text-center text-primary text-sm py-2">
                    Lihat semua notifikasi
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative p-1">
                  <img
                    src="https://randomuser.me/api/portraits/men/42.jpg"
                    alt="Foto profil"
                    className="h-8 w-8 rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Pengaturan</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account/purchases" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Pembelian</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                  <LogOut className="h-4 w-4" />
                  <span>Keluar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      
      <main className="container py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">Selamat datang kembali, {getUserName()}!</h1>
              <p className="text-muted-foreground">
                Lanjutkan belajar atau jelajahi kursus baru hari ini
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/continue-learning">
                <Button>Lanjutkan Belajar</Button>
              </Link>
              <Link to="/search">
                <Button variant="outline">Jelajahi Kursus</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 bg-gray-100 p-1 w-full">
            <TabsTrigger value="learning" className="flex-1">
              <BookOpen className="h-4 w-4 mr-2" />
              Kursus Saya ({enrolledCourses.length})
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex-1">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex-1">
              <Award className="h-4 w-4 mr-2" />
              Selesai
            </TabsTrigger>
            <TabsTrigger value="statistics" className="flex-1">
              <BarChart className="h-4 w-4 mr-2" />
              Statistik
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="learning" className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Kursus yang Sedang Dipelajari</h2>
            
            {coursesLoading ? (
              <div className="text-center py-12 bg-white rounded-lg border">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p>Memuat kursus Anda...</p>
              </div>
            ) : enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {enrolledCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Belum ada kursus yang diikuti</h3>
                <p className="text-muted-foreground mb-4">
                  Mulai perjalanan belajar Anda dengan mendaftar di kursus pertama
                </p>
                <Link to="/search">
                  <Button>Jelajahi Kursus</Button>
                </Link>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="wishlist" className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Wishlist Saya</h2>
            
            <div className="text-center py-12 bg-white rounded-lg border">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Wishlist Anda kosong</h3>
              <p className="text-muted-foreground mb-4">
                Simpan kursus favorit Anda untuk dibeli nanti
              </p>
              <Link to="/search">
                <Button>Jelajahi Kursus</Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Kursus yang Telah Diselesaikan</h2>
            
            <div className="text-center py-12 bg-white rounded-lg border">
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Belum ada kursus yang diselesaikan</h3>
              <p className="text-muted-foreground mb-4">
                Selesaikan kursus untuk mendapatkan sertifikat dan meningkatkan keterampilan Anda
              </p>
              <Link to="/dashboard/student">
                <Button>Kembali ke Kursus Saya</Button>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="statistics" className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Statistik Pembelajaran</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Jam Belajar</h3>
                <p className="text-3xl font-bold">0</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Belum ada aktivitas belajar
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Kursus Aktif</h3>
                <p className="text-3xl font-bold">{enrolledCourses.filter(c => c.status === 'completed').length}</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Kursus yang sudah diverifikasi
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Pembelian</h3>
                <p className="text-3xl font-bold">{enrolledCourses.length}</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Kursus yang sudah dibeli
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-medium mb-4">Aktivitas Mingguan</h3>
              <div className="h-60 flex items-center justify-center">
                <p className="text-muted-foreground">Belum ada aktivitas untuk ditampilkan</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-medium mb-4">Pencapaian</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                  <Award className="h-10 w-10 text-gray-400" />
                  <div>
                    <p className="font-medium text-muted-foreground">Pemula</p>
                    <p className="text-sm text-muted-foreground">Selesaikan 1 kursus</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                  <Award className="h-10 w-10 text-gray-400" />
                  <div>
                    <p className="font-medium text-muted-foreground">Pelajar</p>
                    <p className="text-sm text-muted-foreground">Selesaikan 5 kursus</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                  <Award className="h-10 w-10 text-gray-400" />
                  <div>
                    <p className="font-medium text-muted-foreground">Sarjana</p>
                    <p className="text-sm text-muted-foreground">Selesaikan 10 kursus</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                  <Award className="h-10 w-10 text-gray-400" />
                  <div>
                    <p className="font-medium text-muted-foreground">Master</p>
                    <p className="text-sm text-muted-foreground">Selesaikan 20 kursus</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Recommended Courses */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-6">Rekomendasi untuk Anda</h2>
          
          <div className="text-center py-12 bg-white rounded-lg border">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Belum ada rekomendasi</h3>
            <p className="text-muted-foreground mb-4">
              Mulai belajar untuk mendapatkan rekomendasi kursus yang sesuai
            </p>
            <Link to="/search">
              <Button>Jelajahi Kursus</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Student;
