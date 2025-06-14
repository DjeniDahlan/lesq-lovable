
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { School, BookOpen, Award, Users, GraduationCap } from 'lucide-react';

const categories = [
  { id: 'sd', name: 'Sekolah Dasar (SD)', icon: School, courses: 115 },
  { id: 'smp', name: 'Sekolah Menengah Pertama (SMP)', icon: BookOpen, courses: 156 },
  { id: 'sma-umum', name: 'Sekolah Menengah Atas (SMA)', icon: GraduationCap, courses: 212 },
  { id: 'snbt-utbk', name: 'SNBT UTBK', icon: Award, courses: 41 }
];

const CategoriesSection = () => {
  return (
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
  );
};

export default CategoriesSection;
