
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, Award, Bell, User, LogOut, Search, FileEdit,
  MessageCircle, BarChart, Play, Plus, Users, DollarSign, Video,
  Edit, PenTool, Eye, Archive
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Sample data for instructor's courses
const instructorCourses = [
  {
    id: '1',
    title: 'Pengembangan Web Frontend dengan React & TypeScript',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1740&auto=format&fit=crop',
    status: 'published',
    students: 15420,
    revenue: 25450000,
    rating: 4.8,
    reviewCount: 1250,
    lastUpdated: '2 bulan yang lalu'
  },
  {
    id: '2',
    title: 'Belajar JavaScript Modern dari Dasar',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1740&auto=format&fit=crop',
    status: 'published',
    students: 21340,
    revenue: 35670000,
    rating: 4.7,
    reviewCount: 1874,
    lastUpdated: '3 bulan yang lalu'
  },
  {
    id: '3',
    title: 'Backend Development dengan Node.js dan Express',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop',
    status: 'draft',
    students: 0,
    revenue: 0,
    rating: 0,
    reviewCount: 0,
    lastUpdated: '1 minggu yang lalu',
    completionRate: 75
  }
];

// Sample data for draft courses
const draftCourses = [
  {
    id: '3',
    title: 'Backend Development dengan Node.js dan Express',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop',
    lastUpdated: '1 minggu yang lalu',
    completionRate: 75
  },
  {
    id: '4',
    title: 'GraphQL untuk API Modern',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop',
    lastUpdated: '2 hari yang lalu',
    completionRate: 30
  }
];

// Sample data for student messages
const studentMessages = [
  {
    id: '1',
    student: 'Rina Wijaya',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    message: 'Saya mengalami kesulitan dengan modul React Hooks, bisakah Anda memberikan contoh tambahan?',
    course: 'Pengembangan Web Frontend dengan React & TypeScript',
    time: '2 jam yang lalu',
    read: false
  },
  {
    id: '2',
    student: 'Agus Santoso',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: 'Terima kasih atas materi tambahan yang Anda berikan. Sangat membantu!',
    course: 'Belajar JavaScript Modern dari Dasar',
    time: '1 hari yang lalu',
    read: true
  },
  {
    id: '3',
    student: 'Dewi Lestari',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    message: 'Kapan modul tentang Authentication akan tersedia?',
    course: 'Backend Development dengan Node.js dan Express',
    time: '3 hari yang lalu',
    read: true
  }
];

// Sample revenue data for chart
const revenueData = [
  { month: 'Jan', revenue: 1200000 },
  { month: 'Feb', revenue: 1450000 },
  { month: 'Mar', revenue: 1350000 },
  { month: 'Apr', revenue: 2100000 },
  { month: 'Mei', revenue: 1950000 },
  { month: 'Jun', revenue: 2300000 },
  { month: 'Jul', revenue: 2450000 },
  { month: 'Agu', revenue: 2700000 },
  { month: 'Sep', revenue: 3100000 },
  { month: 'Okt', revenue: 3500000 },
  { month: 'Nov', revenue: 3750000 },
  { month: 'Des', revenue: 3900000 }
];

const earningsHistory = [
  { 
    id: '1', 
    date: '1 Desember 2023', 
    amount: 3500000, 
    status: 'completed',
    description: 'Pendapatan November 2023'
  },
  { 
    id: '2', 
    date: '1 November 2023', 
    amount: 3250000, 
    status: 'completed',
    description: 'Pendapatan Oktober 2023'
  },
  { 
    id: '3', 
    date: '1 Oktober 2023', 
    amount: 2750000, 
    status: 'completed',
    description: 'Pendapatan September 2023'
  }
];

const Instructor = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Calculate total earnings
  const totalEarnings = instructorCourses.reduce((total, course) => total + course.revenue, 0);
  const totalStudents = instructorCourses.reduce((total, course) => total + course.students, 0);
  
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
                placeholder="Cari di dalam dashboard pengajar..."
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
                <DropdownMenuItem className="py-3 bg-primary/5">
                  <div className="flex gap-3 w-full">
                    <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                      <MessageCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Rina mengirim pesan baru</p>
                      <p className="text-xs text-muted-foreground">
                        Terkait kursus React & TypeScript
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">2 jam yang lalu</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div className="flex gap-3 w-full">
                    <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Pembayaran diterima</p>
                      <p className="text-xs text-muted-foreground">
                        Rp 3.500.000 telah ditransfer ke rekening Anda
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">2 hari yang lalu</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div className="flex gap-3 w-full">
                    <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">50 siswa baru</p>
                      <p className="text-xs text-muted-foreground">
                        Kursus JavaScript Modern dari Dasar
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">1 minggu yang lalu</p>
                    </div>
                  </div>
                </DropdownMenuItem>
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
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Foto profil"
                    className="h-8 w-8 rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Akun Pengajar</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/instructor/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Profil Pengajar</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instructor/settings" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span>Pengaturan</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instructor/payouts" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>Pendapatan & Pembayaran</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Ke Mode Siswa</span>
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border overflow-hidden sticky top-20">
              <div className="p-6 text-center border-b">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Foto profil"
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                />
                <h2 className="font-bold text-lg">Budi Santoso</h2>
                <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
              </div>
              
              <nav className="p-2">
                <button
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  <BarChart className="h-4 w-4" />
                  <span>Dashboard</span>
                </button>
                
                <button
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === 'courses' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('courses')}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Kursus Saya</span>
                </button>
                
                <button
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === 'create' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('create')}
                >
                  <FileEdit className="h-4 w-4" />
                  <span>Draft Kursus</span>
                </button>
                
                <button
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === 'messages' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('messages')}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Pesan Siswa</span>
                </button>
                
                <button
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors ${activeTab === 'earnings' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('earnings')}
                >
                  <DollarSign className="h-4 w-4" />
                  <span>Pendapatan</span>
                </button>
              </nav>
              
              <div className="p-4 mt-4">
                <Link to="/course/create">
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Buat Kursus Baru
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Dashboard Instruktur</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Pendapatan
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        Rp {totalEarnings.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        +12% dari bulan lalu
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Siswa
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {totalStudents.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        +45 siswa baru minggu ini
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Rating Rata-rata
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        4.8
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Dari {instructorCourses.reduce((total, course) => total + course.reviewCount, 0)} ulasan
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Statistik Pendapatan</CardTitle>
                    <CardDescription>
                      Pendapatan bulan per bulan di tahun 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <div className="flex h-full items-end gap-2">
                        {revenueData.map((item) => (
                          <div key={item.month} className="flex flex-col items-center">
                            <div 
                              className="w-12 bg-primary rounded-t-md"
                              style={{ 
                                height: `${(item.revenue / 4000000) * 260}px`,
                                backgroundColor: item.month === 'Des' ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.7)'
                              }}
                            ></div>
                            <div className="mt-2 text-xs">{item.month}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Kursus Populer</CardTitle>
                      <CardDescription>
                        Berdasarkan pendaftaran siswa
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {instructorCourses
                          .filter(course => course.status === 'published')
                          .sort((a, b) => b.students - a.students)
                          .slice(0, 3)
                          .map((course) => (
                            <div key={course.id} className="flex items-center gap-4">
                              <img 
                                src={course.thumbnail} 
                                alt={course.title} 
                                className="w-12 h-12 rounded object-cover"
                              />
                              <div className="flex-1">
                                <h3 className="font-medium text-sm line-clamp-1">{course.title}</h3>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Users className="h-3 w-3" />
                                  <span>{course.students.toLocaleString()} siswa</span>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Pesan Terbaru</CardTitle>
                      <CardDescription>
                        Pesan dari siswa yang belum terjawab
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {studentMessages
                          .slice(0, 3)
                          .map((message) => (
                            <div key={message.id} className={`flex gap-3 ${!message.read ? 'bg-primary/5 -mx-2 p-2 rounded-md' : ''}`}>
                              <img 
                                src={message.avatar} 
                                alt={message.student} 
                                className="w-8 h-8 rounded-full"
                              />
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium text-sm">{message.student}</h3>
                                  {!message.read && (
                                    <span className="bg-primary w-2 h-2 rounded-full"></span>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                  {message.message}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {message.time}
                                </p>
                              </div>
                            </div>
                          ))
                        }
                        
                        <Button variant="ghost" className="w-full text-primary text-sm">
                          Lihat semua pesan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            
            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Kursus Saya</h1>
                  <Link to="/course/create">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Buat Kursus Baru
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {instructorCourses.filter(course => course.status === 'published').map((course) => (
                    <div key={course.id} className="bg-white border rounded-lg overflow-hidden transition-shadow hover:shadow-md">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-64 flex-shrink-0">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h2 className="font-bold text-lg mb-2 md:mb-0">{course.title}</h2>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                                Dipublikasikan
                              </span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem asChild>
                                    <Link to={`/course/${course.id}/edit`} className="flex items-center gap-2">
                                      <Edit className="h-4 w-4" />
                                      <span>Edit Kursus</span>
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <Link to={`/course/${course.id}/curriculum`} className="flex items-center gap-2">
                                      <FileEdit className="h-4 w-4" />
                                      <span>Edit Kurikulum</span>
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <Link to={`/course/${course.id}`} className="flex items-center gap-2">
                                      <Eye className="h-4 w-4" />
                                      <span>Pratinjau</span>
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <Link to={`/course/${course.id}/promote`} className="flex items-center gap-2">
                                      <PenTool className="h-4 w-4" />
                                      <span>Promosikan</span>
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <button className="flex items-center gap-2 w-full text-left text-red-500">
                                      <Archive className="h-4 w-4" />
                                      <span>Arsipkan</span>
                                    </button>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Siswa</p>
                              <p className="font-semibold">{course.students.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Rating</p>
                              <div className="flex items-center gap-1">
                                <span className="font-semibold">{course.rating}</span>
                                <span className="text-xs text-muted-foreground">({course.reviewCount})</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Pendapatan</p>
                              <p className="font-semibold">Rp {course.revenue.toLocaleString()}</p>
                            </div>
                          </div>
                          
                          <div className="text-xs text-muted-foreground mb-4">
                            Terakhir diupdate: {course.lastUpdated}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Link to={`/course/${course.id}/analytics`}>
                              <Button variant="outline" size="sm">
                                <BarChart className="h-4 w-4 mr-2" />
                                Analitik
                              </Button>
                            </Link>
                            <Link to={`/course/${course.id}/messages`}>
                              <Button variant="outline" size="sm">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Pesan ({Math.floor(Math.random() * 10)})
                              </Button>
                            </Link>
                            <Link to={`/course/${course.id}/edit`}>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                            </Link>
                            <Link to={`/course/${course.id}/curriculum`}>
                              <Button variant="outline" size="sm">
                                <FileEdit className="h-4 w-4 mr-2" />
                                Kurikulum
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Draft/Create Courses Tab */}
            {activeTab === 'create' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Draft Kursus</h1>
                  <Link to="/course/create">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Buat Kursus Baru
                    </Button>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {draftCourses.map((course) => (
                    <div key={course.id} className="bg-white border rounded-lg overflow-hidden transition-shadow hover:shadow-md">
                      <div className="relative">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title} 
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Button variant="secondary">
                            <Edit className="h-4 w-4 mr-2" />
                            Lanjutkan Mengedit
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{course.title}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium">
                            Draft
                          </span>
                        </div>
                        
                        <div className="space-y-2 mb-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Selesai</span>
                            <span className="font-medium">{course.completionRate}%</span>
                          </div>
                          <Progress value={course.completionRate} className="h-2" />
                        </div>
                        
                        <div className="text-xs text-muted-foreground mb-4">
                          Terakhir diedit: {course.lastUpdated}
                        </div>
                        
                        <div className="flex gap-2">
                          <Link to={`/course/${course.id}/edit`} className="flex-1">
                            <Button className="w-full">
                              <FileEdit className="h-4 w-4 mr-2" />
                              Lanjutkan
                            </Button>
                          </Link>
                          <Button variant="outline" size="icon">
                            <DropdownMenu>
                              <DropdownMenuTrigger className="h-full w-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                  <Link to={`/course/${course.id}/preview`} className="flex items-center gap-2">
                                    <Eye className="h-4 w-4" />
                                    <span>Pratinjau</span>
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <button className="flex items-center gap-2 w-full text-left text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                                    <span>Hapus Draft</span>
                                  </button>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="bg-gray-50 border border-dashed rounded-lg flex flex-col items-center justify-center p-8 text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Plus className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Buat Kursus Baru</h3>
                    <p className="text-muted-foreground mb-4">
                      Mulai merancang kursus baru dan bagikan pengetahuan Anda dengan dunia
                    </p>
                    <Link to="/course/create">
                      <Button>Buat Kursus</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Pesan Siswa</h1>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Pesan yang Belum Dibaca</CardTitle>
                    <CardDescription>
                      Pertanyaan dan diskusi dari siswa Anda
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studentMessages.map((message) => (
                        <div key={message.id} className={`p-4 rounded-lg ${!message.read ? 'bg-primary/5' : 'bg-gray-50'}`}>
                          <div className="flex items-start gap-4">
                            <img 
                              src={message.avatar} 
                              alt={message.student} 
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{message.student}</h3>
                                  {!message.read && (
                                    <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                                      Baru
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {message.time}
                                </p>
                              </div>
                              <p className="mb-2">{message.message}</p>
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">
                                  Kursus: {message.course}
                                </p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    Tandai Dibaca
                                  </Button>
                                  <Button size="sm">
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    Balas
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center">
                  <Button variant="outline">Lihat Semua Pesan</Button>
                </div>
              </div>
            )}
            
            {/* Earnings Tab */}
            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Pendapatan Saya</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Pendapatan Bulan Ini
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        Rp 3.750.000
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        +7% dari bulan lalu
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Pendapatan Tahun Ini
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        Rp 27.850.000
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        +25% dari tahun lalu
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Pendapatan per Siswa
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        Rp 245.000
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Rata-rata pendapatan per siswa
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Statistik Pendapatan</CardTitle>
                    <CardDescription>
                      Pendapatan bulan per bulan di tahun 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <div className="flex h-full items-end gap-2">
                        {revenueData.map((item) => (
                          <div key={item.month} className="flex flex-col items-center">
                            <div 
                              className="w-12 bg-primary rounded-t-md"
                              style={{ 
                                height: `${(item.revenue / 4000000) * 260}px`,
                                backgroundColor: item.month === 'Des' ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.7)'
                              }}
                            ></div>
                            <div className="mt-2 text-xs">{item.month}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Riwayat Pembayaran</CardTitle>
                    <CardDescription>
                      Riwayat pembayaran yang telah diterima
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {earningsHistory.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{item.description}</p>
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">Rp {item.amount.toLocaleString()}</p>
                            <p className="text-xs text-green-600 font-medium">{item.status === 'completed' ? 'Dibayarkan' : 'Pending'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Informasi Pembayaran</CardTitle>
                    <CardDescription>
                      Metode pembayaran dan preferensi payout
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Rekening Bank</h3>
                        <div className="space-y-1 text-sm">
                          <p>Bank Mandiri</p>
                          <p>No. Rekening: **** **** **** 5678</p>
                          <p>Atas Nama: Budi Santoso</p>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Informasi Bank
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Jadwal Payout</h3>
                        <div className="space-y-1 text-sm">
                          <p>Setiap awal bulan (tanggal 1-5)</p>
                          <p>Minimum payout: Rp 100.000</p>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Preferensi Payout
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Instructor;
