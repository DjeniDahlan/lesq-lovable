
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface CourseDetailErrorProps {
  error: string;
}

const CourseDetailError = ({ error }: CourseDetailErrorProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {error || 'Kursus tidak ditemukan'}
          </h1>
          <p className="text-muted-foreground">
            {error === 'Kursus tidak ditemukan' 
              ? 'Kursus yang Anda cari mungkin tidak tersedia atau telah dihapus.' 
              : 'Silakan coba lagi dalam beberapa saat.'}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailError;
