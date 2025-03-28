
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseGrid from '@/components/course/CourseGrid';
import CourseFilter from '@/components/course/CourseFilter';
import { CourseType } from '@/components/course/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon, SlidersHorizontal, X } from 'lucide-react';

// Mock search results
const searchResults: CourseType[] = [
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
    level: 'Menengah',
    duration: '22 jam',
    studentCount: 7241,
    category: 'Mobile Development'
  },
  {
    id: '10',
    title: 'UI/UX Design dengan Figma untuk Pemula',
    instructor: 'Maya Dewi',
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1740&auto=format&fit=crop',
    price: 459000,
    rating: 4.9,
    reviewCount: 1205,
    level: 'Pemula',
    duration: '18 jam',
    studentCount: 18432,
    category: 'Desain Grafis'
  },
  {
    id: '11',
    title: 'Advanced JavaScript: ES6 dan Konsep Modern',
    instructor: 'Bayu Prakoso',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1740&auto=format&fit=crop',
    price: 549000,
    discountPrice: 349000,
    rating: 4.6,
    reviewCount: 967,
    level: 'Mahir',
    duration: '25 jam',
    studentCount: 12075,
    category: 'Pengembangan Web'
  },
  {
    id: '12',
    title: 'Belajar Full-Stack Web Development dengan MERN Stack',
    instructor: 'Fajar Nugroho',
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1740&auto=format&fit=crop',
    price: 799000,
    discountPrice: 499000,
    rating: 4.8,
    reviewCount: 742,
    level: 'Menengah',
    duration: '40 jam',
    studentCount: 6234,
    category: 'Pengembangan Web'
  }
];

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [showFilter, setShowFilter] = useState(false);
  
  // In a real app, you would use these query params to fetch data from the API
  const searchQuery = searchParams.get('q');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: query });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gray-50 py-8">
          <div className="container">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Cari kursus, topik, atau keahlian..."
                  className="pl-10 pr-4 py-6 text-base"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="absolute right-1 top-1 bottom-1"
                >
                  Cari
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {searchQuery 
                  ? `Hasil Pencarian untuk "${searchQuery}"` 
                  : "Jelajahi Kursus"
                }
              </h1>
              <p className="text-muted-foreground">
                {searchResults.length} kursus ditemukan
              </p>
            </div>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 md:hidden"
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
              {showFilter ? "Tutup Filter" : "Filter"}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className={`${showFilter ? 'block' : 'hidden'} md:block col-span-1`}>
              <CourseFilter />
            </div>
            
            <div className="col-span-1 md:col-span-3">
              {searchResults.length > 0 ? (
                <CourseGrid courses={searchResults} />
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-xl font-semibold mb-2">Tidak ada hasil yang ditemukan</h2>
                  <p className="text-muted-foreground mb-4">
                    Coba gunakan kata kunci yang berbeda atau filter yang lebih umum
                  </p>
                  <Button variant="outline" onClick={() => setSearchParams({})}>
                    Reset Semua Filter
                  </Button>
                </div>
              )}
              
              {searchResults.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Muat Lebih Banyak</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
