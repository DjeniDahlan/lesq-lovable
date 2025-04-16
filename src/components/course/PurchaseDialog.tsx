
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PurchaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  courseId: string;
  isTrial: boolean;
  price?: number;
}

const PurchaseDialog = ({
  isOpen,
  onClose,
  courseTitle,
  courseId,
  isTrial,
  price,
}: PurchaseDialogProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      
      if (isTrial) {
        toast({
          title: "Pendaftaran berhasil!",
          description: `Anda telah berhasil mendaftar uji coba gratis untuk "${courseTitle}"`,
        });
        navigate(`/dashboard/student?course=${courseId}`);
      } else {
        toast({
          title: "Pembelian berhasil!",
          description: `Anda telah berhasil membeli kursus "${courseTitle}"`,
        });
        navigate(`/dashboard/student?course=${courseId}`);
      }
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isTrial ? "Mulai Uji Coba Gratis" : "Konfirmasi Pembelian"}
          </DialogTitle>
          <DialogDescription>
            {isTrial
              ? `Anda akan memulai uji coba gratis 7 hari untuk kursus "${courseTitle}". Tidak ada biaya yang dikenakan selama periode uji coba.`
              : `Anda akan membeli kursus "${courseTitle}" dengan harga Rp ${price?.toLocaleString()}. Setelah pembayaran berhasil, Anda akan mendapatkan akses penuh ke kursus ini.`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-4">
          <Button variant="outline" onClick={onClose} disabled={isProcessing}>
            Batal
          </Button>
          <Button onClick={handlePurchase} disabled={isProcessing}>
            {isProcessing 
              ? "Memproses..." 
              : isTrial 
                ? "Mulai Uji Coba Gratis" 
                : "Konfirmasi Pembayaran"
            }
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseDialog;
