
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { PurchaseDialogProps, PurchaseStep } from './purchase/types';
import ConfirmationStep from './purchase/ConfirmationStep';
import PaymentStep from './purchase/PaymentStep';
import TrialRegisteredStep from './purchase/TrialRegisteredStep';
import { createPurchaseRecord } from './purchase/purchaseUtils';

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
  const [step, setStep] = useState<PurchaseStep>('confirm');
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    if (isTrial) {
      setStep('trial-registered');
      setTimeout(() => {
        toast({
          title: "Pendaftaran berhasil!",
          description: `Anda telah berhasil mendaftar uji coba gratis untuk "${courseTitle}"`,
        });
      }, 500);
    } else {
      setStep('payment');
    }
  };

  const handlePaymentConfirmation = async () => {
    setLoading(true);
    
    const result = await createPurchaseRecord(courseId, price || 0);
    
    if (result.success) {
      toast({
        title: "Konfirmasi pembayaran diterima",
        description: "Tim kami akan memverifikasi pembayaran Anda dalam 1-2 jam kerja. Anda akan mendapat notifikasi setelah akses kursus diaktifkan.",
      });
      
      onClose();
      setTimeout(() => setStep('confirm'), 300);
      navigate('/account/purchases');
    } else {
      toast({
        title: "Error",
        description: result.error || "Gagal mencatat pembelian. Silakan coba lagi.",
        variant: "destructive"
      });
    }
    
    setLoading(false);
  };

  const handleTrialComplete = () => {
    onClose();
    setTimeout(() => setStep('confirm'), 300);
    navigate('/dashboard/student');
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStep('confirm'), 300);
  };

  const renderStep = () => {
    switch (step) {
      case 'confirm':
        return (
          <ConfirmationStep
            courseTitle={courseTitle}
            isTrial={isTrial}
            price={price}
            onClose={handleClose}
            onPurchase={handlePurchase}
          />
        );
      case 'payment':
        return (
          <PaymentStep
            courseTitle={courseTitle}
            price={price}
            onClose={handleClose}
            onPaymentConfirmation={handlePaymentConfirmation}
            loading={loading}
          />
        );
      case 'trial-registered':
        return (
          <TrialRegisteredStep
            courseTitle={courseTitle}
            onComplete={handleTrialComplete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {renderStep()}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseDialog;
