// Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Great service!",
      photo: "https://example.com/john.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "Amazing products!",
      photo: "https://example.com/jane.jpg",
    },
    {
      name: "Bob Johnson",
      feedback: "Highly recommend!",
      photo: "https://example.com/bob.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Client Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-2xl font-semibold mt-4">
                {testimonial.name}
              </h3>
              <p className="mt-2">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
