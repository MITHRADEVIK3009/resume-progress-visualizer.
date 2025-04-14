
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white py-6 text-center text-gray-600 text-sm mt-8">
      <p>© {currentYear} {' '} 
        <span className="text-portfolio-primary font-medium">Mithradevi K</span> {' '}
        | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
