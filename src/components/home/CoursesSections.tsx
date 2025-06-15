
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CourseGrid from '@/components/course/CourseGrid';

const CoursesSections = () => {
  return (
    <>
      {/* Popular Courses Section */}
      <section className="py-16">
        <div className="container">
          <CourseGrid 
            title="Kursus Terpopuler" 
            description="Kursus pilihan terbaik yang diikuti oleh ribuan siswa"
            limit={4}
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
            title="Kursus Terbaru" 
            description="Materi pembelajaran terbaru yang telah disesuaikan dengan kurikulum"
            limit={4}
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
