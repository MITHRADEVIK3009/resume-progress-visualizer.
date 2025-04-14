
import React from "react";
import { Badge } from "@/components/ui/badge";
import SectionContainer from "./SectionContainer";
import { resumeData } from "@/data/resumeData";

interface SkillsProps {
  animationDelay?: number;
}

const Skills = ({ animationDelay }: SkillsProps) => {
  const { skills } = resumeData;
  
  // Group skills by category
  const programmingSkills = skills.filter(skill => skill.category === 'programming');
  const developmentSkills = skills.filter(skill => skill.category === 'development');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  const aiMlSkills = skills.filter(skill => skill.category === 'ai-ml');

  return (
    <SectionContainer title="Skills" animationDelay={animationDelay}>
      <div className="space-y-4">
        <div className="animate-fade-in stagger-1">
          <h3 className="text-md font-medium text-gray-200 mb-2">Programming</h3>
          <div className="flex flex-wrap gap-2">
            {programmingSkills.map((skill) => (
              <Badge key={skill.name} variant="outline" className="bg-purple-900/40 text-dashboard-accent border-purple-600/30 hover:bg-purple-800/60 transition-colors">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="animate-fade-in stagger-2">
          <h3 className="text-md font-medium text-gray-200 mb-2">Development</h3>
          <div className="flex flex-wrap gap-2">
            {developmentSkills.map((skill) => (
              <Badge key={skill.name} variant="outline" className="bg-purple-900/40 text-dashboard-accent border-purple-600/30 hover:bg-purple-800/60 transition-colors">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="animate-fade-in stagger-3">
          <h3 className="text-md font-medium text-gray-200 mb-2">AI & Machine Learning</h3>
          <div className="flex flex-wrap gap-2">
            {aiMlSkills.map((skill) => (
              <Badge key={skill.name} variant="outline" className="bg-purple-900/40 text-dashboard-accent border-purple-600/30 hover:bg-purple-800/60 transition-colors">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="animate-fade-in stagger-4">
          <h3 className="text-md font-medium text-gray-200 mb-2">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {toolsSkills.map((skill) => (
              <Badge key={skill.name} variant="outline" className="bg-purple-900/40 text-dashboard-accent border-purple-600/30 hover:bg-purple-800/60 transition-colors">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
