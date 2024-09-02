// Features.jsx
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Feature One",
      description: "Description of Feature One",
      icon: "🛠️",
    },
    {
      title: "Feature Two",
      description: "Description of Feature Two",
      icon: "🚀",
    },
    {
      title: "Feature Three",
      description: "Description of Feature Three",
      icon: "💼",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-8 mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Key Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <div className="text-6xl">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
