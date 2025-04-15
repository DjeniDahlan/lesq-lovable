
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BarChart2, 
  Shield, 
  Briefcase,
  BookOpen,
  Award,
  Zap,
  MessageSquare
} from "lucide-react";

const Business = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Les-Q untuk Bisnis
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Solusi pembelajaran online yang dirancang khusus untuk mengembangkan keterampilan tim Anda
              </p>
              <Button size="lg">Hubungi Tim Enterprise</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Pelatihan Tim</h3>
                <p className="text-gray-600">
                  Platform pembelajaran yang dapat disesuaikan untuk tim Anda dengan materi khusus industri
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <BarChart2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Analisis Performa</h3>
                <p className="text-gray-600">
                  Pantau perkembangan tim dengan laporan dan analisis terperinci
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Keamanan Enterprise</h3>
                <p className="text-gray-600">
                  Perlindungan data tingkat enterprise dan integrasi SSO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mengapa Memilih Les-Q untuk Bisnis?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Konten Berkualitas</h3>
                <p className="text-sm text-gray-600">
                  Materi pembelajaran yang selalu diperbarui dan relevan dengan industri
                </p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Sertifikasi Profesional</h3>
                <p className="text-sm text-gray-600">
                  Sertifikat yang diakui industri untuk pengembangan karir
                </p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Implementasi Cepat</h3>
                <p className="text-sm text-gray-600">
                  Setup cepat dan dukungan teknis yang responsif
                </p>
              </div>
              <div className="text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Dukungan Dedicated</h3>
                <p className="text-sm text-gray-600">
                  Tim support khusus untuk membantu kebutuhan perusahaan Anda
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Siap Mengembangkan Tim Anda?
              </h2>
              <p className="text-gray-600 mb-8">
                Hubungi tim enterprise kami untuk mendiskusikan solusi yang tepat untuk perusahaan Anda
              </p>
              <Button size="lg">
                <Briefcase className="mr-2 h-4 w-4" />
                Jadwalkan Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Business;
