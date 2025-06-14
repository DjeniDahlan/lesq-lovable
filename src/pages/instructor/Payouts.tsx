
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, TrendingUp, Calendar, Download } from "lucide-react";

const InstructorPayouts = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Sample earnings data
  const currentEarnings = {
    thisMonth: 3750000,
    thisYear: 27850000,
    pending: 450000,
    available: 3300000
  };

  // Sample payout history
  const payoutHistory = [
    {
      id: '1',
      date: '2024-01-01',
      amount: 3500000,
      status: 'completed',
      method: 'Bank Transfer',
      reference: 'PAY-20240101-001'
    },
    {
      id: '2',
      date: '2023-12-01',
      amount: 3250000,
      status: 'completed',
      method: 'Bank Transfer',
      reference: 'PAY-20231201-001'
    },
    {
      id: '3',
      date: '2023-11-01',
      amount: 2750000,
      status: 'completed',
      method: 'Bank Transfer',
      reference: 'PAY-20231101-001'
    },
    {
      id: '4',
      date: '2023-10-15',
      amount: 150000,
      status: 'pending',
      method: 'Bank Transfer',
      reference: 'PAY-20231015-001'
    }
  ];

  // Sample revenue breakdown
  const revenueBreakdown = [
    { course: 'React & TypeScript', students: 1520, revenue: 2280000 },
    { course: 'JavaScript Modern', students: 1890, revenue: 1470000 },
    { course: 'Node.js Backend', students: 450, revenue: 675000 }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">Selesai</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-500">Gagal</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="container max-w-6xl py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Pendapatan & Pembayaran</h1>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Laporan
        </Button>
      </div>

      <div className="space-y-6">
        {/* Earnings Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pendapatan Bulan Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                Rp {currentEarnings.thisMonth.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +7% dari bulan lalu
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pendapatan Tahun Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                Rp {currentEarnings.thisYear.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +25% dari tahun lalu
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Saldo Tersedia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                Rp {currentEarnings.available.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Siap untuk ditarik
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                Rp {currentEarnings.pending.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Dalam proses verifikasi
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Request Payout */}
        <Card>
          <CardHeader>
            <CardTitle>Tarik Saldo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h3 className="font-medium">Saldo Tersedia untuk Ditarik</h3>
                <p className="text-2xl font-bold text-green-600">
                  Rp {currentEarnings.available.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">
                  Akan ditransfer ke rekening Bank Mandiri (**** 5678)
                </p>
              </div>
              <Button size="lg" disabled={currentEarnings.available < 100000}>
                <DollarSign className="h-4 w-4 mr-2" />
                Tarik Saldo
              </Button>
            </div>
            {currentEarnings.available < 100000 && (
              <p className="text-sm text-muted-foreground mt-2">
                Minimum penarikan Rp 100.000
              </p>
            )}
          </CardContent>
        </Card>

        <Tabs defaultValue="history" className="space-y-6">
          <TabsList>
            <TabsTrigger value="history">Riwayat Pembayaran</TabsTrigger>
            <TabsTrigger value="revenue">Breakdown Pendapatan</TabsTrigger>
            <TabsTrigger value="analytics">Analitik</TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Riwayat Pembayaran</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Jumlah</TableHead>
                      <TableHead>Metode</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Referensi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payoutHistory.map((payout) => (
                      <TableRow key={payout.id}>
                        <TableCell>
                          {new Date(payout.date).toLocaleDateString('id-ID')}
                        </TableCell>
                        <TableCell className="font-medium">
                          Rp {payout.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>{payout.method}</TableCell>
                        <TableCell>{getStatusBadge(payout.status)}</TableCell>
                        <TableCell className="font-mono text-xs">
                          {payout.reference}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle>Breakdown Pendapatan per Kursus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{item.course}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.students} siswa terdaftar
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">Rp {item.revenue.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">
                          ~Rp {Math.round(item.revenue / item.students).toLocaleString()} per siswa
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analitik Pendapatan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">Rata-rata Pendapatan Bulanan</h3>
                      <p className="text-2xl font-bold">Rp 2.320.000</p>
                      <p className="text-sm text-muted-foreground">
                        Berdasarkan 12 bulan terakhir
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Tingkat Konversi</h3>
                      <p className="text-2xl font-bold">3.2%</p>
                      <p className="text-sm text-muted-foreground">
                        Pengunjung ke pembeli
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Tren Pertumbuhan</h3>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Grafik akan ditampilkan di sini</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Payment Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informasi Pembayaran</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Rekening Bank Terdaftar</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">Bank Mandiri</p>
                    <p className="text-sm">No. Rekening: **** **** **** 5678</p>
                    <p className="text-sm">Atas Nama: Budi Santoso</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3">
                    Edit Rekening
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Jadwal Pembayaran</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-1">
                    <p className="text-sm">Pembayaran otomatis setiap awal bulan</p>
                    <p className="text-sm">Tanggal 1-5 setiap bulan</p>
                    <p className="text-sm">Minimum payout: Rp 100.000</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    Ubah Jadwal
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstructorPayouts;
