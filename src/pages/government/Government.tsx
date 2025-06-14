
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  GraduationCap, 
  Users, 
  BarChart3,
  Shield,
  Award,
  BookOpen,
  Target
} from "lucide-react";

const Government = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Les-Q untuk Pemerintah
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Solusi pembelajaran digital untuk mendukung program pendidikan pemerintah daerah dan nasional
              </p>
              <Button size="lg">Hubungi Tim Government</Button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Solusi untuk Pemerintah</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 border rounded-lg text-center">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Program Daerah</h3>
                <p className="text-gray-600 text-sm">
                  Dukungan program pendidikan untuk pemerintah daerah
                </p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Pelatihan Guru</h3>
                <p className="text-gray-600 text-sm">
                  Program peningkatan kompetensi guru dan tenaga pendidik
                </p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Skalabilitas Massal</h3>
                <p className="text-gray-600 text-sm">
                  Platform yang dapat menampung ribuan pengguna secara bersamaan
                </p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Reporting Komprehensif</h3>
                <p className="text-gray-600 text-sm">
                  Laporan dan analisis untuk evaluasi program pendidikan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Fitur Khusus Government</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Keamanan Data Tinggi</h3>
                <p className="text-gray-600">
                  Infrastruktur keamanan sesuai standar pemerintah dengan enkripsi end-to-end
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sertifikasi Resmi</h3>
                <p className="text-gray-600">
                  Sertifikat yang diakui secara resmi untuk program pelatihan pemerintah
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Kurikulum Kustom</h3>
                <p className="text-gray-600">
                  Pengembangan kurikulum sesuai kebutuhan spesifik program pemerintah
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Manfaat untuk Pemerintah</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Efisiensi Anggaran</h3>
                      <p className="text-gray-600 text-sm">Solusi cost-effective untuk program pendidikan massal</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Jangkauan Luas</h3>
                      <p className="text-gray-600 text-sm">Menjangkau daerah terpencil dengan koneksi internet</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Monitoring Real-time</h3>
                      <p className="text-gray-600 text-sm">Pemantauan progress program secara real-time</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Standardisasi Kualitas</h3>
                      <p className="text-gray-600 text-sm">Memastikan kualitas pendidikan yang seragam</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Statistik Implementasi</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-gray-600">Kab/Kota</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100K+</div>
                    <div className="text-sm text-gray-600">Peserta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600">Sekolah</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Transformasi Digital Pendidikan Daerah Anda
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Bergabunglah dengan puluhan pemerintah daerah yang telah mempercayai Les-Q 
                untuk program pendidikan digital mereka
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Konsultasi Gratis
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Download Proposal
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Government;
