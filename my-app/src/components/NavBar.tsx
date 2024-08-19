import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import InsideHamBtn from './InsideHamBtn';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <div className='navbar flex justify-between items-center flex-col sm:flex-row'>
        <div className='flex flex-col items-center sm:flex-row'>
            <img src={require('../pictures/company-logo-bw.png')} alt="company-logo" 
            className='w-20 h-20'/>
            <p className='font-bold'>faros.id</p>
        </div>
        <div className='py-4 sm:py-0'>
            <a href="" className="mx-2 hover:text-blue-500">Profile</a>
            <a href="" className="mx-2 hover:text-blue-500">Contact</a>
            <a href="" className="mx-2 hover:text-blue-500">Projects</a>
        </div>
        <div className='flex flex-col mx-auto sm:mx-0'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {isOpen && <InsideHamBtn/> }
        </div>
    </div>
  )
}

export default NavBar