
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Eye, Trash2, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Course {
  id: string;
  title: string;
  education_level: string;
  category: string;
  subject: string;
  price: number;
  discount_percentage: number;
  is_active: boolean;
  instructor_id: string;
  profiles?: {
    full_name: string;
  };
}

const CoursesTable = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          profiles:instructor_id (
            full_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Gagal memuat data kursus");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCourseStatus = async (courseId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('courses')
        .update({ is_active: !currentStatus })
        .eq('id', courseId);

      if (error) throw error;
      
      await fetchCourses();
      toast.success("Status kursus berhasil diubah");
    } catch (error) {
      console.error("Error updating course status:", error);
      toast.error("Gagal mengubah status kursus");
    }
  };

  const deleteCourse = async (courseId: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus kursus ini?")) return;

    try {
      const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', courseId);

      if (error) throw error;
      
      await fetchCourses();
      toast.success("Kursus berhasil dihapus");
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Gagal menghapus kursus");
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manajemen Kursus</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Tambah Kursus
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Jenjang</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Mata Pelajaran</TableHead>
              <TableHead>Pengajar</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.education_level}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.subject}</TableCell>
                <TableCell>{course.profiles?.full_name || 'Tidak ada'}</TableCell>
                <TableCell>
                  <div>
                    {course.discount_percentage > 0 && (
                      <span className="line-through text-muted-foreground mr-2">
                        Rp {course.price.toLocaleString()}
                      </span>
                    )}
                    <span className="font-semibold">
                      Rp {(course.price * (1 - course.discount_percentage / 100)).toLocaleString()}
                    </span>
                    {course.discount_percentage > 0 && (
                      <Badge variant="destructive" className="ml-2">
                        -{course.discount_percentage}%
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={course.is_active ? "default" : "secondary"}>
                    {course.is_active ? "Aktif" : "Nonaktif"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleCourseStatus(course.id, course.is_active)}
                    >
                      {course.is_active ? "Nonaktifkan" : "Aktifkan"}
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => deleteCourse(course.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CoursesTable;
