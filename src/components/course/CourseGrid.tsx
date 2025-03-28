
import CourseCard, { CourseType } from './CourseCard';

interface CourseGridProps {
  courses: CourseType[];
  title?: string;
  description?: string;
}

const CourseGrid = ({ courses, title, description }: CourseGridProps) => {
  return (
    <div className="space-y-4">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
