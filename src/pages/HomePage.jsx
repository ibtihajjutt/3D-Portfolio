import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import TechStack from '../sections/TechStack';
import Project from '../sections/Projects';
import Contact from '../sections/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
    </>
  );
};

export default HomePage;