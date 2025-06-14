
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, Gift } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Komisi Menarik",
    description: "Dapatkan komisi hingga 30% dari setiap penjualan yang berhasil"
  },
  {
    icon: Users,
    title: "Support Tim Dedicated",
    description: "Tim khusus yang siap membantu mengoptimalkan performa affiliate"
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Dashboard lengkap untuk memantau performa dan earnings"
  },
  {
    icon: Gift,
    title: "Bonus & Insentif",
    description: "Program bonus tambahan untuk top performer"
  }
];

const steps = [
  {
    number: "1",
    title: "Daftar Program",
    description: "Isi formulir pendaftaran dan tunggu persetujuan tim kami"
  },
  {
    number: "2",
    title: "Dapatkan Link Unik",
    description: "Terima link affiliate khusus untuk tracking referral"
  },
  {
    number: "3",
    title: "Promosikan Les-Q",
    description: "Bagikan link di blog, media sosial, atau platform lainnya"
  },
  {
    number: "4",
    title: "Terima Komisi",
    description: "Dapatkan pembayaran komisi setiap bulannya"
  }
];

const Affiliates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Program Afiliasi Les-Q
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Bergabunglah sebagai mitra afiliasi dan dapatkan penghasilan dengan mempromosikan pendidikan berkualitas
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Mengapa Bergabung dengan Program Afiliasi Kami?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center">
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Cara Bergabung</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Struktur Komisi</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Bronze</h3>
                  <p className="text-3xl font-bold text-primary mb-4">15%</p>
                  <p className="text-gray-600 text-sm">0 - 10 referral per bulan</p>
                </Card>
                <Card className="p-6 text-center border-primary">
                  <h3 className="text-xl font-bold mb-2">Silver</h3>
                  <p className="text-3xl font-bold text-primary mb-4">20%</p>
                  <p className="text-gray-600 text-sm">11 - 25 referral per bulan</p>
                </Card>
                <Card className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Gold</h3>
                  <p className="text-3xl font-bold text-primary mb-4">30%</p>
                  <p className="text-gray-600 text-sm">25+ referral per bulan</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Siap Memulai?</h2>
              <p className="text-lg opacity-90 mb-8">
                Bergabunglah dengan ratusan mitra afiliasi kami dan mulai dapatkan penghasilan hari ini
              </p>
              <Button variant="secondary" size="lg">
                Daftar Sebagai Afiliasi
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Affiliates;
