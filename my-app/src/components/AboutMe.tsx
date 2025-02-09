import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: 0.1 }}
      className="p-10 text-white text-center rounded-lg shadow-lg h-full"
      id='about'
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className='text-justify mb-4'>
        I'm a Full Stack Software Engineer specializing in building scalable and high-performance web applications. With expertise in React.js, Next.js, JavaScript, and TypeScript, I create dynamic and responsive UIs. On the backend, I develop robust APIs using Python (Flask), ensuring secure and efficient data management. I also work with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases to optimize performance and scalability.
      </p>
      <p className='text-justify'>
        As a developer, I'm Passionate about clean code and seamless integrations, I focus on delivering end-to-end solutions with modern web technologies. From designing interactive user interfaces to developing scalable backend systems, I aim to build innovative applications that enhance user experience and efficiency. Always eager to learn and collaborate, I'm open to exciting projects and new opportunities. Let’s connect! 🚀
      </p>
      
    </motion.div>
  )
}

export default AboutMe