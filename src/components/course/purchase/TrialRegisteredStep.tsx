
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TrialRegisteredStepProps {
  courseTitle: string;
  onComplete: () => void;
}

const TrialRegisteredStep = ({
  courseTitle,
  onComplete,
}: TrialRegisteredStepProps) => {
  return (
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
        <Button onClick={onComplete} className="w-full">
          Mulai Belajar Sekarang
        </Button>
      </DialogFooter>
    </>
  );
};

export default TrialRegisteredStep;
