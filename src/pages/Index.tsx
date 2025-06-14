
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import CoursesSections from '@/components/home/CoursesSections';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import InstructorCTASection from '@/components/home/InstructorCTASection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <CoursesSections />
        <TestimonialsSection />
        <InstructorCTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
