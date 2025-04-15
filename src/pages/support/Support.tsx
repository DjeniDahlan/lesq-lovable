
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, HelpCircle, Book, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const helpTopics = [
  {
    title: "Panduan Memulai",
    description: "Pelajari cara memulai pembelajaran di Les-Q",
    icon: Book,
    link: "/support/getting-started"
  },
  {
    title: "Akun & Pembayaran",
    description: "Informasi seputar akun dan pembayaran",
    icon: FileText,
    link: "/support/account"
  },
  {
    title: "FAQ",
    description: "Pertanyaan yang sering ditanyakan",
    icon: HelpCircle,
    link: "/support/faq"
  },
  {
    title: "Hubungi Tim Support",
    description: "Dapatkan bantuan langsung dari tim kami",
    icon: MessageCircle,
    link: "/contact"
  }
];

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Pusat Bantuan
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Temukan jawaban untuk pertanyaan Anda seputar Les-Q
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari bantuan..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {helpTopics.map((topic) => (
                <Link to={topic.link} key={topic.title}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <topic.icon className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{topic.title}</h3>
                        <p className="text-gray-600">{topic.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
