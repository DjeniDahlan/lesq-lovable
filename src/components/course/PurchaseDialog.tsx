
import { useState } from 'react';
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
import { Copy, Check } from 'lucide-react';

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
  const [step, setStep] = useState<'confirm' | 'payment' | 'trial-registered'>('confirm');
  const [copied, setCopied] = useState(false);

  // Bank account details for payment
  const bankDetails = {
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountName: "Les-Q Education",
  };

  const handlePurchase = () => {
    if (isTrial) {
      // For trial, simulate immediate registration
      setStep('trial-registered');
      setTimeout(() => {
        toast({
          title: "Pendaftaran berhasil!",
          description: `Anda telah berhasil mendaftar uji coba gratis untuk "${courseTitle}"`,
        });
      }, 500);
    } else {
      // For paid course, show payment instructions
      setStep('payment');
    }
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    toast({
      title: "Nomor rekening disalin",
      description: "Nomor rekening telah disalin ke clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaymentConfirmation = () => {
    toast({
      title: "Konfirmasi pembayaran diterima",
      description: "Tim kami akan memverifikasi pembayaran Anda dalam 1-2 jam kerja. Anda akan mendapat notifikasi setelah akses kursus diaktifkan.",
    });
    onClose();
    // Reset step for next time
    setTimeout(() => setStep('confirm'), 300);
  };

  const handleClose = () => {
    onClose();
    // Reset step for next time
    setTimeout(() => setStep('confirm'), 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {step === 'confirm' && (
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
              <Button variant="outline" onClick={handleClose}>
                Batal
              </Button>
              <Button onClick={handlePurchase}>
                {isTrial ? "Mulai Uji Coba Gratis" : "Lanjutkan ke Pembayaran"}
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 'payment' && (
          <>
            <DialogHeader>
              <DialogTitle>Instruksi Pembayaran</DialogTitle>
              <DialogDescription>
                Silakan lakukan transfer sesuai dengan detail di bawah ini:
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Detail Pembayaran:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kursus:</span>
                    <span className="font-medium">{courseTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga:</span>
                    <span className="font-medium text-lg">Rp {price?.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Detail Rekening Transfer:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bank:</span>
                    <span className="font-medium">{bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">No. Rekening:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium font-mono">{bankDetails.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={copyAccountNumber}
                      >
                        {copied ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Atas Nama:</span>
                    <span className="font-medium">{bankDetails.accountName}</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-sm mb-2">⚠️ Penting:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Transfer dengan nominal yang tepat</li>
                  <li>• Simpan bukti transfer</li>
                  <li>• Konfirmasi pembayaran akan diverifikasi dalam 1-2 jam kerja</li>
                  <li>• Akses kursus akan diaktifkan setelah pembayaran terverifikasi</li>
                </ul>
              </div>
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleClose}>
                Batal
              </Button>
              <Button onClick={handlePaymentConfirmation}>
                Saya Sudah Transfer
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 'trial-registered' && (
          <>
            <DialogHeader>
              <DialogTitle>✅ Uji Coba Berhasil Didaftarkan!</DialogTitle>
              <DialogDescription>
                Selamat! Anda telah berhasil mendaftar uji coba gratis untuk kursus "{courseTitle}".
              </DialogDescription>
            </DialogHeader>

            <div className="my-6 space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-sm mb-2">🎉 Yang Anda Dapatkan:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Akses penuh ke semua materi kursus selama 7 hari</li>
                  <li>• Video pembelajaran dan latihan soal</li>
                  <li>• Forum diskusi dengan pengajar</li>
                  <li>• Sertifikat jika menyelesaikan kursus</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  Periode uji coba akan berakhir dalam 7 hari. Jika Anda puas dengan kursus ini, 
                  Anda dapat melakukan upgrade ke akses penuh kapan saja.
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button onClick={handleClose} className="w-full">
                Mulai Belajar Sekarang
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseDialog;
