
export interface PurchaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  courseId: string;
  isTrial: boolean;
  price?: number;
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  accountName: string;
}

export type PurchaseStep = 'confirm' | 'payment' | 'trial-registered';
