
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail } from "lucide-react";

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Media Center</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Temukan informasi terbaru, materi pers, dan sumber daya media tentang Les-Q
            </p>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Siaran Pers Terbaru</h2>
            <div className="grid gap-6 max-w-4xl">
              {[
                {
                  date: "15 April 2025",
                  title: "Les-Q Meluncurkan Program Beasiswa untuk 1000 Mahasiswa Indonesia",
                  excerpt: "Program beasiswa bertujuan untuk mendukung pengembangan talenta digital di Indonesia."
                },
                {
                  date: "1 April 2025",
                  title: "Les-Q Mencapai 50.000 Pengguna Aktif",
                  excerpt: "Platform pembelajaran online Les-Q mencatat pertumbuhan signifikan dalam jumlah pengguna."
                }
              ].map((press, index) => (
                <Card key={index} className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{press.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{press.title}</h3>
                  <p className="text-gray-600 mb-4">{press.excerpt}</p>
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Baca Selengkapnya
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Sumber Daya Media</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Media Kit</h3>
                <p className="text-gray-600 mb-4">
                  Download logo, foto, dan aset visual Les-Q untuk keperluan media.
                </p>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Media Kit
                </Button>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Kontak Media</h3>
                <p className="text-gray-600 mb-4">
                  Untuk pertanyaan media dan wawancara, silakan hubungi tim kami.
                </p>
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Hubungi Tim Media
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
