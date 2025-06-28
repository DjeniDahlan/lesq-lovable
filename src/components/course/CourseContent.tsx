
import { CheckCircle } from 'lucide-react';

interface CourseContentProps {
  overview?: string;
  description: string;
  whatYouWillLearn?: string[];
}

const CourseContent = ({ overview, description, whatYouWillLearn }: CourseContentProps) => {
  return (
    <div className="space-y-6">
      {/* Course Overview */}
      <div>
        <h2 className="text-xl font-bold mb-4">Tentang Kursus Ini</h2>
        <p className="text-muted-foreground leading-relaxed">
          {overview || description}
        </p>
      </div>

      {/* What You'll Learn */}
      {whatYouWillLearn && whatYouWillLearn.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Apa yang Akan Anda Pelajari</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatYouWillLearn.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseContent;
