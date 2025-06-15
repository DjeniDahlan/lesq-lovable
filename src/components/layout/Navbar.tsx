
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, BookOpen, User } from 'lucide-react';
import CategoryMenu from './CategoryMenu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from '@/integrations/supabase/client';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error);
      // Force redirect even if logout fails
      navigate('/login');
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 whitespace-nowrap">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-poppins text-xl font-bold">Les-Q</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <CategoryMenu />
            <Link to="/search" className="text-sm font-medium hover:text-primary">
              Jelajahi Kursus
            </Link>
            <Link to="/become-instructor" className="text-sm font-medium hover:text-primary">
              Jadi Pengajar
            </Link>
          </div>
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
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/account/profile">Profil Saya</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/account/settings">Pengaturan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/account/purchases">Pembelian</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
              Jadi Pengajar
            </Link>
            <Link to="/account/profile" className="text-sm font-medium hover:text-primary">
              Profil Saya
            </Link>
            <Link to="/account/settings" className="text-sm font-medium hover:text-primary">
              Pengaturan
            </Link>
            <Link to="/account/purchases" className="text-sm font-medium hover:text-primary">
              Pembelian
            </Link>
            <Button onClick={handleLogout} variant="ghost" className="justify-start px-0">
              Keluar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
