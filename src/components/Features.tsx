import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Listen Anywhere",
      description: "Enjoy on your phone, tablet, desktop, and more.",
    },
    {
      title: "Ad-Free Music",
      description: "No ads, just uninterrupted music.",
    },
    {
      title: "Offline Playback",
      description: "Download your favorites and listen offline.",
    },
  ];

  return (
    <section className="py-16 px-8 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">Why Spotify?</h2>
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
