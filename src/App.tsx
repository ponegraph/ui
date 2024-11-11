import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
