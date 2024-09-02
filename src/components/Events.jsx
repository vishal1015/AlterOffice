// Events.jsx
import React from "react";

const Events = () => {
  const events = [
    { title: "Webinar One", date: "August 25, 2024", link: "#" },
    { title: "Event Two", date: "September 10, 2024", link: "#" },
    { title: "Conference Three", date: "October 5, 2024", link: "#" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Upcoming Events</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="mt-2">{event.date}</p>
              <a
                href={event.link}
                className="text-blue-500 underline mt-4 block"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
