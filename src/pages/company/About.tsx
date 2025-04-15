
import { Users, Trophy, Target, History } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Tentang Les-Q</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Kami adalah platform pembelajaran online terkemuka di Indonesia yang berkomitmen untuk memberikan akses pendidikan berkualitas kepada semua orang.
            </p>
          </div>
        </section>

        {/* Vision Mission Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
                <p className="text-gray-600">
                  Menjadi platform pembelajaran online terdepan yang memungkinkan setiap orang untuk mengembangkan potensi diri dan mencapai kesuksesan dalam karir mereka.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
                <p className="text-gray-600">
                  Menyediakan akses ke pendidikan berkualitas tinggi, mendukung pengembangan keterampilan digital, dan membangun komunitas pembelajar yang saling mendukung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-gray-600">Pelajar Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-600">Instruktur Ahli</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">300+</div>
                <div className="text-gray-600">Kursus Tersedia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
