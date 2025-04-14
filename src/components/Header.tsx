
import { useIsMobile } from "@/hooks/use-mobile";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const Header = () => {
  const isMobile = useIsMobile();
  const { name, title, summary, contact } = resumeData;

  return (
    <div className="w-full bg-black shadow-lg rounded-xl mb-6 animate-fade-in purple-glow border border-white/10">
      <div className="px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-dashboard-accent shadow-[0_0_15px_rgba(155,135,245,0.5)] animate-pulse-slow">
              <img 
                src="public/lovable-uploads/9a4ace01-9c91-4d4c-9d7e-a3ce355261be.png" 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{name}</h1>
              <p className="text-lg text-gray-300 mt-1">{title}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a 
              href={`mailto:${contact.email}`} 
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-dashboard-accent transition-colors"
            >
              <Mail size={16} />
              {!isMobile && contact.email}
            </a>
            <a 
              href={`tel:${contact.phone}`} 
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-dashboard-accent transition-colors"
            >
              <Phone size={16} />
              {!isMobile && contact.phone}
            </a>
            <a 
              href={`https://linkedin.com/in/${contact.linkedin}`} 
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-dashboard-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              {!isMobile && "LinkedIn"}
            </a>
            <a 
              href={`https://github.com/${contact.github}`} 
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-dashboard-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              {!isMobile && "GitHub"}
            </a>
          </div>
        </div>
        <p className="text-gray-200 mt-4">{summary}</p>
      </div>
    </div>
  );
};

export default Header;
