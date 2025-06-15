
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import AccountLayout from "@/components/layout/AccountLayout";

const Purchases = () => {
  const [purchases, setPurchases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const { data } = await supabase
            .from('course_purchases')
            .select('*')
            .eq('user_id', session.user.id)
            .order('purchase_date', { ascending: false });
          setPurchases(data || []);
        }
      } catch (error) {
        console.error("Error fetching purchases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">Selesai</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Menunggu</Badge>;
      case 'failed':
        return <Badge className="bg-red-500">Gagal</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <AccountLayout>
        <div className="p-4">Memuat riwayat pembelian...</div>
      </AccountLayout>
    );
  }

  return (
    <AccountLayout>
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Pembelian</CardTitle>
        </CardHeader>
        <CardContent>
          {purchases.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>ID Kursus</TableHead>
                  <TableHead>Harga</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchases.map((purchase) => (
                  <TableRow key={purchase.id}>
                    <TableCell>
                      {new Date(purchase.purchase_date).toLocaleDateString('id-ID')}
                    </TableCell>
                    <TableCell className="font-mono text-sm">{purchase.course_id}</TableCell>
                    <TableCell>Rp {purchase.price.toLocaleString('id-ID')}</TableCell>
                    <TableCell>{getStatusBadge(purchase.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-lg font-medium">Belum ada pembelian</h3>
                <p className="text-sm">Anda belum membeli kursus apapun</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </AccountLayout>
  );
};

export default Purchases;
