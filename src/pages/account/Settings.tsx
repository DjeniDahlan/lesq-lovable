
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import AccountLayout from "@/components/layout/AccountLayout";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [courseReminders, setCourseReminders] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  
  return (
    <AccountLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Notifikasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notifikasi Email</Label>
                <p className="text-sm text-muted-foreground">
                  Terima pembaruan tentang kursus dan aktivitas akun melalui email
                </p>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notifikasi Push</Label>
                <p className="text-sm text-muted-foreground">
                  Terima notifikasi langsung di browser
                </p>
              </div>
              <Switch
                checked={pushNotifications}
                onCheckedChange={setPushNotifications}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Pengingat Kursus</Label>
                <p className="text-sm text-muted-foreground">
                  Terima pengingat untuk melanjutkan belajar
                </p>
              </div>
              <Switch
                checked={courseReminders}
                onCheckedChange={setCourseReminders}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Marketing</Label>
                <p className="text-sm text-muted-foreground">
                  Terima informasi tentang kursus baru dan promosi
                </p>
              </div>
              <Switch
                checked={marketingEmails}
                onCheckedChange={setMarketingEmails}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Privasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Visibilitas Profil</Label>
              <p className="text-sm text-muted-foreground">
                Profil Anda saat ini bersifat privat. Hanya Anda yang dapat melihat informasi profil.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Keamanan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline">
              Ubah Password
            </Button>
            <Button variant="outline">
              Kelola Sesi Login
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Simpan Pengaturan</Button>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Settings;
