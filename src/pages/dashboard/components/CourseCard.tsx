
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Clock } from "lucide-react";
import { getStatusBadge } from "./courseUtils";

interface CourseWithPurchase {
  id: string;
  title: string;
  description: string;
  price: number;
  status: string;
  purchase_date: string;
  thumbnail_url?: string;
  education_level?: string;
  category?: string;
  subject?: string;
  overview?: string;
}

const CourseCard = ({ course }: { course: CourseWithPurchase }) => (
  <div className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
    <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
      {course.thumbnail_url ? (
        <img
          src={course.thumbnail_url}
          alt={course.title}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <BookOpen className="h-12 w-12 text-gray-400" />
      )}
    </div>

    <div className="space-y-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-sm line-clamp-2">{course.title}</h3>
        {getStatusBadge(course.status)}
      </div>

      <p className="text-xs text-muted-foreground line-clamp-2">
        {course.description}
      </p>

      <div className="flex flex-wrap gap-1">
        <Badge variant="outline" className="text-xs">{course.category}</Badge>
        <Badge variant="outline" className="text-xs">{course.subject}</Badge>
        <Badge variant="outline" className="text-xs">{course.education_level}</Badge>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Rp {course.price.toLocaleString()}</span>
        <span>{new Date(course.purchase_date).toLocaleDateString('id-ID')}</span>
      </div>

      <div className="flex gap-2">
        {course.status === "completed" ? (
          <Button size="sm" className="flex-1">
            <Play className="h-3 w-3 mr-1" />
            Mulai Belajar
          </Button>
        ) : (
          <Button size="sm" variant="outline" className="flex-1">
            <Clock className="h-3 w-3 mr-1" />
            Menunggu Verifikasi
          </Button>
        )}
      </div>

      {course.status === "completed" && (
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span>0%</span>
          </div>
          <Progress value={0} className="h-1" />
        </div>
      )}
    </div>
  </div>
);

export default CourseCard;
