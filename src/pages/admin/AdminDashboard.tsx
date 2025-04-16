
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistrantsTable from "@/components/admin/RegistrantsTable";
import PurchasesTable from "@/components/admin/PurchasesTable";

const AdminDashboard = () => {
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
