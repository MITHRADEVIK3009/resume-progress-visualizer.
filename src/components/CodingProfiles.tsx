
import { CodingProfile as CodingProfileType } from "@/types/portfolio";
import { Progress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { resumeData } from "@/data/resumeData";

interface CodingProfilesProps {
  animationDelay?: number;
}

const CodingProfileCard = ({ profile, index }: { profile: CodingProfileType, index: number }) => {
  return (
    <div className={`border border-white/10 rounded-lg p-4 flex flex-col h-full bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-300 card-hover animate-fade-in stagger-${index + 1}`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg text-white">{profile.platform}</h3>
          <p className="text-sm text-gray-300">@{profile.username}</p>
        </div>
        <a 
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dashboard-accent hover:text-white transition-colors"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      
      <div className="mt-2 mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-300">Problems Solved</span>
          <span className="text-sm font-medium text-dashboard-accent">{profile.problemsSolved}</span>
        </div>
        <Progress value={profile.platform === "LeetCode" ? 43.5 : 60.35} className="h-2 bg-purple-900/40" />
      </div>
      
      {profile.ranking && (
        <div className="mt-auto pt-2 border-t border-white/10 text-sm text-gray-300">
          <p>{profile.ranking}</p>
        </div>
      )}
    </div>
  );
};

const CodingProfiles = ({ animationDelay }: CodingProfilesProps) => {
  const { codingProfiles } = resumeData;
  
  return (
    <SectionContainer title="Coding Profiles" animationDelay={animationDelay}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {codingProfiles.map((profile, index) => (
          <CodingProfileCard key={profile.platform} profile={profile} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default CodingProfiles;
