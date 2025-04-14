
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";
import SectionContainer from "./SectionContainer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface ProgressTimelineProps {
  animationDelay?: number;
}

const ProgressTimeline = ({ animationDelay }: ProgressTimelineProps) => {
  // Create timeline data from resume sections
  const timelineData = [
    ...resumeData.experience.map(exp => ({
      type: 'experience',
      title: exp.position,
      subtitle: exp.company,
      date: exp.period,
      content: exp.achievements[0],
    })),
    ...resumeData.education.map(edu => ({
      type: 'education',
      title: edu.degree,
      subtitle: edu.institution,
      date: edu.period,
      content: `${edu.location}${edu.cgpa ? ` - ${edu.cgpa}` : ''}`,
    })),
    ...resumeData.volunteering.map(vol => ({
      type: 'volunteering',
      title: vol.role,
      subtitle: vol.organization,
      date: vol.period,
      content: vol.description[0],
    })),
  ].sort((a, b) => {
    // Simple sorting - ideally would parse dates properly
    return b.date.localeCompare(a.date);
  });

  const educationItems = timelineData.filter(item => item.type === 'education');
  const experienceItems = timelineData.filter(item => item.type === 'experience');
  const volunteeringItems = timelineData.filter(item => item.type === 'volunteering');

  const renderTimelineItem = (item: any, index: number) => (
    <div key={index} className={`relative pl-6 pb-10 border-l-2 border-dashboard-accent/30 last:border-l-0 last:pb-0 animate-fade-in stagger-${index % 5 + 1}`}>
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-dashboard-accent animate-pulse-slow"></div>
      <div className="mb-2">
        <span className="inline-block mb-2 bg-purple-900/50 text-dashboard-accent text-sm px-2 py-1 rounded-lg">
          {item.date}
        </span>
        <h3 className="font-medium text-white">{item.title}</h3>
        <p className="text-gray-300">{item.subtitle}</p>
      </div>
      <p className="text-gray-300 text-sm">{item.content}</p>
    </div>
  );

  return (
    <SectionContainer title="Progress Timeline" animationDelay={animationDelay}>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-purple-900/40">
          <TabsTrigger value="all" className="data-[state=active]:bg-dashboard-primary data-[state=active]:text-white">All</TabsTrigger>
          <TabsTrigger value="education" className="data-[state=active]:bg-dashboard-primary data-[state=active]:text-white">Education</TabsTrigger>
          <TabsTrigger value="experience" className="data-[state=active]:bg-dashboard-primary data-[state=active]:text-white">Experience</TabsTrigger>
          <TabsTrigger value="volunteering" className="data-[state=active]:bg-dashboard-primary data-[state=active]:text-white">Volunteering</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="pt-6">
              {timelineData.map((item, index) => renderTimelineItem(item, index))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="education" className="mt-4">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="pt-6">
              {educationItems.map((item, index) => renderTimelineItem(item, index))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="experience" className="mt-4">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="pt-6">
              {experienceItems.map((item, index) => renderTimelineItem(item, index))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="volunteering" className="mt-4">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="pt-6">
              {volunteeringItems.map((item, index) => renderTimelineItem(item, index))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SectionContainer>
  );
};

export default ProgressTimeline;
