import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Aboutpage = () => {
    
    return (
     <div>
      <div>
        <motion.div
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.7,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once:true }}
        className='text-white max-w-[800px] mt-5 pt-20 w-full mx-auto text-left flex flex-col justify-center'>
            <h1 className='text-[white] md:text-4xl sm:text-4xl text-xl font-bold py-4 font-raleway uppercase'>About</h1>
            <p className='text-gray-300 md:text-sm sm:text-1xl py-4 font-semibold font-karla'>You have the date, now what?  My Date Night Planner is here to create an experience you and your date will remember forever.  We take the stress out of planning so that you may enjoy your date night.</p>
            <p className='text-gray-300 md:text-sm sm:text-1xl py-4 font-semibold font-karla'>Our dates are individualized just for you.  From first dates,  renewing the spark dates with your longtime love, or a night out with friends, we are here to make memories from first to forever.</p>
            <p className='text-gray-300 md:text-sm sm:text-1xl py-4 font-semibold font-karla'>We will send you a detailed plan of locations, specify dress requirements, and make reservations if necessary.</p>
        </motion.div>
    </div>
    </div>
  )
}

export default Aboutpage