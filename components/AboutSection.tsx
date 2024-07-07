"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MovingBorder } from './MovingBorder';


const Card = ({ children, className = '', backgroundImage = '' }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-800 p-6 rounded-lg ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {children}
    </motion.div>
  );
};

const AboutSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('its.sonu832@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className=" text-white py-16 mt-32 md:mt-64 lg:mt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card 
            className="col-span-1 md:col-span-2 row-span-2 flex flex-col justify-end"
            backgroundImage="https://minimal-portfolio-swart.vercel.app/b1.svg"
          >
            <h3 className="text-xl md:text-2xl font-bold mt-4 bg-gray-800 bg-opacity-75 p-4 rounded">
              I prioritize client collaboration, fostering open communication
            </h3>
          </Card>
          
          <Card>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              I&apos;m very flexible with time zone communications
            </h3>
          </Card>
          
          <Card>
            <p className="text-lg mb-2">I constantly try to improve</p>
            <h3 className="text-lg md:text-xl font-bold mb-4">My tech stack</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 font-semibold rounded p-2 text-center text-xs md:text-sm">Next JS</div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 font-semibold rounded p-2 text-center text-xs md:text-sm">Typescript</div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 font-semibold rounded p-2 text-center text-xs md:text-sm">Express Js</div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 font-semibold rounded p-2 text-center text-xs md:text-sm">MongoDB</div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 font-semibold rounded p-2 text-center text-xs md:text-sm">React</div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 font-semibold rounded p-2 text-center text-xs md:text-sm">Node.js</div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-lg md:text-xl font-bold">
              Tech enthusiast with a passion for development.
            </h3>
          </Card>
          
          <Card className="col-span-1 md:col-span-2 bg-gradient-to-r from-purple-600 to-purple-800">
            <h3 className="text-lg md:text-xl font-bold mb-4">
              Do you want to start a project together?
            </h3>
            {/* <button 
              onClick={copyEmail}
              className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
            >
              {copied ? 'Email Copied!' : 'Copy my email address'}
            </button> */}
            <MovingBorder />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;