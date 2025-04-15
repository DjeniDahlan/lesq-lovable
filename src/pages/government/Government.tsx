
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  FileText,
  Landmark,
  BadgeCheck,
  Scale,
  Phone
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
                Solusi pembelajaran digital untuk instansi pemerintah yang mendukung pengembangan SDM aparatur negara
              </p>
              <Button size="lg">Hubungi Tim Government</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg">
                <Building2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Platform Terintegrasi</h3>
                <p className="text-gray-600">
                  Sistem pembelajaran yang dapat diintegrasikan dengan infrastruktur pemerintah yang ada
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Pengembangan ASN</h3>
                <p className="text-gray-600">
                  Program pembelajaran khusus untuk meningkatkan kompetensi aparatur sipil negara
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Keamanan Data</h3>
                <p className="text-gray-600">
                  Standar keamanan tinggi yang sesuai dengan regulasi pemerintah
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Keunggulan Les-Q untuk Instansi Pemerintah
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Landmark className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Sesuai Regulasi</h3>
                <p className="text-sm text-gray-600">
                  Mematuhi standar dan regulasi pemerintah yang berlaku
                </p>
              </div>
              <div className="text-center">
                <BadgeCheck className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Sertifikasi Resmi</h3>
                <p className="text-sm text-gray-600">
                  Sertifikat yang diakui untuk pengembangan karir ASN
                </p>
              </div>
              <div className="text-center">
                <Scale className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Sistem Terukur</h3>
                <p className="text-sm text-gray-600">
                  Evaluasi dan penilaian kinerja yang terstruktur
                </p>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Pelaporan Lengkap</h3>
                <p className="text-sm text-gray-600">
                  Sistem pelaporan yang sesuai dengan kebutuhan instansi
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
                Tingkatkan Kualitas SDM Instansi Anda
              </h2>
              <p className="text-gray-600 mb-8">
                Diskusikan kebutuhan pembelajaran digital instansi Anda dengan tim kami
              </p>
              <Button size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Government;
