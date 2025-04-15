
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, Briefcase, MapPin } from "lucide-react";

const careers = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Jakarta",
    type: "Full Time",
    description: "Memimpin pengembangan fitur-fitur baru platform pembelajaran kami."
  },
  {
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Jakarta",
    type: "Full Time",
    description: "Mengembangkan dan mengelola strategi konten untuk platform kami."
  },
  {
    title: "Curriculum Developer",
    department: "Education",
    location: "Remote",
    type: "Full Time",
    description: "Merancang kurikulum pembelajaran yang efektif dan berkualitas."
  },
  {
    title: "Customer Success Specialist",
    department: "Support",
    location: "Bandung",
    type: "Full Time",
    description: "Membantu pengguna memaksimalkan pengalaman belajar mereka."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Karir di Les-Q</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Bergabunglah dengan tim kami untuk membangun masa depan pendidikan digital di Indonesia
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Mengapa Bergabung dengan Kami?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <BadgeCheck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lingkungan Inovatif</h3>
                <p className="text-gray-600">Bekerja dengan teknologi terkini dan tim yang berpengalaman.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengembangan Karir</h3>
                <p className="text-gray-600">Kesempatan belajar dan berkembang bersama perusahaan.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fleksibilitas</h3>
                <p className="text-gray-600">Kebijakan kerja hybrid dan remote yang mendukung work-life balance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Posisi yang Tersedia</h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {careers.map((job, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                      <p className="mt-2 text-gray-600">{job.description}</p>
                    </div>
                    <Button className="mt-4 md:mt-0">Lamar Sekarang</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
