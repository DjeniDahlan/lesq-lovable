
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Kami berkomitmen untuk melindungi privasi Anda
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-lg">
              <h2>Informasi yang Kami Kumpulkan</h2>
              <p>
                Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami ketika Anda:
              </p>
              <ul>
                <li>Membuat akun</li>
                <li>Mendaftar kursus</li>
                <li>Berinteraksi dengan konten</li>
                <li>Menghubungi layanan pelanggan</li>
              </ul>

              <h2>Bagaimana Kami Menggunakan Informasi</h2>
              <p>
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul>
                <li>Menyediakan layanan pembelajaran</li>
                <li>Meningkatkan pengalaman pengguna</li>
                <li>Berkomunikasi dengan Anda</li>
                <li>Memproses pembayaran</li>
              </ul>

              <h2>Perlindungan Data</h2>
              <p>
                Kami mengimplementasikan langkah-langkah keamanan yang sesuai untuk melindungi data Anda dari akses yang tidak sah.
              </p>

              <h2>Perubahan Kebijakan</h2>
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diumumkan melalui platform kami.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
