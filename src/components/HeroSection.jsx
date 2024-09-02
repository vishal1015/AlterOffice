

import React from "react";

const HeroSection = () => {
  return (
    <section
      className="hero bg-cover bg-center text-white"
      style={{
        // backgroundImage: `url('/bg.png')`
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen bg-white bg-opacity-50">
        <h1 className="text-5xl font-bold text-purple-700">Welcome to Gloom Dev Pvt.</h1>
        <p className="text-xl mt-4 text-black">We provide amazing Tech services.</p>
        <div className="mt-6">
          <button className="bg-purple-600 px-6 py-3 rounded-md mr-4">
            Get Started
          </button>
          <button className="bg-black border border-white px-6 py-3 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
