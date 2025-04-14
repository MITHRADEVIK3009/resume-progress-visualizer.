
import Header from "@/components/Header";
import CodingProfiles from "@/components/CodingProfiles";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import VolunteeringAndHobbies from "@/components/VolunteeringAndHobbies";
import ProgressTimeline from "@/components/ProgressTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Experience animationDelay={1} />
            <Education animationDelay={2} />
            <Projects animationDelay={3} />
            <ProgressTimeline animationDelay={4} />
          </div>
          
          <div className="space-y-6">
            <CodingProfiles animationDelay={1} />
            <Skills animationDelay={2} />
            <Certifications animationDelay={3} />
            <VolunteeringAndHobbies animationDelay={4} />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
