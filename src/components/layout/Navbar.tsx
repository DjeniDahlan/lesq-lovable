
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, BookOpen, User } from 'lucide-react';
import CategoryMenu from './CategoryMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-poppins text-xl font-bold">SkillScape</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <CategoryMenu />
          <Link to="/search" className="text-sm font-medium hover:text-primary">
            Jelajahi Kursus
          </Link>
          <Link to="/become-instructor" className="text-sm font-medium hover:text-primary">
            Jadi Instruktur
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Cari kursus..." 
              className="w-[200px] pl-8 rounded-full bg-muted"
            />
          </div>
          <Link to="/login">
            <Button variant="outline" size="sm">Masuk</Button>
          </Link>
          <Link to="/register">
            <Button size="sm">Daftar</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 pb-6 border-b">
          <div className="relative my-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Cari kursus..." 
              className="w-full pl-8 rounded-full bg-muted"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link to="/categories" className="text-sm font-medium hover:text-primary">
              Kategori
            </Link>
            <Link to="/search" className="text-sm font-medium hover:text-primary">
              Jelajahi Kursus
            </Link>
            <Link to="/become-instructor" className="text-sm font-medium hover:text-primary">
              Jadi Instruktur
            </Link>
            <div className="flex gap-4 pt-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full" size="sm">
                  Masuk
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button className="w-full" size="sm">
                  Daftar
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
