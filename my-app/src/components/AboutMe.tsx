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
      className="p-10 text-white text-center rounded-lg shadow-lg"
    >
      I am a results-driven professional aspiring to excel as a Full Stack Developer, passionate about creating innovative solutions that bridge technology and business needs. With experience as an IoT Content Maker, developing IoT devices with seamless hardware-software integration, and as a Micro Banking Manager, where I boosted client acquisition by 20% and team productivity by 15%, I bring a unique blend of technical expertise and leadership skills. My proven ability to integrate innovation with strategic management ensures impactful solutions that align with business goals and enhance user experiences.
    </motion.div>
  )
}

export default AboutMe