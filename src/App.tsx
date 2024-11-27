import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import TopArtists from "./components/TopArtists";
import TopSongs from "./components/TopSongs";

const App: React.FC = () => {
  return (
    <div className="flex flex-col font-sans bg-black text-white">
      <div className="min-h-screen">
        <Hero />
        <Features />  
      </div>

      <TopSongs />
      <TopArtists />
    </div>
  );
};

export default App;
