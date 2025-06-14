
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

const jobs = [
  {
    title: "Guru Matematika SMA",
    department: "Pendidikan",
    location: "Jakarta",
    type: "Full-time",
    description: "Mencari guru matematika berpengalaman untuk mengajar siswa SMA secara online."
  },
  {
    title: "Content Creator",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    description: "Membuat konten edukatif dan engaging untuk media sosial dan platform pembelajaran."
  },
  {
    title: "Software Engineer",
    department: "Technology",
    location: "Bandung",
    type: "Full-time",
    description: "Mengembangkan dan memelihara platform pembelajaran online Les-Q."
  },
  {
    title: "Customer Success Manager",
    department: "Customer Service",
    location: "Surabaya",
    type: "Full-time",
    description: "Membantu siswa dan orangtua untuk mendapatkan pengalaman terbaik di Les-Q."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Bergabunglah dengan Tim Kami
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Wujudkan misi mulia mencerdaskan bangsa bersama Les-Q
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6">Lowongan Kerja Terbuka</h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto">
                Kami selalu mencari talenta terbaik untuk bergabung dalam misi memajukan pendidikan Indonesia
              </p>
            </div>

            <div className="grid gap-6">
              {jobs.map((job, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button>Lamar Sekarang</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Budaya Kerja Kami</h2>
              <p className="text-gray-600 mb-8">
                Di Les-Q, kami menciptakan lingkungan kerja yang mendukung pertumbuhan, 
                inovasi, dan kolaborasi. Setiap anggota tim memiliki kesempatan untuk 
                berkembang dan memberikan dampak positif pada pendidikan Indonesia.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                  <p className="text-sm text-gray-600">Fleksibilitas waktu dan dukungan kesejahteraan karyawan</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pembelajaran Berkelanjutan</h3>
                  <p className="text-sm text-gray-600">Program pengembangan dan pelatihan rutin</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tim yang Solid</h3>
                  <p className="text-sm text-gray-600">Budaya saling mendukung dan kolaboratif</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
