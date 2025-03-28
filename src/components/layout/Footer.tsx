
import { Link } from 'react-router-dom';
import { BookOpen, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-poppins text-xl font-bold">SkillScape</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Platform pembelajaran online terbaik untuk mengembangkan keterampilan Anda dan meningkatkan karir
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm">Tentang Kami</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary text-sm">Karir</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-primary text-sm">Media</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary text-sm">Blog</Link></li>
              <li><Link to="/affiliates" className="text-gray-600 hover:text-primary text-sm">Afiliasi</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Pembelajaran</h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-gray-600 hover:text-primary text-sm">Katalog Kursus</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary text-sm">Harga Berlangganan</Link></li>
              <li><Link to="/become-instructor" className="text-gray-600 hover:text-primary text-sm">Jadi Instruktur</Link></li>
              <li><Link to="/for-business" className="text-gray-600 hover:text-primary text-sm">Untuk Bisnis</Link></li>
              <li><Link to="/for-government" className="text-gray-600 hover:text-primary text-sm">Untuk Pemerintah</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Bantuan</h3>
            <ul className="space-y-3">
              <li><Link to="/support" className="text-gray-600 hover:text-primary text-sm">Pusat Bantuan</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary text-sm">Hubungi Kami</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary text-sm">Kebijakan Privasi</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary text-sm">Syarat & Ketentuan</Link></li>
              <li><Link to="/accessibility" className="text-gray-600 hover:text-primary text-sm">Aksesibilitas</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SkillScape. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
