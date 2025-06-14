
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const InstructorCTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bergabung Sebagai Pengajar</h2>
          <p className="text-lg opacity-90 mb-8">
            Bagikan ilmu dan pengalaman mengajar Anda. Bantu siswa mencapai prestasi terbaik mereka.
          </p>
          <Link to="/become-instructor">
            <Button variant="secondary" size="lg">
              Daftar Sebagai Pengajar
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstructorCTASection;
