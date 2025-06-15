
import { useState } from 'react';
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { BANK_DETAILS } from './constants';

interface PaymentStepProps {
  courseTitle: string;
  price?: number;
  onClose: () => void;
  onPaymentConfirmation: () => Promise<void>;
  loading: boolean;
}

const PaymentStep = ({
  courseTitle,
  price,
  onClose,
  onPaymentConfirmation,
  loading,
}: PaymentStepProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopied(true);
    toast({
      title: "Nomor rekening disalin",
      description: "Nomor rekening telah disalin ke clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
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
              <span className="font-medium">{BANK_DETAILS.bankName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">No. Rekening:</span>
              <div className="flex items-center gap-2">
                <span className="font-medium font-mono">{BANK_DETAILS.accountNumber}</span>
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
              <span className="font-medium">{BANK_DETAILS.accountName}</span>
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
        <Button variant="outline" onClick={onClose}>
          Batal
        </Button>
        <Button onClick={onPaymentConfirmation} disabled={loading}>
          {loading ? "Memproses..." : "Saya Sudah Transfer"}
        </Button>
      </DialogFooter>
    </>
  );
};

export default PaymentStep;
