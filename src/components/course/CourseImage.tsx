
import { BookOpen } from 'lucide-react';

interface CourseImageProps {
  thumbnailUrl?: string;
  title: string;
}

const CourseImage = ({ thumbnailUrl, title }: CourseImageProps) => {
  return (
    <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center">
      {thumbnailUrl ? (
        <img 
          src={thumbnailUrl} 
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <BookOpen className="h-24 w-24 text-gray-400" />
      )}
    </div>
  );
};

export default CourseImage;
