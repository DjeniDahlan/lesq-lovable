
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistrantsTable from "@/components/admin/RegistrantsTable";
import PurchasesTable from "@/components/admin/PurchasesTable";
import CoursesTable from "@/components/admin/CoursesTable";
import UsersTable from "@/components/admin/UsersTable";
import StatsCards from "@/components/admin/StatsCards";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkAdmin() {
      try {
        // First check if user is logged in
        const { data: sessionData } = await supabase.auth.getSession();
        
        if (!sessionData.session) {
          toast.error("Anda harus login terlebih dahulu");
          navigate("/login");
          return;
        }
        
        // Then check if user is an admin
        const { data: userData, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', sessionData.session.user.id)
          .single();
          
        if (error || !userData) {
          console.error("Error checking admin status:", error);
          toast.error("Tidak dapat memverifikasi status admin");
          navigate("/");
          return;
        }
        
        if (userData.role !== 'admin') {
          toast.error("Anda tidak memiliki akses ke halaman admin");
          navigate("/");
          return;
        }
        
        setIsAdmin(true);
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Terjadi kesalahan");
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    }
    
    checkAdmin();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Memuat...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Panel Admin
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Kelola kursus, pengguna, dan lihat statistik platform
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-5">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="courses">Kursus</TabsTrigger>
                <TabsTrigger value="users">Pengguna</TabsTrigger>
                <TabsTrigger value="registrants">Pendaftar</TabsTrigger>
                <TabsTrigger value="purchases">Pembelian</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard" className="space-y-6">
                <StatsCards />
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-4">Ringkasan Platform</h3>
                    <p className="text-muted-foreground">
                      Dashboard ini memberikan gambaran menyeluruh tentang aktivitas platform pembelajaran online Anda.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-4">Fitur Admin</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Kelola kursus dan konten pembelajaran</li>
                      <li>• Manajemen pengguna dan role</li>
                      <li>• Pantau pendaftaran dan pembelian</li>
                      <li>• Analisis statistik platform</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="courses">
                <CoursesTable />
              </TabsContent>
              
              <TabsContent value="users">
                <UsersTable />
              </TabsContent>
              
              <TabsContent value="registrants">
                <RegistrantsTable />
              </TabsContent>
              
              <TabsContent value="purchases">
                <PurchasesTable />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
