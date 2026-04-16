import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import { Testimonials } from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact.jsx'
import { Footer } from './components/Footer/Footer.jsx' 
import Videoplayer from './components/Videoplayer/Videoplayer.jsx'
function App() {

  const[playstate, setPlaystate] = React.useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' Title='What We Offer' />
        <Programs />
        <About setPlaystate={setPlaystate} />
        <Title subTitle='Gallery' Title='Campus Photos' />
        <Campus />
        <Title subTitle='Testimonials' Title='What Our Students Say' />
        <Testimonials/>
        <Title subTitle='Contact Us' Title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
         <Videoplayer playstate={playstate} setPlaystate={setPlaystate} />
    </div>
  )
}

export default App