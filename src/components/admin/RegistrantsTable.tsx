
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for demonstration
const registrants = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    registeredAt: "2025-04-16",
    role: "Student"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    registeredAt: "2025-04-15",
    role: "Student"
  },
];

const RegistrantsTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Tanggal Pendaftaran</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrants.map((registrant) => (
            <TableRow key={registrant.id}>
              <TableCell>{registrant.name}</TableCell>
              <TableCell>{registrant.email}</TableCell>
              <TableCell>{registrant.registeredAt}</TableCell>
              <TableCell>{registrant.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RegistrantsTable;
