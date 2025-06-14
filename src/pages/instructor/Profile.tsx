
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Save, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const InstructorProfile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    full_name: '',
    bio: '',
    expertise: '',
    education: '',
    experience: ''
  });

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
          setEditForm({
            full_name: data?.full_name || '',
            bio: data?.bio || '',
            expertise: data?.expertise || '',
            education: data?.education || '',
            experience: data?.experience || ''
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { error } = await supabase
          .from('profiles')
          .update(editForm)
          .eq('id', session.user.id);
        
        if (!error) {
          setProfile({ ...profile, ...editForm });
          setIsEditing(false);
        }
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <div className="p-4">Memuat...</div>;
  if (!profile) return <div className="p-4">Profil tidak ditemukan</div>;

  return (
    <div className="container max-w-4xl py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Profil Pengajar</h1>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit Profil
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Simpan
            </Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              <X className="h-4 w-4 mr-2" />
              Batal
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informasi Dasar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>{profile.full_name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                {!isEditing ? (
                  <>
                    <h2 className="text-2xl font-bold">{profile.full_name}</h2>
                    <p className="text-muted-foreground">{profile.email}</p>
                    <div className="mt-2">
                      <Badge className="bg-blue-500 hover:bg-blue-600">
                        Instruktur
                      </Badge>
                    </div>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Input
                      value={editForm.full_name}
                      onChange={(e) => setEditForm({ ...editForm, full_name: e.target.value })}
                      placeholder="Nama lengkap"
                    />
                    <p className="text-muted-foreground">{profile.email}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid gap-6">
              <div>
                <Label className="text-sm font-medium">Bio</Label>
                {!isEditing ? (
                  <p className="mt-1">{profile.bio || 'Belum ada bio'}</p>
                ) : (
                  <Textarea
                    className="mt-1"
                    value={editForm.bio}
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    placeholder="Ceritakan tentang diri Anda sebagai pengajar..."
                    rows={3}
                  />
                )}
              </div>

              <div>
                <Label className="text-sm font-medium">Keahlian</Label>
                {!isEditing ? (
                  <p className="mt-1">{profile.expertise || 'Belum ada keahlian'}</p>
                ) : (
                  <Input
                    className="mt-1"
                    value={editForm.expertise}
                    onChange={(e) => setEditForm({ ...editForm, expertise: e.target.value })}
                    placeholder="React, Node.js, Python, dll"
                  />
                )}
              </div>

              <div>
                <Label className="text-sm font-medium">Pendidikan</Label>
                {!isEditing ? (
                  <p className="mt-1">{profile.education || 'Belum ada pendidikan'}</p>
                ) : (
                  <Textarea
                    className="mt-1"
                    value={editForm.education}
                    onChange={(e) => setEditForm({ ...editForm, education: e.target.value })}
                    placeholder="Riwayat pendidikan formal..."
                    rows={2}
                  />
                )}
              </div>

              <div>
                <Label className="text-sm font-medium">Pengalaman</Label>
                {!isEditing ? (
                  <p className="mt-1">{profile.experience || 'Belum ada pengalaman'}</p>
                ) : (
                  <Textarea
                    className="mt-1"
                    value={editForm.experience}
                    onChange={(e) => setEditForm({ ...editForm, experience: e.target.value })}
                    placeholder="Pengalaman mengajar dan profesional..."
                    rows={3}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistik Pengajar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">2</div>
                <p className="text-sm text-muted-foreground">Kursus Dipublikasi</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">36,760</div>
                <p className="text-sm text-muted-foreground">Total Siswa</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-sm text-muted-foreground">Rating Rata-rata</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informasi Akun</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label className="text-muted-foreground">ID Akun</Label>
                <p className="font-mono text-sm">{profile.id}</p>
              </div>
              <div>
                <Label className="text-muted-foreground">Tanggal Bergabung</Label>
                <p>{new Date(profile.created_at).toLocaleDateString('id-ID')}</p>
              </div>
              <div>
                <Label className="text-muted-foreground">Terakhir Diperbarui</Label>
                <p>{new Date(profile.updated_at).toLocaleDateString('id-ID')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstructorProfile;
