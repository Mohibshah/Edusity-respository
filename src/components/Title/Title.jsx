import React from 'react'
import './Title.css'
import { motion } from 'framer-motion'

export const Title = ({subTitle,Title}) => {
  return (
   <motion.div 
  className='title'
  initial={{ opacity: 0, x: -100 }} // Side se aaye
  whileInView={{ opacity: 1, x: 0 }} // Jab screen par nazar aaye tab chale
  viewport={{ once: false }} // Sirf ek baar animation ho
  transition={{ duration: 0.6 }}
>
  <p>{subTitle}</p>
  <h2>{Title}</h2>
</motion.div>
  )
}
export default Title
