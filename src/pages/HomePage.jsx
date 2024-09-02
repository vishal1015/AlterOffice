// App.jsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Introduction from "../components/Introduction";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import BlogPosts from "../components/BlogPosts";
import CaseStudies from "../components/CaseStudies";
import Statistics from "../components/Statistics";
import Portfolio from "../components/Portfolio";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Introduction />
      <Features />
      <AboutUs />
      <Products />
      <Testimonials />
      <BlogPosts />
      <CaseStudies />
      <Statistics />
      <Portfolio />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
