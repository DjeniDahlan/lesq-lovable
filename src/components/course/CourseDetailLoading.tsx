
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CourseDetailLoading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-60 bg-gray-200 rounded"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailLoading;
