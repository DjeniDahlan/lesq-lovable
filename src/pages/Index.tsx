
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Award, Users, School, GraduationCap } from 'lucide-react';
import CourseGrid from '@/components/course/CourseGrid';
import { CourseType } from '@/components/course/CourseCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock data for popular courses
const popularCourses: CourseType[] = [
  {
    id: '9',
    title: 'Matematika Dasar SMA: Aljabar dan Geometri',
    instructor: 'Pak Bambang Supriyadi, S.Pd',
    thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=1740',
    price: 449000,
    discountPrice: 399000,
    rating: 4.8,
    reviewCount: 312,
    level: 'Mahir',
    duration: '35 jam',
    studentCount: 2145,
    category: 'Sekolah Menengah Atas (SMA) - Umum',
    isBestseller: true
  },
  {
    id: '21',
    title: 'Tes Potensi Skolastik (TPS) SNBT 2024',
    instructor: 'Dr. Siti Rahma, S.Psi',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1740',
    price: 599000,
    discountPrice: 549000,
    rating: 4.9,
    reviewCount: 456,
    level: 'Mahir',
    duration: '45 jam',
    studentCount: 3245,
    category: 'SNBT UTBK',
    isBestseller: true
  },
  {
    id: '5',
    title: 'Matematika SMP Kelas 7-9 Lengkap',
    instructor: 'Pak Ahmad Fauzi, S.Pd',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1740',
    price: 349000,
    discountPrice: 299000,
    rating: 4.8,
    reviewCount: 287,
    level: 'Menengah',
    duration: '25 jam',
    studentCount: 1876,
    category: 'Sekolah Menengah Pertama (SMP)',
    isBestseller: true
  },
  {
    id: '13',
    title: 'Matematika IPA SMA: Kalkulus dan Trigonometri',
    instructor: 'Dr. Ir. Hendra Gunawan',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1740',
    price: 549000,
    discountPrice: 499000,
    rating: 4.9,
    reviewCount: 287,
    level: 'Mahir',
    duration: '40 jam',
    studentCount: 1876,
    category: 'Sekolah Menengah Atas (SMA) - IPA',
    isBestseller: true
  }
];

// Mock data for new courses
const newCourses: CourseType[] = [
  {
    id: '3',
    title: 'IPA Terpadu SD: Sains untuk Anak',
    instructor: 'Ibu Maya Dewi, S.Pd',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1740',
    price: 229000,
    rating: 4.6,
    reviewCount: 156,
    level: 'Pemula',
    duration: '16 jam',
    studentCount: 876,
    category: 'Sekolah Dasar (SD)',
    isNew: true
  },
  {
    id: '8',
    title: 'Bahasa Inggris SMP: Grammar dan Conversation',
    instructor: 'Ibu Anita Sari, S.Pd',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1740',
    price: 319000,
    discountPrice: 269000,
    rating: 4.5,
    reviewCount: 165,
    level: 'Menengah',
    duration: '22 jam',
    studentCount: 1123,
    category: 'Sekolah Menengah Pertama (SMP)',
    isNew: true
  },
  {
    id: '15',
    title: 'Kimia SMA: Struktur Atom hingga Organik',
    instructor: 'Dr. Rini Kusuma, S.Si',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1740',
    price: 479000,
    rating: 4.7,
    reviewCount: 198,
    level: 'Mahir',
    duration: '36 jam',
    studentCount: 1287,
    category: 'Sekolah Menengah Atas (SMA) - IPA',
    isNew: true
  },
  {
    id: '20',
    title: 'Sosiologi SMA: Masyarakat dan Interaksi Sosial',
    instructor: 'Dr. Anita Sari, S.Sos',
    thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1740',
    price: 349000,
    rating: 4.4,
    reviewCount: 134,
    level: 'Mahir',
    duration: '26 jam',
    studentCount: 745,
    category: 'Sekolah Menengah Atas (SMA) - IPS',
    isNew: true
  }
];

const categories = [
  { id: 'sd', name: 'Sekolah Dasar (SD)', icon: School, courses: 115 },
  { id: 'smp', name: 'Sekolah Menengah Pertama (SMP)', icon: BookOpen, courses: 156 },
  { id: 'sma', name: 'Sekolah Menengah Atas (SMA)', icon: GraduationCap, courses: 212 },
  { id: 'snbt', name: 'SNBT UTBK', icon: Award, courses: 41 }
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
                Belajar Online untuk Pendidikan Terbaik
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Platform pembelajaran online untuk siswa SD, SMP, SMA hingga persiapan SNBT UTBK dan Ujian Mandiri PTN
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="Cari mata pelajaran atau ujian..."
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
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">Kursus</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</p>
                <p className="text-muted-foreground">Guru Berpengalaman</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50.000+</p>
                <p className="text-muted-foreground">Siswa</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">200.000+</p>
                <p className="text-muted-foreground">Jam Belajar</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Jenjang Pendidikan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih jenjang pendidikan sesuai dengan kebutuhan belajar Anda
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
              title="Kursus Terpopuler" 
              description="Kursus pilihan terbaik yang diikuti oleh ribuan siswa" 
            />
            
            <div className="text-center mt-10">
              <Link to="/courses">
                <Button variant="outline">Lihat Semua Kursus</Button>
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
              description="Materi pembelajaran terbaru yang telah disesuaikan dengan kurikulum" 
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
              <h2 className="text-3xl font-bold mb-6">Bergabung Sebagai Pengajar</h2>
              <p className="text-lg opacity-90 mb-8">
                Bagikan ilmu dan pengalaman mengajar Anda. Bantu siswa mencapai prestasi terbaik mereka.
              </p>
              <Link to="/become-instructor">
                <Button variant="secondary" size="lg">
                  Daftar Sebagai Pengajar
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
