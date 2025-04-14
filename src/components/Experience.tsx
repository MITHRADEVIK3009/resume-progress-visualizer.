
import SectionContainer from "./SectionContainer";
import { resumeData } from "@/data/resumeData";

interface ExperienceProps {
  animationDelay?: number;
}

const Experience = ({ animationDelay }: ExperienceProps) => {
  const { experience } = resumeData;
  
  return (
    <SectionContainer title="Experience" animationDelay={animationDelay}>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className={`relative pl-6 pb-6 border-l-2 border-dashboard-accent/30 last:border-l-0 last:pb-0 animate-slide-in stagger-${index + 1}`}>
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-dashboard-accent animate-pulse-slow"></div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h3 className="font-medium text-white">{exp.position}</h3>
                <p className="text-gray-300">{exp.company}{exp.location && `, ${exp.location}`}</p>
              </div>
              <div className="md:text-right mt-1 md:mt-0">
                <span className="inline-block bg-purple-900/50 text-dashboard-accent text-sm px-2 py-1 rounded-lg">
                  {exp.period}
                </span>
              </div>
            </div>
            <ul className="mt-2 space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 text-sm pl-4 relative before:absolute before:content-['•'] before:left-0 before:text-dashboard-accent">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;
