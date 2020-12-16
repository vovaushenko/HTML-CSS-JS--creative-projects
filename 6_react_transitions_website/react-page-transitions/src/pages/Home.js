import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/1.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title="Experience Nature" desc="Once in a Lifetime" />
    </>
  );
};

export default Home;
