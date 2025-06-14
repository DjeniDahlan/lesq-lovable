
import { Link } from 'react-router-dom';
import { School, BookOpen, GraduationCap, Award, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const categories = [
  { 
    id: 'sd', 
    name: 'Sekolah Dasar (SD)', 
    icon: School, 
    courses: 115,
    description: 'Kursus untuk siswa sekolah dasar kelas 1-6',
    subjects: ['Matematika', 'Bahasa Indonesia', 'IPA', 'IPS', 'Bahasa Inggris']
  },
  { 
    id: 'smp', 
    name: 'Sekolah Menengah Pertama (SMP)', 
    icon: BookOpen, 
    courses: 156,
    description: 'Kursus untuk siswa SMP kelas 7-9',
    subjects: ['Matematika', 'Bahasa Indonesia', 'IPA', 'IPS', 'Bahasa Inggris', 'PKn']
  },
  { 
    id: 'sma-umum', 
    name: 'Sekolah Menengah Atas (SMA) - Umum', 
    icon: GraduationCap, 
    courses: 89,
    description: 'Kursus umum untuk siswa SMA semua jurusan',
    subjects: ['Matematika Wajib', 'Bahasa Indonesia', 'Bahasa Inggris', 'Sejarah', 'PKn']
  },
  { 
    id: 'sma-ipa', 
    name: 'SMA - IPA', 
    icon: Target, 
    courses: 67,
    description: 'Kursus khusus untuk siswa SMA jurusan IPA',
    subjects: ['Matematika Peminatan', 'Fisika', 'Kimia', 'Biologi']
  },
  { 
    id: 'sma-ips', 
    name: 'SMA - IPS', 
    icon: Users, 
    courses: 56,
    description: 'Kursus khusus untuk siswa SMA jurusan IPS',
    subjects: ['Sejarah', 'Geografi', 'Sosiologi', 'Ekonomi']
  },
  { 
    id: 'snbt-utbk', 
    name: 'SNBT UTBK', 
    icon: Award, 
    courses: 41,
    description: 'Persiapan Seleksi Nasional Berdasarkan Tes dan UTBK',
    subjects: ['Tes Potensi Skolastik', 'Literasi', 'Numerasi', 'Penalaran']
  },
  { 
    id: 'ujian-mandiri', 
    name: 'Ujian Mandiri PTN', 
    icon: Award, 
    courses: 28,
    description: 'Persiapan ujian mandiri perguruan tinggi negeri',
    subjects: ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Pengetahuan Umum']
  }
];

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Semua Kategori Kursus
              </h1>
              <p className="text-lg text-muted-foreground">
                Pilih jenjang pendidikan yang sesuai dengan kebutuhan belajar Anda
              </p>
            </div>
          </div>
        </section>
        
        {/* Categories Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link to={`/category/${category.id}`} key={category.id}>
                  <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-center mb-4">
                      <category.icon className="w-8 h-8 text-primary mr-3" />
                      <div>
                        <h3 className="font-semibold text-lg">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.courses} kursus</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Mata Pelajaran:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.subjects.map((subject, index) => (
                          <span 
                            key={index}
                            className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
