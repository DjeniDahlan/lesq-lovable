
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseGrid from "@/components/course/CourseGrid";
import CourseFilter from "@/components/course/CourseFilter";
import { mockCourses } from "@/data/mockCourses";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
