
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { 
  MousePointer, 
  Keyboard, 
  Volume2, 
  Type 
} from "lucide-react";

const features = [
  {
    icon: MousePointer,
    title: "Navigasi Keyboard",
    description: "Semua fitur dapat diakses menggunakan keyboard"
  },
  {
    icon: Keyboard,
    title: "Pintasan Keyboard",
    description: "Pintasan keyboard untuk fungsi umum"
  },
  {
    icon: Volume2,
    title: "Dukungan Pembaca Layar",
    description: "Kompatibel dengan pembaca layar populer"
  },
  {
    icon: Type,
    title: "Teks yang Dapat Disesuaikan",
    description: "Ukuran teks dapat diubah sesuai kebutuhan"
  }
];

const Accessibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Aksesibilitas
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Komitmen kami untuk membuat pembelajaran online dapat diakses oleh semua orang
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {features.map((feature) => (
                <Card className="p-6" key={feature.title}>
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Standar Aksesibilitas</h2>
              <p>
                Les-Q berkomitmen untuk memenuhi standar WCAG 2.1 level AA. Kami secara teratur menguji platform kami untuk memastikan kepatuhan terhadap pedoman ini.
              </p>

              <h2>Dukungan Aksesibilitas</h2>
              <p>
                Jika Anda mengalami kesulitan mengakses konten atau menggunakan fitur di Les-Q, silakan hubungi tim dukungan kami di:
              </p>
              <ul>
                <li>Email: accessibility@les-q.com</li>
                <li>Telepon: +62 821 1234 5678</li>
              </ul>

              <h2>Umpan Balik</h2>
              <p>
                Kami selalu berusaha untuk meningkatkan aksesibilitas platform kami. Jika Anda memiliki saran atau menemukan masalah aksesibilitas, silakan beri tahu kami.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;
