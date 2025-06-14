
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const InstructorSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [courseUpdates, setCourseUpdates] = useState(true);
  const [studentMessages, setStudentMessages] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [payoutMethod, setPayoutMethod] = useState('bank');

  return (
    <div className="container max-w-4xl py-8">
      <h1 className="text-2xl font-bold mb-6">Pengaturan Pengajar</h1>
      
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
                  Terima notifikasi umum melalui email
                </p>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Update Kursus</Label>
                <p className="text-sm text-muted-foreground">
                  Notifikasi tentang performa dan update kursus
                </p>
              </div>
              <Switch
                checked={courseUpdates}
                onCheckedChange={setCourseUpdates}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Pesan Siswa</Label>
                <p className="text-sm text-muted-foreground">
                  Notifikasi ketika ada pesan baru dari siswa
                </p>
              </div>
              <Switch
                checked={studentMessages}
                onCheckedChange={setStudentMessages}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Marketing</Label>
                <p className="text-sm text-muted-foreground">
                  Terima tips dan promosi untuk pengajar
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
            <CardTitle>Preferensi Kursus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Bahasa Pengajaran Default</Label>
              <Select defaultValue="id">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih bahasa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="id">Bahasa Indonesia</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Kategori Utama</Label>
              <Select defaultValue="programming">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="programming">Programming</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informasi Pembayaran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Metode Payout</Label>
              <Select value={payoutMethod} onValueChange={setPayoutMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih metode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Transfer Bank</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="wise">Wise</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {payoutMethod === 'bank' && (
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <Label>Nama Bank</Label>
                  <Input placeholder="Nama bank" defaultValue="Bank Mandiri" />
                </div>
                <div className="space-y-2">
                  <Label>Nomor Rekening</Label>
                  <Input placeholder="Nomor rekening" defaultValue="**** **** **** 5678" />
                </div>
                <div className="space-y-2">
                  <Label>Nama Pemegang Rekening</Label>
                  <Input placeholder="Nama sesuai rekening" defaultValue="Budi Santoso" />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label>Minimum Payout</Label>
              <Select defaultValue="100000">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih minimum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50000">Rp 50.000</SelectItem>
                  <SelectItem value="100000">Rp 100.000</SelectItem>
                  <SelectItem value="250000">Rp 250.000</SelectItem>
                  <SelectItem value="500000">Rp 500.000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Keamanan Akun</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Ubah Password
            </Button>
            <Button variant="outline" className="w-full">
              Aktifkan Autentikasi Dua Faktor
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Simpan Pengaturan</Button>
        </div>
      </div>
    </div>
  );
};

export default InstructorSettings;
