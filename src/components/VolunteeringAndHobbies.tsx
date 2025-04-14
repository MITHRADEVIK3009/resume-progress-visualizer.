
import SectionContainer from "./SectionContainer";
import { resumeData } from "@/data/resumeData";

interface VolunteeringAndHobbiesProps {
  animationDelay?: number;
}

const VolunteeringAndHobbies = ({ animationDelay }: VolunteeringAndHobbiesProps) => {
  const { volunteering, hobbies } = resumeData;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SectionContainer title="Volunteering" animationDelay={animationDelay}>
        <div className="space-y-4">
          {volunteering.map((vol, index) => (
            <div key={index} className={`pb-4 last:pb-0 animate-fade-in stagger-${index + 1} border-b border-white/10 last:border-b-0`}>
              <div className="flex flex-col mb-2">
                <h3 className="font-medium text-white">{vol.role}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 text-sm">{vol.organization}</p>
                  <span className="text-xs text-gray-400">{vol.period}</span>
                </div>
              </div>
              <ul className="mt-2 space-y-1">
                {vol.description.map((desc, i) => (
                  <li key={i} className="text-gray-300 text-sm pl-4 relative before:absolute before:content-['•'] before:left-0 before:text-dashboard-accent">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      <SectionContainer title="Hobbies & Interests" animationDelay={animationDelay ? animationDelay + 1 : 0}>
        <div className="space-y-4">
          {hobbies.map((hobby, index) => (
            <div key={index} className={`pb-4 last:pb-0 animate-fade-in stagger-${index + 1} border-b border-white/10 last:border-b-0 hover:bg-purple-900/20 p-2 rounded-lg transition-all duration-300`}>
              <h3 className="font-medium text-white">{hobby.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{hobby.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default VolunteeringAndHobbies;
