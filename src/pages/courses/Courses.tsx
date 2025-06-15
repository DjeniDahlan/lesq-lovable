
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Footer from "@/components/layout/Footer";
import CourseGrid from "@/components/course/CourseGrid";
import CourseFilter from "@/components/course/CourseFilter";
import { mockCourses } from "@/data/mockCourses";
import { supabase } from '@/integrations/supabase/client';

const Courses = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-poppins text-xl font-bold">Les-Q</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link to="/dashboard/student">
                  <Button variant="outline">
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative p-1">
                      <img
                        src="https://randomuser.me/api/portraits/men/42.jpg"
                        alt="Foto profil"
                        className="h-8 w-8 rounded-full"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/student">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/account/profile">Profil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/account/purchases">Pembelian</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">
                    Masuk
                  </Button>
                </Link>
                <Link to="/register">
                  <Button>
                    Daftar
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Katalog Kursus
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Temukan kursus yang tepat untuk mencapai tujuan pembelajaran Anda
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <CourseFilter />
              </div>
              <div className="lg:w-3/4">
                <CourseGrid courses={mockCourses} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
