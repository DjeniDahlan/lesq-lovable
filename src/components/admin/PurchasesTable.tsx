
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for demonstration
const purchases = [
  {
    id: 1,
    courseName: "Belajar React JS",
    studentName: "John Doe",
    purchaseDate: "2025-04-16",
    price: "Rp 599.000"
  },
  {
    id: 2,
    courseName: "Node.js untuk Pemula",
    studentName: "Jane Smith",
    purchaseDate: "2025-04-15",
    price: "Rp 499.000"
  },
];

const PurchasesTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Kursus</TableHead>
            <TableHead>Nama Siswa</TableHead>
            <TableHead>Tanggal Pembelian</TableHead>
            <TableHead>Harga</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchases.map((purchase) => (
            <TableRow key={purchase.id}>
              <TableCell>{purchase.courseName}</TableCell>
              <TableCell>{purchase.studentName}</TableCell>
              <TableCell>{purchase.purchaseDate}</TableCell>
              <TableCell>{purchase.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PurchasesTable;
