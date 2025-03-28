
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, BookOpen, Award, Bell, User, LogOut, Search,
  Clock, BarChart, MessageCircle, Heart, Star, FileText
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Sample data for enrolled courses
const enrolledCourses = [
  {
    id: '1',
    title: 'Pengembangan Web Frontend dengan React & TypeScript',
    instructor: 'Budi Santoso',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1740&auto=format&fit=crop',
    progress: 65,
    lastLecture: 'Hooks: useState, useEffect, useContext',
    lastAccessed: '2 hari yang lalu'
  },
  {
    id: '3',
    title: 'Pemasaran Digital untuk Bisnis Pemula',
    instructor: 'Anita Kusuma',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop',
    progress: 28,
    lastLecture: 'Strategi Konten Media Sosial',
    lastAccessed: '1 minggu yang lalu'
  },
  {
    id: '8',
    title: 'Dasar-dasar Pengembangan Backend dengan Node.js',
    instructor: 'Fajar Nugroho',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop',
    progress: 10,
    lastLecture: 'Pengenalan Node.js dan NPM',
    lastAccessed: '3 minggu yang lalu'
  }
];

// Sample data for wishlist
const wishlistCourses = [
  {
    id: '5',
    title: 'Pengembangan Aplikasi Mobile dengan Flutter',
    instructor: 'Hendro Gunawan',
    thumbnail: 'https://images.unsplash.com/photo-1575330933141-4b950d5cb1cb?q=80&w=1674&auto=format&fit=crop',
    price: 699000,
    discountPrice: 499000,
    rating: 4.6,
    reviewCount: 421,
  },
  {
    id: '9',
    title: 'React Native: Membangun Aplikasi Cross-Platform',
    instructor: 'Dimas Prayogo',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1674&auto=format&fit=crop',
    price: 649000,
    discountPrice: 399000,
    rating: 4.7,
    reviewCount: 832,
  }
];

// Sample data for completed courses
const completedCourses = [
  {
    id: '7',
    title: 'Keuangan Pribadi: Strategi Investasi dan Pengelolaan',
    instructor: 'Anton Hidayat',
    thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1740&auto=format&fit=crop',
    completedDate: '15 November 2023',
    certificate: true
  }
];

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
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-poppins text-xl font-bold">SkillScape</span>
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
                  <Link to="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span>Pengaturan</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/purchases" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Pembelian</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/logout" className="flex items-center gap-2 text-red-500">
                    <LogOut className="h-4 w-4" />
                    <span>Keluar</span>
                  </Link>
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
              <h1 className="text-2xl font-bold mb-2">Selamat datang kembali, Ahmad!</h1>
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
            
            {enrolledCourses.length === 0 ? (
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-md">
                    <div className="relative">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title} 
                        className="w-full aspect-video object-cover"
                      />
                      <Button variant="secondary" size="icon" className="absolute top-2 right-2 rounded-full bg-white bg-opacity-80 hover:bg-white">
                        <Play className="h-5 w-5 text-primary" />
                      </Button>
                    </div>
                    
                    <div className="p-4">
                      <Link to={`/course/${course.id}/learn`}>
                        <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <div className="flex gap-2 mb-1 items-start">
                          <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Terakhir dipelajari: {course.lastLecture}</span>
                        </div>
                        <p>Diakses {course.lastAccessed}</p>
                      </div>
                      
                      <div className="mt-4 flex justify-between">
                        <Link to={`/course/${course.id}/learn`}>
                          <Button variant="secondary" size="sm">Lanjutkan</Button>
                        </Link>
                        <Link to={`/course/${course.id}/forum`}>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            Forum
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="wishlist" className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Wishlist Saya</h2>
            
            {wishlistCourses.length === 0 ? (
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-md">
                    <div className="relative">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title} 
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    
                    <div className="p-4">
                      <Link to={`/course/${course.id}`}>
                        <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
                      
                      <div className="flex items-center gap-1 mb-3">
                        <span className="text-yellow-500 font-medium">{course.rating.toFixed(1)}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              size={14} 
                              className={i < Math.floor(course.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({course.reviewCount})</span>
                      </div>
                      
                      <div className="flex items-baseline mb-4">
                        <span className="text-lg font-bold">Rp {course.discountPrice?.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          Rp {course.price.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1">Beli Sekarang</Button>
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Kursus yang Telah Diselesaikan</h2>
            
            {completedCourses.length === 0 ? (
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-md">
                    <div className="relative">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title} 
                        className="w-full aspect-video object-cover"
                      />
                      {course.certificate && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Bersertifikat
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <Link to={`/course/${course.id}`}>
                        <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span>Diselesaikan pada: {course.completedDate}</span>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <Link to={`/course/${course.id}/review`}>
                          <Button variant="outline" size="sm">Beri Ulasan</Button>
                        </Link>
                        {course.certificate && (
                          <Link to={`/certificate/${course.id}`}>
                            <Button variant="secondary" size="sm">Lihat Sertifikat</Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="statistics" className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Statistik Pembelajaran</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Jam Belajar</h3>
                <p className="text-3xl font-bold">24</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  +3 jam dari minggu lalu
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Kursus Aktif</h3>
                <p className="text-3xl font-bold">{enrolledCourses.length}</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Rata-rata penyelesaian 32%
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Kursus Selesai</h3>
                <p className="text-3xl font-bold">{completedCourses.length}</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  {completedCourses.length} dari {enrolledCourses.length + completedCourses.length} kursus
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-medium mb-4">Aktivitas Mingguan</h3>
              <div className="h-60 flex items-center justify-center">
                <p className="text-muted-foreground">Grafik aktivitas akan ditampilkan di sini</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-medium mb-4">Pencapaian</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                  <Award className="h-10 w-10 text-primary" />
                  <div>
                    <p className="font-medium">Pemula</p>
                    <p className="text-sm text-muted-foreground">1 kursus selesai</p>
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
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1740&auto=format&fit=crop" 
                    alt="UI/UX Design dengan Figma untuk Pemula" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1">
                    UI/UX Design dengan Figma untuk Pemula
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Maya Dewi</p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500 font-medium">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={14} 
                          className="fill-yellow-500 text-yellow-500" 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">(1205)</span>
                  </div>
                  
                  <p className="font-bold text-base">
                    Rp 459.000
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1740&auto=format&fit=crop" 
                    alt="Advanced JavaScript: ES6 dan Konsep Modern" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1">
                    Advanced JavaScript: ES6 dan Konsep Modern
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Bayu Prakoso</p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500 font-medium">4.6</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={14} 
                          className={i < 4 ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">(967)</span>
                  </div>
                  
                  <div className="flex items-baseline">
                    <span className="font-bold text-base">Rp 349.000</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      Rp 549.000
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1674&auto=format&fit=crop" 
                    alt="React Native: Membangun Aplikasi Cross-Platform" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1">
                    React Native: Membangun Aplikasi Cross-Platform
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Dimas Prayogo</p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500 font-medium">4.7</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={14} 
                          className={i < 4 ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">(832)</span>
                  </div>
                  
                  <div className="flex items-baseline">
                    <span className="font-bold text-base">Rp 399.000</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      Rp 649.000
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1740&auto=format&fit=crop" 
                    alt="Belajar Full-Stack Web Development dengan MERN Stack" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1">
                    Full-Stack Web Development dengan MERN Stack
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Fajar Nugroho</p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500 font-medium">4.8</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={14} 
                          className={i < 4 ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">(742)</span>
                  </div>
                  
                  <div className="flex items-baseline">
                    <span className="font-bold text-base">Rp 499.000</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      Rp 799.000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Student;
