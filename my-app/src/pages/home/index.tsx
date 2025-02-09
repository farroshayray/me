import React from 'react'
import Greetings from '../../components/Greetings'
import AboutMe from '../../components/AboutMe'
import FloatingContact from '../../components/FloatingContact'
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
        <FloatingContact/>
        <AboutMe/>
    </div>
  )
}

export default Home