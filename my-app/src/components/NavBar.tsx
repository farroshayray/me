import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import InsideHamBtn from './InsideHamBtn';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <div className='navbar flex justify-between items-center flex-col sm:flex-row'>
        <div className='flex items-center'>
            <img src={require('../pictures/company-logo-bw.png')} alt="company-logo" 
            className='w-20 h-20'/>
            <p className='font-bold'>faros.id</p>
        </div>
        <div>
            <a href="" className="mx-2">Profile</a>
            <a href="" className="mx-2">Contact</a>
            <a href="" className="mx-2">Projects</a>
        </div>
        <div className='flex flex-col'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {isOpen && <InsideHamBtn/> }
        </div>
        
    </div>
  )
}

export default NavBar