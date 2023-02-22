import React from 'react'
import { motion } from 'framer-motion'
import mydatelogo from '../images/mydateplanlogo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    // Navbar for logo & about/plan buttons. auto sizing for mobile
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
    transition={{ duration: 1.5 }} src={mydatelogo} className='scale-[1] pr-5' alt="Logo of mydatenightplanner"></img>
        <motion.ul
    initial={{
       x: 100,
       opacity: 0, 
    }}
    animate={{
        x: 0,
        opacity: 1,
    }}
    transition={{ duration: 1.5 }} className='items-center justify-center py-6 pr-3 px-5'>
        <Link
            smooth={true}
            offset={1500}
            duration={1000}
            spy={true}
            to="Footer"
            className="cursor-pointer"
          >
            <button className="hidden sm:inline z-10 relative rounded-full border-2 border-white bg-transparent py-1.5 text-xs px-5 mr-5 uppercase text-white hover:bg-white hover:text-black transition ease-in-out">About</button>
            <button className="z-10 relative rounded-full border-2 border-white bg-transparent py-1.5 text-xs px-5 uppercase text-white hover:bg-white hover:text-black transition ease-in-out">Plan</button>
        </Link>
        </motion.ul>
    </div>
    
  )
}

export default Navbar