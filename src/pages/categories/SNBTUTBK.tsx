
import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseGrid from "@/components/course/CourseGrid";
import CourseFilter from "@/components/course/CourseFilter";
import { mockCourses } from '@/data/mockCourses';
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";

const SNBTUTBK = () => {
  const [showFilter, setShowFilter] = useState(false);
  
  // Filter kursus untuk kategori SNBT UTBK
  const snbtCourses = mockCourses.filter(course => 
    course.category === "SNBT - TPS" || 
    course.category === "SNBT - Literasi Indonesia" ||
    course.category === "SNBT - Literasi Inggris" ||
    course.category === "SNBT - Penalaran Matematika"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Kursus SNBT UTBK</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Persiapan Seleksi Nasional Berdasarkan Tes (SNBT) dan Ujian Tulis Berbasis Komputer (UTBK) meliputi TPS dan Tes Literasi
            </p>
          </div>
        </section>

        <div className="container py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-muted-foreground">
                {snbtCourses.length} kursus tersedia
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
              <CourseGrid courses={snbtCourses} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SNBTUTBK;
