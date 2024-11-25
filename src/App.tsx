import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white">
      <Hero />
      <Features />
      {/* <TopSongs /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
