import React from 'react'

const Greetings = () => {
  return (
    <div className='flex justify-center flex-col py-5 h-screen z-20'>
        <img src={require('../pictures/company-logo-bw.png')} alt="Company logo" 
        className='hidden md:block w-40 h-40 mx-auto mt-0 md:mt-24'/>
        <h1>Web Designer and Developer</h1>
        <p className='px-5'>Expertise in React, JavaScript, and modern web technologies</p>
    </div>
  )
}

export default Greetings