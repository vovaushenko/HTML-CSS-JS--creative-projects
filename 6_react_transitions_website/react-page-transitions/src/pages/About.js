import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/2.jpg';

const About = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title="Exotic Species" desc="Endangered beacuse of us" />
      About
    </>
  );
};

export default About;
