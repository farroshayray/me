import React from 'react'

const Greetings = () => {
  return (
    <div className='flex justify-center flex-col bg-black py-5 h-screen'>
        <img src={require('../pictures/company-logo-bw.png')} alt="Company logo" 
        className='w-40 h-40 mx-auto mt-16 md:mt-24'/>
        <h1>Web Designer and Developer</h1>
        <p className='px-5'>Expertise in React, JavaScript, and modern web technologies</p>
    </div>
  )
}

export default Greetings