
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgePercent, DollarSign, Users, Link as LinkIcon } from "lucide-react";

const Affiliates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Program Afiliasi</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Dapatkan penghasilan tambahan dengan merekomendasikan kursus Les-Q kepada jaringan Anda
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                Gabung Sekarang
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Keuntungan Program Afiliasi</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <DollarSign className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Komisi Menarik</h3>
                <p className="text-gray-600">
                  Dapatkan komisi hingga 30% dari setiap penjualan kursus melalui link afiliasi Anda
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <BadgePercent className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bonus Performa</h3>
                <p className="text-gray-600">
                  Bonus tambahan untuk affiliator dengan performa terbaik setiap bulannya
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dukungan Penuh</h3>
                <p className="text-gray-600">
                  Akses ke materi promosi dan dukungan tim afiliasi yang responsif
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Cara Kerja</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {[
                  {
                    step: "1",
                    title: "Daftar",
                    description: "Lengkapi formulir pendaftaran dan tunggu persetujuan dari tim kami"
                  },
                  {
                    step: "2",
                    title: "Dapatkan Link",
                    description: "Terima link afiliasi unik Anda setelah akun disetujui"
                  },
                  {
                    step: "3",
                    title: "Promosikan",
                    description: "Bagikan link afiliasi Anda melalui berbagai platform"
                  },
                  {
                    step: "4",
                    title: "Terima Komisi",
                    description: "Dapatkan komisi dari setiap pembelian melalui link Anda"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Affiliates;
