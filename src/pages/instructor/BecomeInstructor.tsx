import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, DollarSign, Award, Laptop, BookUser, PenTool, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const BecomeInstructor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jadilah Pengajar Les-Q
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Bagikan pengetahuan Anda dan bantu ribuan pembelajar mencapai tujuan mereka sambil membangun karir yang menguntungkan
              </p>
              <Link to="/register">
                <Button size="lg" className="px-8">Daftar Sekarang</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Keuntungan Menjadi Pengajar
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Penghasilan Menarik</h3>
                <p className="text-gray-600">
                  Dapatkan komisi hingga 70% dari setiap penjualan kursus Anda
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Jangkau Lebih Luas</h3>
                <p className="text-gray-600">
                  Akses ke ribuan pembelajar aktif yang mencari ilmu baru
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fleksibel</h3>
                <p className="text-gray-600">
                  Ajar dari mana saja dan kapan saja sesuai jadwal Anda
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bangun Reputasi</h3>
                <p className="text-gray-600">
                  Kembangkan personal brand sebagai ahli di bidang Anda
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Apa yang Bisa Anda Lakukan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <BookUser className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Buat Kursus Video</h3>
                  <p className="text-gray-600">
                    Rekam dan unggah video pembelajaran berkualitas tinggi untuk ditonton kapan saja
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Presentation className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sesi Live</h3>
                  <p className="text-gray-600">
                    Adakan kelas langsung interaktif dan jawab pertanyaan siswa secara real-time
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <PenTool className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tugas & Ujian</h3>
                  <p className="text-gray-600">
                    Buat berbagai jenis tugas dan ujian untuk mengevaluasi pemahaman siswa
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cara Menjadi Pengajar
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Daftar & Verifikasi</h3>
                    <p className="text-gray-600">
                      Lengkapi profil dan verifikasi identitas Anda sebagai pengajar profesional
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Siapkan Kursus</h3>
                    <p className="text-gray-600">
                      Rancang silabus dan buat konten pembelajaran yang menarik dan berkualitas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Review & Publikasi</h3>
                    <p className="text-gray-600">
                      Tim kami akan mereview kursus Anda untuk memastikan kualitas sebelum dipublikasikan
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
                      Interaksi dengan pembelajar dan dapatkan penghasilan dari setiap kursus yang terjual
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Siap Untuk Mulai Mengajar?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Bergabunglah dengan komunitas pengajar Les-Q dan mulai bagikan pengetahuan Anda
              </p>
              <Link to="/register">
                <Button size="lg" className="px-8">Daftar Sekarang</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeInstructor;
