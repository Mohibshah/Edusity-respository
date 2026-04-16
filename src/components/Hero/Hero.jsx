import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { motion } from 'framer-motion' // 1. Motion ko import kiya

const Hero = () => {
  return (
    <div className='hero container'>
      <motion.div 
        className="hero-text"
        initial={{ opacity: 0, y: 50 }}    // Shuru mein: Gayab aur 50px niche
        animate={{ opacity: 1, y: 0 }}     // Load hone par: Dikh jaye aur apni jagah aa jaye
        transition={{ duration: 1, ease: "easeOut" }} // 1 second ka smooth animation
      >
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </motion.div>
    </div>
  )
}

export default Hero