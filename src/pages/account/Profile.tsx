
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import AccountLayout from "@/components/layout/AccountLayout";

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();
          setProfile(data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return (
    <AccountLayout>
      <div className="p-4">Memuat...</div>
    </AccountLayout>
  );

  if (!profile) return (
    <AccountLayout>
      <div className="p-4">Profil tidak ditemukan</div>
    </AccountLayout>
  );

  // Helper function to get role badge styling
  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case 'admin':
        return "bg-red-500 hover:bg-red-600";
      case 'instructor':
        return "bg-blue-500 hover:bg-blue-600";
      default:
        return "bg-green-500 hover:bg-green-600";
    }
  };

  // Helper function to get role display name
  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'admin':
        return "Administrator";
      case 'instructor':
        return "Instruktur";
      default:
        return "Siswa";
    }
  };

  return (
    <AccountLayout>
      <Card>
        <CardHeader>
          <CardTitle>Profil Saya</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>{profile.full_name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{profile.full_name}</h2>
              <p className="text-muted-foreground">{profile.email}</p>
              <div className="mt-2">
                <Badge className={getRoleBadgeStyle(profile.role)}>
                  {getRoleDisplayName(profile.role)}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="border-t pt-4">
              <h3 className="font-medium text-lg mb-2">Informasi Akun</h3>
              <div className="grid gap-2">
                <div>
                  <Label className="text-muted-foreground">ID Akun</Label>
                  <p className="font-mono text-sm">{profile.id}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Tanggal Terdaftar</Label>
                  <p>{new Date(profile.created_at).toLocaleDateString('id-ID')}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AccountLayout>
  );
};

export default Profile;
