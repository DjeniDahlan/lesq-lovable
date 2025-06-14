
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CourseGrid from '@/components/course/CourseGrid';
import { CourseType } from '@/components/course/CourseCard';

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

const CoursesSections = () => {
  return (
    <>
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
    </>
  );
};

export default CoursesSections;
