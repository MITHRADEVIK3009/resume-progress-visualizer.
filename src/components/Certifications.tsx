
import { Progress } from "@/components/ui/progress";
import SectionContainer from "./SectionContainer";
import { resumeData } from "@/data/resumeData";

interface CertificationsProps {
  animationDelay?: number;
}

const CertificationCard = ({ certification, index }: { certification: any, index: number }) => {
  // Generate a pseudo-progress value for visual representation
  const progressValue = certification.score 
    ? parseInt(certification.score.replace('%', '')) 
    : 70 + (index * 5) % 30; // Mock values between 70-100% for certifications without scores
  
  return (
    <div className={`border border-white/10 rounded-lg p-4 bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-300 card-hover animate-fade-in stagger-${index + 1}`}>
      <h3 className="font-medium text-white">{certification.title}</h3>
      <p className="text-gray-300 text-sm mb-3">{certification.provider}</p>
      
      <div className="mt-2">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-gray-300">Proficiency</span>
          {certification.score && (
            <span className="text-xs font-medium text-dashboard-accent">{certification.score}</span>
          )}
        </div>
        <Progress value={progressValue} className="h-1.5 bg-purple-900/40" />
      </div>
    </div>
  );
};

const Certifications = ({ animationDelay }: CertificationsProps) => {
  const { certifications } = resumeData;
  
  return (
    <SectionContainer title="Courses & Certifications" animationDelay={animationDelay}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Certifications;
