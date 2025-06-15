
import { Link } from 'react-router-dom';
import { School, BookOpen, GraduationCap, Award, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const categories = [
  { 
    id: 'sd-kelas-4', 
    name: 'SD Kelas 4', 
    icon: School, 
    courses: 8,
    description: 'Kursus khusus untuk siswa SD kelas 4 dengan materi dasar yang menyenangkan',
    subjects: ['Matematika Kelas 4', 'Bahasa Indonesia Kelas 4', 'IPA Kelas 4']
  },
  { 
    id: 'sd-kelas-5', 
    name: 'SD Kelas 5', 
    icon: School, 
    courses: 8,
    description: 'Kursus untuk siswa SD kelas 5 dengan pembelajaran yang interaktif',
    subjects: ['Matematika Kelas 5', 'Bahasa Indonesia Kelas 5', 'IPA Kelas 5']
  },
  { 
    id: 'sd-kelas-6', 
    name: 'SD Kelas 6', 
    icon: School, 
    courses: 8,
    description: 'Persiapan siswa SD kelas 6 untuk menghadapi ujian sekolah dan melanjutkan ke SMP',
    subjects: ['Matematika Kelas 6', 'Bahasa Indonesia Kelas 6', 'IPA Kelas 6', 'Persiapan Ujian Sekolah']
  },
  { 
    id: 'smp-kelas-7', 
    name: 'SMP Kelas 7', 
    icon: BookOpen, 
    courses: 12,
    description: 'Kursus adaptasi untuk siswa baru SMP kelas 7 dengan metode pembelajaran yang mudah dipahami',
    subjects: ['Matematika Kelas 7', 'IPA Kelas 7', 'Bahasa Indonesia Kelas 7', 'Bahasa Inggris Kelas 7']
  },
  { 
    id: 'smp-kelas-8', 
    name: 'SMP Kelas 8', 
    icon: BookOpen, 
    courses: 12,
    description: 'Kursus untuk siswa SMP kelas 8 dengan materi yang lebih mendalam dan terstruktur',
    subjects: ['Matematika Kelas 8', 'IPA Kelas 8', 'Bahasa Indonesia Kelas 8', 'Bahasa Inggris Kelas 8']
  },
  { 
    id: 'smp-kelas-9', 
    name: 'SMP Kelas 9', 
    icon: BookOpen, 
    courses: 12,
    description: 'Persiapan siswa SMP kelas 9 untuk menghadapi ujian nasional dan masuk SMA',
    subjects: ['Matematika Kelas 9', 'IPA Kelas 9', 'Bahasa Indonesia Kelas 9', 'Bahasa Inggris Kelas 9', 'Persiapan UN']
  },
  { 
    id: 'sma-kelas-10', 
    name: 'SMA Kelas 10', 
    icon: GraduationCap, 
    courses: 10,
    description: 'Kursus untuk siswa SMA kelas 10 semua jurusan dengan materi dasar yang kuat',
    subjects: ['Matematika Wajib Kelas 10', 'Bahasa Indonesia Kelas 10', 'Bahasa Inggris Kelas 10', 'Sejarah Kelas 10']
  },
  { 
    id: 'sma-kelas-11-ipa', 
    name: 'SMA Kelas 11 IPA', 
    icon: Target, 
    courses: 8,
    description: 'Kursus khusus untuk siswa SMA kelas 11 jurusan IPA dengan fokus sains dan matematika',
    subjects: ['Matematika Peminatan Kelas 11', 'Fisika Kelas 11', 'Kimia Kelas 11', 'Biologi Kelas 11']
  },
  { 
    id: 'sma-kelas-11-ips', 
    name: 'SMA Kelas 11 IPS', 
    icon: Users, 
    courses: 8,
    description: 'Kursus khusus untuk siswa SMA kelas 11 jurusan IPS dengan fokus ilmu sosial',
    subjects: ['Sejarah Kelas 11', 'Geografi Kelas 11', 'Sosiologi Kelas 11', 'Ekonomi Kelas 11']
  },
  { 
    id: 'sma-kelas-12-ipa', 
    name: 'SMA Kelas 12 IPA', 
    icon: Target, 
    courses: 8,
    description: 'Persiapan siswa SMA kelas 12 IPA untuk ujian nasional dan SNBT UTBK',
    subjects: ['Matematika Peminatan Kelas 12', 'Fisika Kelas 12', 'Kimia Kelas 12', 'Biologi Kelas 12', 'Persiapan SNBT']
  },
  { 
    id: 'sma-kelas-12-ips', 
    name: 'SMA Kelas 12 IPS', 
    icon: Users, 
    courses: 8,
    description: 'Persiapan siswa SMA kelas 12 IPS untuk ujian nasional dan SNBT UTBK',
    subjects: ['Sejarah Kelas 12', 'Geografi Kelas 12', 'Sosiologi Kelas 12', 'Ekonomi Kelas 12', 'Persiapan SNBT']
  },
  { 
    id: 'snbt-tps', 
    name: 'SNBT - TPS', 
    icon: Award, 
    courses: 4,
    description: 'Persiapan khusus Tes Potensi Skolastik (TPS) untuk SNBT UTBK 2024',
    subjects: ['Penalaran Umum', 'Pengetahuan Kuantitatif', 'Pengetahuan dan Pemahaman Umum', 'Memahami Bacaan dan Menulis']
  },
  { 
    id: 'snbt-literasi-indonesia', 
    name: 'SNBT - Literasi Indonesia', 
    icon: Award, 
    courses: 3,
    description: 'Persiapan khusus Tes Literasi dalam Bahasa Indonesia untuk SNBT UTBK',
    subjects: ['Membaca dan Memahami', 'Menulis', 'Berbicara dan Menyimak']
  },
  { 
    id: 'snbt-literasi-inggris', 
    name: 'SNBT - Literasi Inggris', 
    icon: Award, 
    courses: 3,
    description: 'Persiapan khusus Tes Literasi dalam Bahasa Inggris untuk SNBT UTBK',
    subjects: ['Reading Comprehension', 'Writing Skills', 'Grammar and Vocabulary']
  },
  { 
    id: 'snbt-penalaran-matematika', 
    name: 'SNBT - Penalaran Matematika', 
    icon: Award, 
    courses: 3,
    description: 'Persiapan khusus Tes Penalaran Matematika untuk SNBT UTBK',
    subjects: ['Aljabar', 'Geometri dan Pengukuran', 'Statistika dan Peluang', 'Kalkulus Dasar']
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
                Pilih jenjang dan kelas yang sesuai dengan kebutuhan belajar Anda
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
