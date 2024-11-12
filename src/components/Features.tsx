import React from "react";

const features = [
  {
    title: "Song List",
    description: "Millions of songs to choose from.",
  },
  {
    title: "Song Details",
    description: "Find all the details of your favorite songs.",
  },
  {
    title: "Artist Details",
    description: "Get to know more about your favorite artists.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 border border-gray-800 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
