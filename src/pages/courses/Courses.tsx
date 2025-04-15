
import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseGrid from "@/components/course/CourseGrid";
import CourseFilter from "@/components/course/CourseFilter";
import { mockCourses } from '@/data/mockCourses';
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";

const Courses = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Katalog Kursus</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Jelajahi berbagai kursus berkualitas tinggi dari para ahli industri terkemuka
            </p>
          </div>
        </section>

        <div className="container py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-muted-foreground">
                {mockCourses.length} kursus tersedia
              </p>
            </div>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 md:hidden"
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
              {showFilter ? "Tutup Filter" : "Filter"}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className={`${showFilter ? 'block' : 'hidden'} md:block col-span-1`}>
              <CourseFilter />
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <CourseGrid courses={mockCourses} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
