
export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  cgpa?: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies?: string[];
  inProgress?: boolean;
  liveLink?: string;
  period?: string;
}

export interface Certification {
  title: string;
  provider: string;
  date?: string;
  score?: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface Hobby {
  name: string;
  description: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  problemsSolved: number;
  ranking?: string;
  profileUrl: string;
  iconPath?: string;
}

export interface Skill {
  name: string;
  category: 'programming' | 'development' | 'tools' | 'ai-ml';
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  volunteering: Volunteering[];
  hobbies: Hobby[];
  codingProfiles: CodingProfile[];
  skills: Skill[];
}
