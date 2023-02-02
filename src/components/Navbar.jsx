import React from 'react'
import { motion } from 'framer-motion'
import mydatelogo from '../images/mydateplanlogo.png'

const Navbar = () => {
    return (
    <div className='flex justify-between items-left h-20 max-w-[1240px] mx-auto px-5 text-white z-10'>
        <img
    initial={{
       x: -500,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    transition={{ duration: 1.5 }} src={mydatelogo} className='scale-[1]' alt="Logo of mydatenightplanner"></img>
        <motion.ul
    initial={{
       x: 100,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    transition={{ duration: 1.5 }} className='items-center justify-center py-6 pr-5 px-5'>
            <button className="z-10 relative rounded-full border-2 border-white bg-transparent py-1.5 text-xs px-5 mr-2 uppercase text-white hover:bg-white hover:text-black transition ease-in-out">About</button>
            <button className="z-10 relative rounded-full border-2 border-white bg-transparent py-1.5 text-xs px-5 uppercase text-white hover:bg-white hover:text-black transition ease-in-out">Plan</button>
        </motion.ul>
    </div>
    
  )
}

export default Navbar