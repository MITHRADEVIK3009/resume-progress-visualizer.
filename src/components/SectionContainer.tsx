
import React from "react";

interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  title, 
  children,
  className = "",
  animationDelay = 0
}) => {
  const delayClass = animationDelay > 0 ? `stagger-${animationDelay}` : '';
  
  return (
    <div className={`bg-black shadow-lg rounded-xl mb-6 animate-fade-in ${delayClass} border border-white/10 purple-glow card-hover ${className}`}>
      <div className="border-b border-white/10">
        <h2 className="text-xl font-semibold text-dashboard-accent px-6 py-4">{title}</h2>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
