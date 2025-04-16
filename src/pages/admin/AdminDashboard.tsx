
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistrantsTable from "@/components/admin/RegistrantsTable";
import PurchasesTable from "@/components/admin/PurchasesTable";
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
              Kelola pendaftar dan pembelian kursus
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <Tabs defaultValue="registrants" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="registrants">Pendaftar</TabsTrigger>
                <TabsTrigger value="purchases">Pembelian Kursus</TabsTrigger>
              </TabsList>
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
