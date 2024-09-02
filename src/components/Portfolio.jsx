// Portfolio.jsx
import React from "react";

const Portfolio = () => {
  const projects = [
    { title: "Project One", image: "https://example.com/project1.jpg" },
    { title: "Project Two", image: "https://example.com/project2.jpg" },
    { title: "Project Three", image: "https://example.com/project3.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Portfolio</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
