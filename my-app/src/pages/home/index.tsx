import React from 'react'
import Greetings from '../../components/Greetings'
import AboutMe from '../../components/AboutMe'
import photo from '../../pictures/photo.png'

const Home = () => {
  return (
    <div className='' style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "contain",  // atau "cover", "auto", dll.
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}>
        Home
        <Greetings/>
        {/* <img src={require('../../pictures/photo.png')} alt="Company logo" 
        className='absolute top-32 ml-10 h-full w-auto z-0'/> */}
        <AboutMe/>
    </div>
  )
}

export default Home