"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { FormLeftContent } from './FormLeftContent';
import Lottie from 'react-lottie';
import contact from "@/data/contactanimation.json";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError('Please fill out all fields');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('https://api.staticforms.xyz/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            accessKey: 'ddef29bb-0840-4307-a771-3bb9d97d3119',
            subject: 'Contact us from - uniquesonu.me',
            replyTo: formData.email,
            redirectTo: 'https://uniquesonu.me'
          })
        });

        if (response.ok || !response.ok) {
          const data = await response.json();
          if (data.success) {
            setSuccess('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
          }
        }
      } catch (error) {
        console.error('Error:', error);
        setSuccess('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-4 px-4 flex flex-col justify-center items-center w-full mb-16"
    >
      <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl text-white font-bold text-center mb-6">Get in Touch</motion.h2>
      <div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-center items-center w-full md:px-16'>
        <motion.div variants={itemVariants} className='md:w-1/2 flex flex-col gap-6 justify-between'>
          <div className='hidden md:block'>
            <Lottie options={{ animationData: contact }} height={200} width={200} />
          </div>
          <FormLeftContent />
        </motion.div>
        <motion.div variants={itemVariants} className='md:w-1/2 w-full'>
          <div className="border-2 border-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center space-x-4 mb-6">
              <Link href="mailto:its.sonu832@gmail.com" target='_blank' className="text-purple-400 hover:text-purple-500 transition-colors">
                <FaEnvelope size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/uniquesonu" target='_blank' className="text-purple-400 hover:text-purple-500 transition-colors">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://github.com/uniquesonu" target='_blank' className="text-purple-400 hover:text-purple-500 transition-colors">
                <FaGithub size={24} />
              </Link>
            </div>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            {success && <div className="text-green-500 text-center mb-4">{success}</div>}
            <form onSubmit={handleSubmit} className="space-y-4 text-gray-900 font-semibold">
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows={4}
                  className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                  required
                ></textarea>
              </motion.div>
              <input type="hidden" name="accessKey" value="ddef29bb-0840-4307-a771-3bb9d97d3119" />
              <input type="hidden" name="subject" value="Contact us from - uniquesonu.me" />
              <input type="hidden" name="replyTo" value={formData.email} />
              <input type="hidden" name="redirectTo" value="https://uniquesonu.me" />
              <motion.div variants={itemVariants} className="text-center">
                <button
                  type="submit"
                  className="bg-purple-400 text-white font-bold py-2 px-6 rounded-md hover:bg-purple-500 transition-colors duration-300"
                >
                  Send
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;