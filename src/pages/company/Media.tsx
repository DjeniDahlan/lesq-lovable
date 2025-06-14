
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";

const pressReleases = [
  {
    date: "15 Januari 2024",
    title: "Les-Q Raih Penghargaan Platform Edukasi Terbaik 2024",
    excerpt: "Les-Q menerima penghargaan sebagai platform pembelajaran online terbaik dari Asosiasi Pendidikan Digital Indonesia.",
    link: "#"
  },
  {
    date: "3 Desember 2023",
    title: "Kemitraan Strategis dengan 500+ Sekolah se-Indonesia",
    excerpt: "Les-Q mengumumkan kemitraan dengan lebih dari 500 sekolah untuk mendukung pembelajaran hybrid.",
    link: "#"
  },
  {
    date: "20 Oktober 2023",
    title: "Peluncuran Fitur AI Tutor untuk Pembelajaran Personal",
    excerpt: "Inovasi terbaru Les-Q dalam menghadirkan asisten pembelajaran berbasis AI yang dapat menyesuaikan dengan gaya belajar setiap siswa.",
    link: "#"
  }
];

const mediaKit = [
  {
    title: "Logo Les-Q",
    description: "Logo resmi Les-Q dalam berbagai format",
    type: "ZIP File"
  },
  {
    title: "Brand Guidelines",
    description: "Panduan penggunaan brand Les-Q",
    type: "PDF"
  },
  {
    title: "Press Kit",
    description: "Informasi lengkap tentang perusahaan",
    type: "PDF"
  }
];

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Media & Pers
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Informasi terkini tentang Les-Q untuk media dan jurnalis
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Siaran Pers Terbaru</h2>
            <div className="grid gap-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4" />
                        {release.date}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                      <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 ml-4 cursor-pointer hover:text-primary" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Media Kit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mediaKit.map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {item.type}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Kontak Media</h2>
              <p className="text-gray-600 mb-8">
                Untuk pertanyaan media dan wawancara, silakan hubungi tim PR kami
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Tim Media Relations</h3>
                  <p className="text-gray-600">Email: media@les-q.com</p>
                  <p className="text-gray-600">Telepon: +62 21 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
