
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Tentang Les-Q
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Platform pembelajaran online terdepan untuk pendidikan berkualitas di Indonesia
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
                <p className="text-gray-600 mb-6">
                  Les-Q didirikan dengan misi untuk memberikan akses pendidikan berkualitas tinggi 
                  kepada setiap siswa di Indonesia. Kami percaya bahwa setiap anak berhak mendapatkan 
                  pembelajaran terbaik untuk meraih masa depan yang cerah.
                </p>
                <p className="text-gray-600">
                  Dengan menggunakan teknologi terkini dan metode pembelajaran yang inovatif, 
                  kami menghadirkan pengalaman belajar yang efektif dan menyenangkan.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Tim Berpengalaman</h3>
                  <p className="text-sm text-gray-600">Instruktur bersertifikat dengan pengalaman mengajar</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Fokus Hasil</h3>
                  <p className="text-sm text-gray-600">Pembelajaran terarah untuk mencapai target akademik</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Prestasi Terbukti</h3>
                  <p className="text-sm text-gray-600">Ribuan siswa berhasil mencapai target mereka</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Pembelajaran Menyenangkan</h3>
                  <p className="text-sm text-gray-600">Metode belajar interaktif dan engaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Tim Kami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Dr. Ahmad Wijaya</h3>
                <p className="text-primary">CEO & Founder</p>
                <p className="text-sm text-gray-600 mt-2">15+ tahun pengalaman di bidang pendidikan</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Sari Indah, M.Pd</h3>
                <p className="text-primary">Head of Curriculum</p>
                <p className="text-sm text-gray-600 mt-2">Spesialis pengembangan kurikulum pendidikan</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Budi Santoso</h3>
                <p className="text-primary">CTO</p>
                <p className="text-sm text-gray-600 mt-2">Expert teknologi pembelajaran digital</p>
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
