"use client"
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Sonu Kumar</h1>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`hover:text-blue-600 transition-colors ${
                  activeSection === item.id ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Sonu Kumar</h1>
            <p className="text-2xl mb-8 animate-slideUp">Full Stack Web Developer</p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors animate-pulse">
              Get in Touch
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-4">
              As a pre-final year CSE student at Chandigarh University, I possess expertise in front-end development
              alongside a fervent enthusiasm for web design and development. My commitment and diligence drive me to
              seek opportunities where I can apply my skills to engaging projects and continue honing my abilities.
            </p>
            <p className="text-lg">
              I have numerous projects that reflect my strengths & skills, all of which are available on my Github.
            </p>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Next.js', 'React.js', 'Tailwind', 'CSS/SASS', 'jQuery', 'JavaScript ES6+', 'Git', 'MongoDB', 'Python', 'C++', 'C'].map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">CodeConnect - Collaborative Coding Platform</h3>
                <p className="mb-4">
                  A web-based collaborative coding platform that aims to bring developers together to share,
                  collaborate, and learn from each other&apos;s code. CodeConnect provides a vibrant community to foster
                  growth, creativity, and knowledge exchange.
                </p>
                <p className="font-semibold">Tech Stack: React, Appwrite, React Router, Tailwind</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Devlinks - Link Sharing Application</h3>
                <p className="mb-4">
                  Worked in collaboration on this project. This application allows users to register and create a
                  profile where they can house all their important links and directly share their profile.
                </p>
                <p className="font-semibold">Tech Stack: React, TypeScript, Appwrite</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Frontend Developer (Freelance)</h3>
              <p className="text-gray-600 mb-2">Minerva Academy | March 2024 - Current</p>
              <ul className="list-disc list-inside">
                <li>Worked on two distinct websites for the institution.</li>
                <li>Responsible for developing home pages and multiple different web pages.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            <div className="flex flex-col items-center space-y-4">
              <a href="mailto:dgearsonu1@gmail.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                <Mail size={24} />
                <span>dgearsonu1@gmail.com</span>
              </a>
              <a href="tel:+919798993013" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                <Phone size={24} />
                <span>+91 9798993013</span>
              </a>
              <div className="flex space-x-4">
                <a href="https://github.com/sonukumar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/sonukumar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sonu Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;