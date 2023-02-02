import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineSchedule } from 'react-icons/ai'
import { GrUserExpert } from 'react-icons/gr'
import { GiMagnifyingGlass } from 'react-icons/gi'

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
        className='text-white max-w-[1024px] mt-5 pt-20 w-full mx-auto text-left flex flex-col justify-center'>
            <h2 className='text-red-400 md:text-4xl sm:text-4xl text-xl font-extrabold py-4 font-raleway uppercase px-7'>About</h2>
            <p className='text-gray-300 md:text-sm sm:text-1xl py-4 font-semibold font-karla px-7'>You have the date, now what?  My Date Night Planner is here to create an experience you and your date will remember forever.  We take the stress out of planning so that you may enjoy your date night.</p>
            <p className='text-gray-300 md:text-sm sm:text-1xl py-4 font-semibold font-karla px-7'>Our dates are individualized just for you.  From first dates,  renewing the spark dates with your longtime love, or a night out with friends, we are here to make memories from first to forever.</p>
            <p className='text-gray-300 md:text-sm sm:text-1xl py-4 font-semibold font-karla px-7'>We will send you a detailed plan of locations, specify dress requirements, and make reservations if necessary.</p>
        </motion.div>
        <div>
        <div className='lg:flex max-w-[1024px] align-center mx-auto justify-center'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-2 align-center italic bg-white'>
                <AiOutlineSchedule size={45} className='cursor-pointer hover:animate-pulse my-6 mx-auto w-[70px] pb-0.5 z-10'/>
                <h3 className='text-red-500 text-lg font-bold font-serif pb-4'>Custom Itineraries</h3>
                <p className='pb-3'>A new restaurant, a local festival, a hole in the wall underground jazz club, an all night party until dawn, or an elegant night of sparkle and glitz?</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 mx-2 bg-white italic'>
                <GrUserExpert size={45} className='cursor-pointer hover:animate-pulse my-6 mx-auto w-[70px] pb-0.5 pl-3 z-10'/>
                <h3 className='text-red-500 text-lg font-bold font-serif pb-4'>Expertise</h3>
                <p className='pb-7'>Your date planner has spent many years being the party and date planner for friends and family.  After a suggestion from her brother, she decided to share her talents with others.  You are guaranteed to wow your date as you leave the planning to me!</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-md my-10 mx-2 bg-white italic align-center justify-center'>
                <GiMagnifyingGlass size={45} className='cursor-pointer hover:animate-pulse my-6 mx-auto w-[70px] pb-0.5 z-10'/>
                <h3 className='text-red-500 text-lg font-bold font-serif pb-4'>Personal Attention</h3>
                <p className='pb-3'>Each date will be customized for you based on some initial information you provide.   Just as no two couples are the same, no date plan is the same.</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Aboutpage