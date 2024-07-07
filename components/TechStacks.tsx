import { Rocket } from 'lucide-react';
import Tech from './Tech';

const TechStack = () => {
  const data = [
    [
      "Next Js", "React Js", "React Router", "Tailwind CSS", "CSS 3", "SASS", "Typescript", "JavaScript ES6+", "Git", "MongoDB", "Python", "C++", "C", "Express Js", "Node.js", "jQuery", "HTML 5", "Appwrite", "Bootstrap", "Material UI", "Chakra UI", "Framer Motion", "Three.js", "GSAP", "Redux", "Context API", "GraphQL", "REST API", "Websockets", "Socket.io", "Firebase", "AWS", "Heroku", "Netlify", "Vercel", "Docker", "Kubernetes", "Github", "Notion", "Figma"
    ],
    [
      "Next Js", "React Js", "React Router", "Tailwind CSS", "CSS 3", "SASS", "Typescript", "JavaScript ES6+", "Git", "MongoDB", "Python", "C++", "C", "Express Js", "Node.js", "jQuery", "HTML 5", "Appwrite", "Bootstrap", "Material UI", "Chakra UI", "Framer Motion", "Three.js", "GSAP", "Redux", "Context API", "GraphQL", "REST API", "Websockets", "Socket.io", "Firebase", "AWS", "Heroku", "Netlify", "Vercel", "Docker", "Kubernetes", "Github", "Notion", "Figma"
    ]
  ];

  return (
    <div className="py-20 mt-0 md:mt-12 relative overflow-hidden">
        <h1 className="text-white mb-8 text-center text-3xl md:text-5xl font-bold"><span className='flex justify-center items-center gap-4'>My Tech Stack <Rocket className='h-8 w-8'/></span></h1>
      {data.map((item, index) => (
        <Tech key={index} item={item} direction={index === 0 ? "left" : "right"} />
      ))}
      
    </div>
  );
}

export default TechStack;
