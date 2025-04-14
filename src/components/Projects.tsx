
import SectionContainer from "./SectionContainer";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/data/resumeData";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
  animationDelay?: number;
}

const Projects = ({ animationDelay }: ProjectsProps) => {
  const { projects } = resumeData;
  
  return (
    <SectionContainer title="Projects" animationDelay={animationDelay}>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className={`border border-white/10 rounded-lg p-4 animate-fade-in stagger-${index + 1} bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-300 card-hover`}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-white">{project.title}</h3>
              {project.inProgress && (
                <span className="inline-block bg-amber-900/50 text-amber-300 text-xs px-2 py-1 rounded-lg">
                  In Progress
                </span>
              )}
              {project.period && (
                <span className="inline-block bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded-lg ml-2">
                  {project.period}
                </span>
              )}
            </div>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-dashboard-accent hover:text-dashboard-accent/80 text-sm mb-3 transition-colors"
              >
                <ExternalLink size={14} className="mr-1" /> View Live
              </a>
            )}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-purple-900/40 text-gray-200 border-purple-600/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
