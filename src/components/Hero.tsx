import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen px-4 text-center bg-gradient-to-b from-green-600 to-black">
      <h1 className="text-5xl font-bold mb-4">Spotigraph</h1>
      <p className="text-xl mb-8">The One Piece Is Real.</p>
      <button className="px-6 py-2 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition duration-300">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
