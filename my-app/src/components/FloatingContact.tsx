import React, { useState } from 'react'
import githubLogo from "../pictures/github.png"
import instagramLogo from "../pictures/instagram.png"
import linkedinLogo from "../pictures/linkedin.png"
import twitterxLogo from "../pictures/twitterx.png"
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface ExpandButtonProps {
    direction?: "up" | "down" | "left" | "right";
  }

const FloatingContact:React.FC<ExpandButtonProps> = ({ direction = "right" }) => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Variasi animasi sesuai arah
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -50 : direction === "up" ? 50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="fixed top-1/2 left-0 flex">
      {isExpanded && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          className="p-4 w-auto  rounded-xl shadow-md"
        >
          <div>
            <a href="https://github.com/farroshayray" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="a" className="m-1 w-8 h-8 hover:bg-slate-700 rounded-md"/>
            </a>
            <a href="https://www.instagram.com/farroshayray/" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="b" className="m-1 w-8 h-8 hover:bg-slate-700 rounded-md"/>
            </a>
            <a href="https://www.linkedin.com/in/farros/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="c" className="m-1 w-8 h-8 hover:bg-slate-700 rounded-md"/>
            </a>
            <a href="https://x.com/farroshayray" target="_blank" rel="noopener noreferrer">
                <img src={twitterxLogo} alt="d" className="m-1 w-8 h-8 hover:bg-slate-700 rounded-md"/>
            </a>
          </div>
        </motion.div>
      )}
      <button
        onClick={toggleExpand}
        className="ml-1 p-2 h-36 bg-opacity-20 text-white rounded-md flex items-center justify-center"
      >
        {isExpanded ? <div><HiChevronLeft size={24} /></div>  : <div><HiChevronRight size={24} /></div>}
      </button>
    </div>
  )
}

export default FloatingContact