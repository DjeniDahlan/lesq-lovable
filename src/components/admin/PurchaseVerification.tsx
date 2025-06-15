
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface PurchaseWithDetails {
  id: string;
  course_id: string;
  user_id: string;
  purchase_date: string;
  price: number;
  status: string;
  full_name?: string;
  course_title?: string;
}

const PurchaseVerification = () => {
  const [purchases, setPurchases] = useState<PurchaseWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      setIsLoading(true);
      
      // Fetch all purchases
      const { data: purchaseData, error: purchaseError } = await supabase
        .from('course_purchases')
        .select('*')
        .order('purchase_date', { ascending: false });

      if (purchaseError) {
        console.error("Error fetching purchases:", purchaseError);
        toast.error("Gagal memuat data pembelian");
        return;
      }

      // Get additional details for each purchase
      const purchasesWithDetails = await Promise.all(
        (purchaseData || []).map(async (purchase) => {
          // Get user profile
          const { data: profileData } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', purchase.user_id)
            .single();

          // Get course title
          const { data: courseData } = await supabase
            .from('courses')
            .select('title')
            .eq('id', purchase.course_id)
            .single();
              
          return {
            ...purchase,
            full_name: profileData?.full_name || "Tidak diketahui",
            course_title: courseData?.title || `Kursus ${purchase.course_id}`
          };
        })
      );

      setPurchases(purchasesWithDetails);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Terjadi kesalahan saat memuat data");
    } finally {
      setIsLoading(false);
    }
  };

  const updatePurchaseStatus = async (purchaseId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('course_purchases')
        .update({ status: newStatus })
        .eq('id', purchaseId);

      if (error) {
        console.error("Error updating purchase status:", error);
        toast.error("Gagal memperbarui status pembelian");
        return;
      }

      toast.success(`Status pembelian berhasil diubah menjadi ${newStatus === 'completed' ? 'Diverifikasi' : 'Ditolak'}`);
      fetchPurchases(); // Refresh data
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Terjadi kesalahan");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">Diverifikasi</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Menunggu Verifikasi</Badge>;
      case 'failed':
        return <Badge className="bg-red-500">Ditolak</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Verifikasi Pembelian</h2>
        <Button onClick={fetchPurchases} variant="outline">
          Refresh
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Nama Siswa</TableHead>
              <TableHead>Kursus</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Memuat data...
                </TableCell>
              </TableRow>
            ) : purchases.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Tidak ada data pembelian
                </TableCell>
              </TableRow>
            ) : (
              purchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell>{formatDate(purchase.purchase_date)}</TableCell>
                  <TableCell>{purchase.full_name}</TableCell>
                  <TableCell>{purchase.course_title}</TableCell>
                  <TableCell>{formatPrice(purchase.price)}</TableCell>
                  <TableCell>{getStatusBadge(purchase.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {purchase.status === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => updatePurchaseStatus(purchase.id, 'completed')}
                            className="bg-green-500 hover:bg-green-600"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Verifikasi
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => updatePurchaseStatus(purchase.id, 'failed')}
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Tolak
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        Detail
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PurchaseVerification;
