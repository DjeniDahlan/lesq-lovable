
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Play, BookOpen, Heart, Share2, Download, Award 
} from 'lucide-react';

interface CourseSidebarProps {
  price: number;
  onPurchaseClick: () => void;
}

const CourseSidebar = ({ price, onPurchaseClick }: CourseSidebarProps) => {
  return (
    <div className="bg-white rounded-lg border p-6 sticky top-6">
      <div className="mb-6">
        <div className="text-3xl font-bold text-primary">
          {price === 0 ? "Gratis" : `Rp ${price.toLocaleString()}`}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <Button 
          className="w-full"
          onClick={onPurchaseClick}
        >
          {price === 0 ? "Daftar Gratis" : "Beli Sekarang"}
        </Button>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Heart className="h-4 w-4 mr-2" />
            Simpan
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Share2 className="h-4 w-4 mr-2" />
            Bagikan
          </Button>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-4">
        <h3 className="font-medium">Termasuk dalam kursus ini:</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Play className="h-4 w-4 text-muted-foreground" />
            <span>Video pembelajaran</span>
          </li>
          <li className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>Materi pembelajaran</span>
          </li>
          <li className="flex items-center gap-2">
            <Download className="h-4 w-4 text-muted-foreground" />
            <span>Sumber daya unduhan</span>
          </li>
          <li className="flex items-center gap-2">
            <Award className="h-4 w-4 text-muted-foreground" />
            <span>Sertifikat penyelesaian</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseSidebar;
