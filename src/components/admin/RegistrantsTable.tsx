
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

interface Registrant {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
  role: string;
}

const RegistrantsTable = () => {
  const [registrants, setRegistrants] = useState<Registrant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRegistrants() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error("Error fetching registrants:", error);
          toast.error("Gagal memuat data pendaftar");
          return;
        }

        setRegistrants(data || []);
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Terjadi kesalahan saat memuat data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRegistrants();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Tanggal Pendaftaran</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8">
                Memuat data...
              </TableCell>
            </TableRow>
          ) : registrants.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8">
                Tidak ada data pendaftar
              </TableCell>
            </TableRow>
          ) : (
            registrants.map((registrant) => (
              <TableRow key={registrant.id}>
                <TableCell>{registrant.full_name}</TableCell>
                <TableCell>{registrant.email}</TableCell>
                <TableCell>{formatDate(registrant.created_at)}</TableCell>
                <TableCell>{registrant.role}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RegistrantsTable;
