import React from 'react'
import Video from '../video/video1.mp4'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section className='main-video'>
        <video src={Video} autoPlay loop muted type='video/mp4' />
    <div className=' text-white absolute w-[100%] h-[100%] top-0 flex'>
        <div className='max-w-[800px] mt-5 pt-20 w-full mx-auto text-center flex flex-col justify-center'>
        <h1 className='pb-20 mb-20 text-2xl md:text-4xl font-serif'><span className='text-red-500 text-2xl italic lowercase'>my</span> Date Night Planner</h1>
            <div className='flex justify-center items-center'>
            </div>
            <Link
            smooth={true}
            offset={400}
            duration={1000}
            spy={true}
            to="Footer"
            className="cursor-pointer"
          >
            <button id="Footer" className="z-10 relative border-2 border-white bg-transparent py-2 px-6 font-medium text-sm uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">About</button>
          </Link>
        </div>
    </div>
    </section>
  )
}

export default Hero