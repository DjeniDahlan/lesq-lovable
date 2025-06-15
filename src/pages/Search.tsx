import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@/hooks/useDebounce';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseGrid from '@/components/course/CourseGrid';
import CourseFilter from '@/components/course/CourseFilter';
import { CourseType } from '@/components/course/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon, SlidersHorizontal, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { mockCourses } from '@/data/mockCourses';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<CourseType[]>([]);
  const debouncedQuery = useDebounce(query, 500);

  // Get filters from URL params
  const category = searchParams.get('category') || '';
  const level = searchParams.get('level') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  
  const searchCourses = async (searchQuery: string) => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filter the mock courses based on search criteria
      let filteredCourses = [...mockCourses];
      
      if (searchQuery) {
        filteredCourses = filteredCourses.filter(course => 
          course.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (category && category !== "Semua Kategori") {
        filteredCourses = filteredCourses.filter(course => 
          course.category === category
        );
      }

      if (level && level !== "Semua Level") {
        filteredCourses = filteredCourses.filter(course => 
          course.level === level
        );
      }

      if (minPrice) {
        filteredCourses = filteredCourses.filter(course => 
          (course.discountPrice || course.price) >= parseInt(minPrice)
        );
      }

      if (maxPrice) {
        filteredCourses = filteredCourses.filter(course => 
          (course.discountPrice || course.price) <= parseInt(maxPrice)
        );
      }

      setSearchResults(filteredCourses);
    } catch (error: any) {
      console.error('Error searching courses:', error);
      toast({
        title: "Error",
        description: "Gagal mencari kursus. Silakan coba lagi.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to handle initial search and URL params changes
  useEffect(() => {
    searchCourses(searchParams.get('q') || '');
  }, [searchParams]);

  // Effect to handle debounced search
  useEffect(() => {
    if (debouncedQuery !== searchParams.get('q')) {
      setSearchParams(prev => {
        const newParams = new URLSearchParams(prev);
        newParams.set('q', debouncedQuery);
        return newParams;
      });
    }
  }, [debouncedQuery, setSearchParams]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('q', query);
      return newParams;
    });
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
                  disabled={isLoading}
                >
                  {isLoading ? 'Mencari...' : 'Cari'}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {searchParams.get('q') 
                  ? `Hasil Pencarian untuk "${searchParams.get('q')}"` 
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
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : searchResults.length > 0 ? (
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
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
