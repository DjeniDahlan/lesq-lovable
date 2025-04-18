
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ExpertiseSelect } from '@/components/instructor/ExpertiseSelect';
import { FileUpload } from '@/components/instructor/FileUpload';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function InstructorRegister() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    expertise: [] as string[],
    education: '',
    experience: '',
  });
  
  const [files, setFiles] = useState<{
    certificate?: File;
    portfolio?: File;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Anda harus login terlebih dahulu",
          variant: "destructive",
        });
        navigate('/login');
        return;
      }

      // Upload files first
      const uploadFile = async (file: File, path: string) => {
        const { data, error } = await supabase.storage
          .from('instructor-files')
          .upload(`${session.user.id}/${path}`, file);
        
        if (error) throw error;
        return data.path;
      };

      // Create instructor application
      const { data: application, error: applicationError } = await supabase
        .from('instructor_applications')
        .insert({
          user_id: session.user.id,
          full_name: formData.fullName,
          email: formData.email,
          expertise: formData.expertise,
          education: formData.education,
          experience: formData.experience,
        })
        .select()
        .single();

      if (applicationError) throw applicationError;

      // Upload documents
      const documents = [];
      if (files.certificate) {
        const certificatePath = await uploadFile(files.certificate, `certificates/${files.certificate.name}`);
        documents.push({
          application_id: application.id,
          type: 'certificate',
          title: 'Sertifikat Keahlian',
          file_url: certificatePath,
        });
      }

      if (files.portfolio) {
        const portfolioPath = await uploadFile(files.portfolio, `portfolio/${files.portfolio.name}`);
        documents.push({
          application_id: application.id,
          type: 'portfolio',
          title: 'Portfolio',
          file_url: portfolioPath,
        });
      }

      if (documents.length > 0) {
        const { error: documentsError } = await supabase
          .from('instructor_documents')
          .insert(documents);

        if (documentsError) throw documentsError;
      }

      toast({
        title: "Pendaftaran Berhasil",
        description: "Kami akan meninjau aplikasi Anda dan menghubungi Anda segera.",
      });

      navigate('/');

    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast({
        title: "Pendaftaran Gagal",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container max-w-3xl">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                Daftar sebagai Instruktur
              </CardTitle>
              <CardDescription className="text-center">
                Lengkapi formulir berikut untuk menjadi instruktur di Les-Q
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Nama Lengkap</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label>Bidang Keahlian (Pilih maksimal 3)</Label>
                    <ExpertiseSelect
                      selected={formData.expertise}
                      onChange={(expertise) => setFormData({ ...formData, expertise })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="education">Pendidikan</Label>
                    <Textarea
                      id="education"
                      placeholder="Jelaskan latar belakang pendidikan Anda"
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Pengalaman Mengajar</Label>
                    <Textarea
                      id="experience"
                      placeholder="Jelaskan pengalaman mengajar Anda"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label>Sertifikat Keahlian</Label>
                    <FileUpload
                      label="Upload sertifikat keahlian (PDF, DOC, DOCX)"
                      accept=".pdf,.doc,.docx"
                      onFileSelect={(file) => setFiles({ ...files, certificate: file })}
                      selectedFile={files.certificate}
                      onRemove={() => setFiles({ ...files, certificate: undefined })}
                    />
                  </div>

                  <div>
                    <Label>Portfolio</Label>
                    <FileUpload
                      label="Upload portfolio (PDF)"
                      accept=".pdf"
                      onFileSelect={(file) => setFiles({ ...files, portfolio: file })}
                      selectedFile={files.portfolio}
                      onRemove={() => setFiles({ ...files, portfolio: undefined })}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Memproses..." : "Kirim Pendaftaran"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
