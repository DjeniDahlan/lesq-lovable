
import { Link } from 'react-router-dom';
import { School, BookOpen, Award, Users, GraduationCap, Target } from 'lucide-react';

const categories = [
  { id: 'sd-kelas-1-3', name: 'SD Kelas 1-3', icon: School, courses: 18 },
  { id: 'sd-kelas-4-6', name: 'SD Kelas 4-6', icon: School, courses: 24 },
  { id: 'smp-kelas-7', name: 'SMP Kelas 7-9', icon: BookOpen, courses: 36 },
  { id: 'sma-kelas-10', name: 'SMA Kelas 10-12', icon: GraduationCap, courses: 42 },
  { id: 'snbt-tps', name: 'SNBT UTBK', icon: Award, courses: 13 },
  { id: 'ujian-mandiri-ugm', name: 'Ujian Mandiri', icon: Target, courses: 17 }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Jenjang Pendidikan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih jenjang dan kelas yang sesuai dengan kebutuhan belajar Anda
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
      </div>
    </section>
  );
};

export default CategoriesSection;
