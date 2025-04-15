
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, DollarSign, Award } from "lucide-react";

const BecomeInstructor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jadilah Instruktur Les-Q
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Bagikan pengetahuan Anda dan bantu ribuan pembelajar mencapai tujuan mereka sambil membangun karir yang menguntungkan
              </p>
              <Button size="lg">Mulai Mengajar</Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mengapa Menjadi Instruktur?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Platform Terpercaya</h3>
                <p className="text-gray-600">
                  Bergabung dengan platform pembelajaran online terkemuka di Indonesia
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Jangkau Lebih Banyak</h3>
                <p className="text-gray-600">
                  Akses ke ribuan pembelajar yang aktif mencari pengetahuan baru
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Penghasilan Menarik</h3>
                <p className="text-gray-600">
                  Dapatkan penghasilan dari setiap kursus yang Anda buat dan jual
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bangun Reputasi</h3>
                <p className="text-gray-600">
                  Kembangkan personal brand Anda sebagai ahli di bidang Anda
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cara Menjadi Instruktur
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Daftar sebagai Instruktur</h3>
                    <p className="text-gray-600">
                      Lengkapi profil dan verifikasi identitas Anda sebagai instruktur
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Buat Kursus Anda</h3>
                    <p className="text-gray-600">
                      Rancang dan upload materi pembelajaran berkualitas tinggi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Review dan Publikasi</h3>
                    <p className="text-gray-600">
                      Tim kami akan mereview kursus Anda sebelum dipublikasikan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mulai Mengajar</h3>
                    <p className="text-gray-600">
                      Interaksi dengan pembelajar dan dapatkan penghasilan dari kursus Anda
                    </p>
                  </div>
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

export default BecomeInstructor;
