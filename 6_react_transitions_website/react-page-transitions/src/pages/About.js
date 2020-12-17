import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/2.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero image={Image} title="Exotic Species" desc="Endangered beacuse of us" />
      About
    </motion.div>
  );
};

export default About;
