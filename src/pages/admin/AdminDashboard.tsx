
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, DollarSign, TrendingUp, ShoppingCart } from "lucide-react";
import StatsCards from "@/components/admin/StatsCards";
import UsersTable from "@/components/admin/UsersTable";
import CoursesTable from "@/components/admin/CoursesTable";
import PurchasesTable from "@/components/admin/PurchasesTable";
import RegistrantsTable from "@/components/admin/RegistrantsTable";
import PurchaseVerification from "@/components/admin/PurchaseVerification";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) {
          navigate('/login');
          return;
        }

        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();

        if (profile?.role !== 'admin') {
          navigate('/');
          return;
        }

        setIsAdmin(true);
      } catch (error) {
        console.error('Error checking admin access:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard Admin</h1>
          <p className="text-muted-foreground">Kelola platform pembelajaran Les-Q</p>
        </div>

        <StatsCards />

        <Tabs defaultValue="verification" className="mt-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="verification">Verifikasi Pembelian</TabsTrigger>
            <TabsTrigger value="users">Pengguna</TabsTrigger>
            <TabsTrigger value="courses">Kursus</TabsTrigger>
            <TabsTrigger value="purchases">Pembelian</TabsTrigger>
            <TabsTrigger value="registrants">Pendaftar Instruktur</TabsTrigger>
          </TabsList>

          <TabsContent value="verification" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Verifikasi Pembelian Kursus
                </CardTitle>
                <CardDescription>
                  Verifikasi pembayaran yang telah dilakukan oleh siswa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PurchaseVerification />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Manajemen Pengguna
                </CardTitle>
                <CardDescription>
                  Kelola akun pengguna terdaftar di platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UsersTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Manajemen Kursus
                </CardTitle>
                <CardDescription>
                  Kelola kursus yang tersedia di platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CoursesTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="purchases" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Riwayat Pembelian
                </CardTitle>
                <CardDescription>
                  Lihat semua transaksi pembelian kursus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PurchasesTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="registrants" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Pendaftar Instruktur
                </CardTitle>
                <CardDescription>
                  Kelola aplikasi pendaftaran instruktur baru
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RegistrantsTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
