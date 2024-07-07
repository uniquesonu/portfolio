"use client"
import React, { useState, useEffect } from 'react';
import { Linkedin, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TypeWriter = ({ text, speed = 50 }:any) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

const HeroSection = () => {
  return (
    <div className="text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-64 md:mt-96 lg:mt-0 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-4 md:mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Rocket className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm font-medium">A Full Stack Web Developer</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <TypeWriter text="   Empowering the Web with Thoughtful Design and Dynamic Development" />
            </h1>
            
            <motion.p
              className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Turning Complex Challenges into Elegant Solutions through Code
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://www.linkedin.com/in/uniquesonu" target='_blank'>
                <span className='flex justify-start items-center'>
                  <Linkedin className="h-6 w-6 mr-2" />
                  Connect With Me
                </span>
                </Link>
              </motion.button>
              <motion.button
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="mailto:its.sonu832@gmail.com">
                <span className='flex justify-start items-center'>
                  <Rocket className="h-6 w-6 mr-2" />
                  Hire Me
                </span>
                </Link>
                
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative w-full mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img 
              src="/my-photo.jpg" 
              alt="sonu" 
              className="rounded-3xl w-full max-h-[550px] object-cover object-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-white text-gray-900 p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Sonu Kumar - Trusted by 10+ Clients</p>
                  <p className="text-sm">Full Stack Developer</p>
                </div>
                <div className="flex items-center bg-red-100 text-red-500 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">10+</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;