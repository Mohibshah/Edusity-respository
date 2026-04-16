import React, { useEffect, useLayoutEffect, useState } from 'react'
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
import { Routes, Route } from 'react-router-dom';
import Explore from './components/Explore/Explore.jsx';
import { useLocation } from 'react-router-dom';

function App() {
  const [playstate, setPlaystate] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('current_theme') || 'light');
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <div className="container">
              <Title subTitle='Our Program' title='What We Offer' />
              <Programs />
              <About setPlaystate={setPlaystate} />
              <Title subTitle='Gallery' title='Campus Photos' />
              <Campus />
              <Title subTitle='Testimonials' title='What Our Students Say' />
              <Testimonials />
              <Title subTitle='Contact Us' title='Get In Touch' />
              <Contact />
              <Footer />
            </div>
          </>
        } />

        <Route path="/explore" element={<Explore />} />
      </Routes>

      <Videoplayer playstate={playstate} setPlaystate={setPlaystate} />
    </div>
  )
}

export default App;