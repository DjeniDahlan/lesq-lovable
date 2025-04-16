
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Basic",
    price: "Gratis",
    description: "Akses ke kursus dasar",
    features: [
      "Akses ke kursus gratis",
      "Forum diskusi komunitas",
      "Materi pembelajaran dasar",
      "Sertifikat kursus digital",
    ],
    buttonText: "Mulai Belajar",
    popular: false
  },
  {
    name: "Pro",
    price: "Rp 199.000",
    period: "/bulan",
    description: "Untuk pembelajaran profesional",
    features: [
      "Semua fitur Basic",
      "Akses tak terbatas ke semua kursus",
      "Proyek praktik langsung",
      "Konsultasi dengan instruktur",
      "Sertifikat terakreditasi",
      "Materi khusus industri"
    ],
    buttonText: "Pilih Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Solusi untuk perusahaan",
    features: [
      "Semua fitur Pro",
      "Portal pembelajaran kustom",
      "Analisis performa tim",
      "Integrasi SSO",
      "Pelatihan khusus perusahaan",
      "Dukungan prioritas 24/7"
    ],
    buttonText: "Hubungi Kami",
    popular: false
  }
];

const Pricing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlanSelection = (planName: string) => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      
      if (planName === "Basic") {
        toast({
          title: "Paket Basic dipilih",
          description: "Anda telah berhasil memilih paket Basic. Selamat belajar!",
        });
        navigate("/courses");
      } else if (planName === "Pro") {
        toast({
          title: "Paket Pro dipilih",
          description: "Anda telah berhasil berlangganan paket Pro. Nikmati akses penuh ke semua kursus!",
        });
        navigate("/dashboard/student");
      } else if (planName === "Enterprise") {
        toast({
          title: "Permintaan Enterprise dikirim",
          description: "Tim kami akan segera menghubungi Anda untuk mendiskusikan solusi khusus perusahaan Anda.",
        });
        navigate("/contact");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Harga Berlangganan
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan pembelajaran Anda
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-lg border p-8 ${
                    plan.popular ? 'border-primary ring-2 ring-primary ring-offset-2' : ''
                  }`}
                >
                  {plan.popular && (
                    <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
                      Paling Populer
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="ml-1 text-gray-500">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-4 text-gray-600">{plan.description}</p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 w-full"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handlePlanSelection(plan.name)}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Memproses..." : plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
