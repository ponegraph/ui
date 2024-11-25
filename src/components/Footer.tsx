import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-8 bg-gray-900 text-gray-500">
      <p>Ponegraph</p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
