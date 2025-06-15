
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmationStepProps {
  courseTitle: string;
  isTrial: boolean;
  price?: number;
  onClose: () => void;
  onPurchase: () => void;
}

const ConfirmationStep = ({
  courseTitle,
  isTrial,
  price,
  onClose,
  onPurchase,
}: ConfirmationStepProps) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {isTrial ? "Mulai Uji Coba Gratis" : "Konfirmasi Pembelian"}
        </DialogTitle>
        <DialogDescription>
          {isTrial
            ? `Anda akan memulai uji coba gratis 7 hari untuk kursus "${courseTitle}". Tidak ada biaya yang dikenakan selama periode uji coba.`
            : `Anda akan membeli kursus "${courseTitle}" dengan harga Rp ${price?.toLocaleString()}. Setelah pembayaran berhasil diverifikasi, Anda akan mendapatkan akses penuh ke kursus ini.`}
        </DialogDescription>
      </DialogHeader>

      <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-4">
        <Button variant="outline" onClick={onClose}>
          Batal
        </Button>
        <Button onClick={onPurchase}>
          {isTrial ? "Mulai Uji Coba Gratis" : "Lanjutkan ke Pembayaran"}
        </Button>
      </DialogFooter>
    </>
  );
};

export default ConfirmationStep;
