
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Tips Efektif Mempersiapkan SNBT UTBK 2024",
    excerpt: "Strategi jitu untuk menghadapi Seleksi Nasional Berdasarkan Tes dan meraih skor maksimal.",
    author: "Dr. Ahmad Wijaya",
    date: "15 Januari 2024",
    category: "Tips Belajar",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Pentingnya Pembelajaran Interaktif di Era Digital",
    excerpt: "Bagaimana teknologi mengubah cara siswa belajar dan memahami materi pelajaran.",
    author: "Sari Indah, M.Pd",
    date: "10 Januari 2024",
    category: "Pendidikan",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Mengatasi Kesulitan Belajar Matematika",
    excerpt: "Metode praktis untuk membantu siswa memahami konsep matematika dengan mudah.",
    author: "Prof. Bambang Suharjo",
    date: "5 Januari 2024",
    category: "Matematika",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Persiapan Ujian Nasional: Strategi dan Tips",
    excerpt: "Panduan lengkap mempersiapkan diri menghadapi ujian nasional dengan percaya diri.",
    author: "Dra. Maya Sari",
    date: "2 Januari 2024",
    category: "Tips Belajar",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Teknologi AI dalam Pembelajaran Modern",
    excerpt: "Eksplorasi penggunaan artificial intelligence untuk meningkatkan efektivitas belajar.",
    author: "Budi Santoso",
    date: "28 Desember 2023",
    category: "Teknologi",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Membangun Motivasi Belajar yang Berkelanjutan",
    excerpt: "Cara mempertahankan semangat belajar dan mencapai target akademik jangka panjang.",
    author: "Drs. Hendra Pratama",
    date: "25 Desember 2023",
    category: "Motivasi",
    image: "/placeholder.svg"
  }
];

const categories = ["Semua", "Tips Belajar", "Pendidikan", "Matematika", "Teknologi", "Motivasi"];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Blog Les-Q
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Artikel, tips, dan insight terbaru seputar pendidikan dan pembelajaran
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <Link to={`/blog/${post.id}`} className="flex items-center gap-1 text-primary hover:gap-2 transition-all">
                        <span className="text-sm">Baca</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
