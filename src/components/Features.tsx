import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const features = [
  {
    title: "Songs",
    description: "Explore millions of songs with detailed information.",
    link: "/songs", // URL path for Songs feature
  },
    {
    title: "Artists",
    description: "Discover profiles of your favorite artists and their works.",
    link: "/artists", // URL path for Artists feature
  },

];

const Features: React.FC = () => {
  return (
    <section className="mt-16 py-16 px-8 bg-black">
      {/* <h2 className="text-4xl font-bold text-center mb-12">Features</h2> */}
      <div className="flex justify-center gap-8">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link} // Use Link component to navigate
            className="text-center p-6 border border-gray-800 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
