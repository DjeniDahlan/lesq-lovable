
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, LogIn, UserPlus } from 'lucide-react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Belajar Online untuk Pendidikan Terbaik
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Platform pembelajaran online untuk siswa SD, SMP, SMA hingga persiapan SNBT UTBK dan Ujian Mandiri PTN
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
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

          <div className="flex justify-center gap-4">
            <Link to="/login">
              <Button className="flex items-center gap-2 py-3 px-6">
                <LogIn className="h-4 w-4" />
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button className="flex items-center gap-2 py-3 px-6">
                <UserPlus className="h-4 w-4" />
                Daftar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
