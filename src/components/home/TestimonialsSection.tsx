
import { Users } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengarkan pengalaman siswa dan orang tua yang telah merasakan manfaat belajar bersama kami
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Sarah Indira</h4>
                <p className="text-sm text-muted-foreground">Siswa SMA, Jakarta</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Materi matematika disini sangat mudah dipahami. Nilai ujian saya meningkat drastis setelah mengikuti kursus ini. Terima kasih!"
            </p>
            <div className="flex text-yellow-400 mt-4">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Budi Santoso</h4>
                <p className="text-sm text-muted-foreground">Orang Tua Siswa</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Anak saya sangat senang belajar disini. Guru-gurunya sabar dan metode mengajarnya mudah dimengerti. Highly recommended!"
            </p>
            <div className="flex text-yellow-400 mt-4">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Andi Pratama</h4>
                <p className="text-sm text-muted-foreground">Lulusan SNBT 2024</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Berkat kursus persiapan SNBT disini, saya berhasil lolos ke PTN impian. Soal-soal latihannya sangat mirip dengan ujian asli."
            </p>
            <div className="flex text-yellow-400 mt-4">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
