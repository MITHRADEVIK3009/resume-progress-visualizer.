
import SectionContainer from "./SectionContainer";
import { resumeData } from "@/data/resumeData";

interface EducationProps {
  animationDelay?: number;
}

const Education = ({ animationDelay }: EducationProps) => {
  const { education } = resumeData;
  
  return (
    <SectionContainer title="Education" animationDelay={animationDelay}>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className={`flex flex-col md:flex-row justify-between animate-fade-in stagger-${index + 1} p-3 rounded-lg hover:bg-white/5 transition-all duration-300`}>
            <div>
              <h3 className="font-medium text-white">{edu.institution}</h3>
              <p className="text-gray-300 text-sm">{edu.location}</p>
              <p className="text-gray-200">{edu.degree}</p>
              {edu.cgpa && <p className="text-sm text-dashboard-accent mt-1">{edu.cgpa}</p>}
            </div>
            <div className="md:text-right mt-1 md:mt-0">
              <span className="inline-block bg-purple-900/50 text-dashboard-accent text-sm px-2 py-1 rounded-lg">
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Education;
