
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, BookOpen, Award, Bell, User, LogOut, Search,
  Clock, BarChart, MessageCircle, Heart, Star, FileText, Settings, CreditCard
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { supabase } from '@/integrations/supabase/client';

// Sample data for enrolled courses - kosongkan array
const enrolledCourses = [];

// Sample data for wishlist - kosongkan array
const wishlistCourses = [];

// Sample data for completed courses - kosongkan array
const completedCourses = [];

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        console.log("Session:", session);
        console.log("Session error:", sessionError);
        
        if (session?.user) {
          setUser(session.user);
          console.log("User ID:", session.user.id);
          console.log("User metadata:", session.user.user_metadata);
          
          // Try to get profile from database
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
            // If no profile in DB, create one from user metadata
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
      // Force redirect even if logout fails
      navigate('/login');
    }
  };
  
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
              Kursus Saya
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
              <Link to="/my-courses">
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
                <p className="text-3xl font-bold">0</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Belum ada kursus aktif
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Kursus Selesai</h3>
                <p className="text-3xl font-bold">0</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Belum ada kursus selesai
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
