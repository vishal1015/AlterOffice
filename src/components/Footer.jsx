// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          © 2024 GloomDev. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="www.google.com" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="www.google.com" className="text-gray-400 hover:text-white">
            {" "}
            Terms of Service
          </a>
        </div>
        <div className="mt-4">
          <a
            href="www.google.com"
            className="text-gray-400 hover:text-white mx-2"
          >
            Facebook
          </a>
          <a
            href="www.google.com"
            className="text-gray-400 hover:text-white mx-2"
          >
            Twitter
          </a>
          <a
            href="www.google.com"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="p-2 rounded-md text-black"
          />
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white ml-2">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
