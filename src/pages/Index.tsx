
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Award, Users, PenTool, LampDesk } from 'lucide-react';
import CourseGrid from '@/components/course/CourseGrid';
import { CourseType } from '@/components/course/CourseCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock data for popular courses
const popularCourses: CourseType[] = [
  {
    id: '1',
    title: 'Pengembangan Web Frontend dengan React & TypeScript',
    instructor: 'Budi Santoso',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1740&auto=format&fit=crop',
    price: 599000,
    discountPrice: 299000,
    rating: 4.8,
    reviewCount: 1250,
    level: 'Menengah',
    duration: '20 jam',
    studentCount: 15420,
    category: 'Pengembangan Web',
    isBestseller: true
  },
  {
    id: '2',
    title: 'Data Science & Machine Learning: Teori dan Praktik',
    instructor: 'Dr. Rini Wijaya',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop',
    price: 799000,
    rating: 4.7,
    reviewCount: 982,
    level: 'Mahir',
    duration: '45 jam',
    studentCount: 8732,
    category: 'Data Science'
  },
  {
    id: '3',
    title: 'Pemasaran Digital untuk Bisnis Pemula',
    instructor: 'Anita Kusuma',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop',
    price: 499000,
    discountPrice: 249000,
    rating: 4.5,
    reviewCount: 1478,
    level: 'Pemula',
    duration: '15 jam',
    studentCount: 24150,
    category: 'Pemasaran Digital',
    isBestseller: true
  },
  {
    id: '4',
    title: 'Desain UI/UX: Dari Konsep hingga Prototipe',
    instructor: 'Maya Dewi',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1664&auto=format&fit=crop',
    price: 649000,
    rating: 4.9,
    reviewCount: 876,
    level: 'Semua Level',
    duration: '25 jam',
    studentCount: 11236,
    category: 'Desain Grafis',
    isNew: true
  }
];

// Mock data for new courses
const newCourses: CourseType[] = [
  {
    id: '5',
    title: 'Pengembangan Aplikasi Mobile dengan Flutter',
    instructor: 'Hendro Gunawan',
    thumbnail: 'https://images.unsplash.com/photo-1575330933141-4b950d5cb1cb?q=80&w=1674&auto=format&fit=crop',
    price: 699000,
    rating: 4.6,
    reviewCount: 421,
    level: 'Menengah',
    duration: '30 jam',
    studentCount: 5123,
    category: 'Mobile Development',
    isNew: true
  },
  {
    id: '6',
    title: 'Dasar-dasar Fotografi Digital',
    instructor: 'Diana Pratiwi',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1738&auto=format&fit=crop',
    price: 399000,
    discountPrice: 199000,
    rating: 4.4,
    reviewCount: 652,
    level: 'Pemula',
    duration: '10 jam',
    studentCount: 7845,
    category: 'Fotografi',
    isNew: true
  },
  {
    id: '7',
    title: 'Keuangan Pribadi: Strategi Investasi dan Pengelolaan',
    instructor: 'Anton Hidayat',
    thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1740&auto=format&fit=crop',
    price: 549000,
    rating: 4.7,
    reviewCount: 318,
    level: 'Pemula',
    duration: '12 jam',
    studentCount: 4256,
    category: 'Bisnis',
    isNew: true
  },
  {
    id: '8',
    title: 'Dasar-dasar Pengembangan Backend dengan Node.js',
    instructor: 'Fajar Nugroho',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop',
    price: 0,
    rating: 4.3,
    reviewCount: 275,
    level: 'Pemula',
    duration: '8 jam',
    studentCount: 9632,
    category: 'Pengembangan Web',
    isNew: true
  }
];

const categories = [
  { id: 'web', name: 'Pengembangan Web', icon: BookOpen, courses: 1250 },
  { id: 'business', name: 'Bisnis & Kewirausahaan', icon: Users, courses: 980 },
  { id: 'design', name: 'Desain & Kreatif', icon: PenTool, courses: 870 },
  { id: 'data', name: 'Data Science & Analitik', icon: LampDesk, courses: 650 }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Tingkatkan Keahlian Anda dengan Kursus Online Berkualitas
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Pelajari keahlian baru dari instruktur berpengalaman. Pilih dari ribuan kursus dengan harga terjangkau.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="Cari kursus, topik, atau keahlian..."
                    className="pl-10 pr-4 py-6 text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Link to={`/search?q=${searchQuery}`}>
                  <Button className="w-full sm:w-auto py-6 px-8">Cari</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">15.000+</p>
                <p className="text-muted-foreground">Kursus</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">1.200+</p>
                <p className="text-muted-foreground">Instruktur</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">500.000+</p>
                <p className="text-muted-foreground">Siswa</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">25M+</p>
                <p className="text-muted-foreground">Pendaftaran</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Jelajahi Kategori Populer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih dari berbagai kategori kursus untuk mengembangkan keterampilan teknis, bisnis, dan kreatif Anda
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link to={`/category/${category.id}`} key={category.id}>
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow border">
                    <category.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-medium text-lg mb-2">{category.name}</h3>
                    <p className="text-muted-foreground text-sm">{category.courses} kursus</p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/categories">
                <Button variant="outline">Lihat Semua Kategori</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Popular Courses Section */}
        <section className="py-16">
          <div className="container">
            <CourseGrid 
              courses={popularCourses} 
              title="Kursus Populer" 
              description="Kursus terlaris yang dipilih oleh ribuan siswa" 
            />
            
            <div className="text-center mt-10">
              <Link to="/courses">
                <Button variant="outline">Lihat Semua Kursus Populer</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* New Courses Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <CourseGrid 
              courses={newCourses} 
              title="Kursus Terbaru" 
              description="Kursus segar yang baru saja ditambahkan ke platform kami" 
            />
            
            <div className="text-center mt-10">
              <Link to="/new-courses">
                <Button variant="outline">Lihat Semua Kursus Terbaru</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Mulai Mengajar di SkillScape</h2>
              <p className="text-lg opacity-90 mb-8">
                Bagikan pengetahuan Anda dengan dunia. Jadilah instruktur dan berdayakan siswa di seluruh dunia.
              </p>
              <Link to="/become-instructor">
                <Button variant="secondary" size="lg">
                  Mulai Mengajar
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
