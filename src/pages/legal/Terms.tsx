
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Panduan penggunaan platform Les-Q
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-lg">
              <h2>1. Pendaftaran Akun</h2>
              <p>
                Untuk menggunakan layanan Les-Q, Anda harus:
              </p>
              <ul>
                <li>Berusia minimal 13 tahun</li>
                <li>Memberikan informasi yang akurat</li>
                <li>Menjaga kerahasiaan password</li>
                <li>Bertanggung jawab atas aktivitas akun</li>
              </ul>

              <h2>2. Lisensi Konten</h2>
              <p>
                Semua materi pembelajaran dilindungi hak cipta. Pengguna tidak diperbolehkan:
              </p>
              <ul>
                <li>Menyalin atau mendistribusikan konten</li>
                <li>Memodifikasi materi tanpa izin</li>
                <li>Menggunakan konten untuk tujuan komersial</li>
              </ul>

              <h2>3. Pembayaran</h2>
              <p>
                Dengan melakukan pembayaran, Anda setuju untuk:
              </p>
              <ul>
                <li>Memberikan informasi pembayaran yang valid</li>
                <li>Membayar biaya yang tercantum</li>
                <li>Mematuhi kebijakan pengembalian dana</li>
              </ul>

              <h2>4. Pembatalan</h2>
              <p>
                Les-Q berhak untuk membatalkan akun yang melanggar ketentuan penggunaan tanpa pemberitahuan sebelumnya.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
