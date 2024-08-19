import React from 'react'

const Greetings = () => {
  return (
    <div className='flex justify-center flex-col bg-slate-900 py-5'>
        <img src={require('../pictures/company-logo-bw.png')} alt="Company logo" 
        className='w-40 h-40 mx-auto'/>
        <h1>Web Designer and Developer</h1>
        <p>Expertise in React, JavaScript, and modern web technologies</p>
    </div>
  )
}

export default Greetings