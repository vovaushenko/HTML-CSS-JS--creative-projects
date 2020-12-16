import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/3.jpg';

const Services = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title="Marine Animals" desc="Call for an immediate action" />
      Services
    </>
  );
};

export default Services;
