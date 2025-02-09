import React, { useState, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import InsideHamBtn from './InsideHamBtn';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar z-50 fixed top-0 left-0 w-full flex justify-between flex-row px-4 py-3 transition-all duration-300 ${scrolled ? 'bg-opacity-30 backdrop-blur-md px-0 py-0' : 'bg-black'}`}>
            <div className='flex items-center'>
                <img src={require('../pictures/company-logo-bw.png')} alt="company-logo" className='w-10 h-10 md:w-20 md:h-20'/>
            </div>
            <div className='hidden md:block py-4'>
                <Link to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    className="mx-2 text-white hover:text-blue-500 cursor-pointer"
                    >
                    About
                </Link>
                <Link to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    className="mx-2 text-white hover:text-blue-500 cursor-pointer"
                    >
                    Contacts
                </Link>
                <a href="#" className="mx-2 text-white hover:text-blue-500">Profile</a>
                <a href="#" className="mx-2 text-white hover:text-blue-500">Projects</a>
            </div>
            <div className='flex mx-0'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                {isOpen && <InsideHamBtn />}
            </div>
        </div>
    );
};

export default NavBar;
