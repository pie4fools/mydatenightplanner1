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
    transition={{ duration: 1.5 }} className='items-center justify-center py-5 pr-5 px-5'>
            <button className="z-10 relative border-2 border-white bg-transparent py-1.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">Plan</button>
        </motion.ul>
    </div>
    
  )
}

export default Navbar