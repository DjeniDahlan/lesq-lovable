
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

interface Purchase {
  id: string;
  course_id: string;
  user_id: string;
  purchase_date: string;
  price: number;
  status: string;
  // Joined data
  full_name?: string;
}

const PurchasesTable = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPurchases() {
      try {
        setIsLoading(true);
        
        // First fetch all purchases
        const { data: purchaseData, error: purchaseError } = await supabase
          .from('course_purchases')
          .select('*')
          .order('purchase_date', { ascending: false });

        if (purchaseError) {
          console.error("Error fetching purchases:", purchaseError);
          toast.error("Gagal memuat data pembelian kursus");
          return;
        }

        // Then for each purchase, get the user profile
        const purchasesWithUserInfo = await Promise.all(
          (purchaseData || []).map(async (purchase) => {
            const { data: profileData } = await supabase
              .from('profiles')
              .select('full_name')
              .eq('id', purchase.user_id)
              .single();
              
            return {
              ...purchase,
              full_name: profileData?.full_name || "Tidak diketahui"
            };
          })
        );

        setPurchases(purchasesWithUserInfo || []);
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Terjadi kesalahan saat memuat data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPurchases();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  // Mock course names mapping (in a real app, you'd fetch this from a courses table)
  const getCourseNameById = (courseId: string) => {
    const courseMap: Record<string, string> = {
      '1': 'Belajar React JS',
      '2': 'Node.js untuk Pemula',
      '3': 'Pemrograman Python',
      '4': 'Web Design dengan Figma',
      '5': 'Digital Marketing',
      'default': `Kursus ${courseId}`
    };
    
    return courseMap[courseId] || courseMap.default;
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Kursus</TableHead>
            <TableHead>Nama Siswa</TableHead>
            <TableHead>Tanggal Pembelian</TableHead>
            <TableHead>Harga</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8">
                Memuat data...
              </TableCell>
            </TableRow>
          ) : purchases.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8">
                Tidak ada data pembelian kursus
              </TableCell>
            </TableRow>
          ) : (
            purchases.map((purchase) => (
              <TableRow key={purchase.id}>
                <TableCell>{getCourseNameById(purchase.course_id)}</TableCell>
                <TableCell>{purchase.full_name}</TableCell>
                <TableCell>{formatDate(purchase.purchase_date)}</TableCell>
                <TableCell>{formatPrice(purchase.price)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PurchasesTable;
