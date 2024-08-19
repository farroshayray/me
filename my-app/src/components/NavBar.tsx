import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar flex justify-between items-center'>
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
        <div>
            <button className='bg-white mr-3 rounded-md'>
                <p className='m-1 text-black font-medium'>Contact me</p>
            </button>
        </div>
    </div>
  )
}

export default NavBar