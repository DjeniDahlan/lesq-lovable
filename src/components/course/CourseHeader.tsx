
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock, Globe } from 'lucide-react';

interface CourseHeaderProps {
  title: string;
  description: string;
  category: string;
  subject: string;
  educationLevel: string;
  instructorName: string;
}

const CourseHeader = ({
  title,
  description,
  category,
  subject,
  educationLevel,
  instructorName
}: CourseHeaderProps) => {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline">{category}</Badge>
        <Badge variant="outline">{subject}</Badge>
        <Badge variant="outline">{educationLevel}</Badge>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      
      <p className="text-lg text-muted-foreground mb-6">
        {description}
      </p>
      
      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500" />
          <span className="font-medium">4.5</span>
          <span>(124 ulasan)</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>1,250 siswa</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>8 jam</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe className="h-4 w-4" />
          <span>Bahasa Indonesia</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <span>Instruktur: {instructorName}</span>
      </div>
    </div>
  );
};

export default CourseHeader;
