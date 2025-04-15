
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoneCall, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Hubungi Kami
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Tim kami siap membantu Anda. Pilih cara yang paling nyaman untuk menghubungi kami.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <PhoneCall className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-gray-600 mb-4">Senin - Jumat, 09:00 - 17:00 WIB</p>
                <a href="tel:+6282112345678" className="text-primary hover:underline">
                  +62 821 1234 5678
                </a>
              </Card>

              <Card className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Respon dalam 24 jam</p>
                <a href="mailto:support@les-q.com" className="text-primary hover:underline">
                  support@les-q.com
                </a>
              </Card>

              <Card className="p-6 text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Respon instan</p>
                <Button>Mulai Chat</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
