// CaseStudies.jsx
import React from "react";

const CaseStudies = () => {
  const studies = [
    {
      title: "Case Study One",
      summary: "Summary of case study one.",
      image: "https://example.com/case1.jpg",
    },
    {
      title: "Case Study Two",
      summary: "Summary of case study two.",
      image: "https://example.com/case2.jpg",
    },
    {
      title: "Case Study Three",
      summary: "Summary of case study three.",
      image: "https://example.com/case3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Case Studies</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mt-4">{study.title}</h3>
              <p className="mt-2">{study.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
