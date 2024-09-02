// Statistics.jsx
import React from "react";

const Statistics = () => {
  const stats = [
    { title: "Years in Business", value: "10+" },
    { title: "Clients Served", value: "500+" },
    { title: "Projects Completed", value: "300+" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Achievements</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <h3 className="text-6xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-xl">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
