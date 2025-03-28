
import { Link } from 'react-router-dom';
import { Star, Clock, Award, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface CourseType {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  level: 'Pemula' | 'Menengah' | 'Mahir' | 'Semua Level';
  duration: string;
  studentCount: number;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

interface CourseCardProps {
  course: CourseType;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/course/${course.id}`}>
      <div className="group bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-video w-full overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {course.isBestseller && (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">Terlaris</Badge>
          )}
          
          {course.isNew && (
            <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">Baru</Badge>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-base mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
          
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-500 font-medium">{course.rating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={14} 
                  className={i < Math.floor(course.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({course.reviewCount})</span>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Award size={12} />
              {course.level}
            </span>
            <span className="flex items-center gap-1">
              <Users size={12} />
              {course.studentCount.toLocaleString()} siswa
            </span>
          </div>
          
          <div className="flex items-baseline">
            {course.discountPrice ? (
              <>
                <span className="font-bold text-base">Rp {course.discountPrice.toLocaleString()}</span>
                <span className="text-muted-foreground text-sm line-through ml-2">
                  Rp {course.price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="font-bold text-base">
                {course.price === 0 ? "Gratis" : `Rp ${course.price.toLocaleString()}`}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
