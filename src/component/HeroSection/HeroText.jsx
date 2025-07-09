import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeroText = () => {
  return (
    <div className='flex flex-col justify-center h-full gap-4 md:text-left sm:text-center'>
      <h2 className='uppercase lg:text-2xl sm:text-xl text-cyan '>Front-end Web Developer</h2>
      <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>Avazbek Sobirov</h1>
      <p className='mt-4 text-lg text-white'>I have been working as a Frontend developer <br />
      for 2 years.</p>
      <div className='flex items-center gap-5 mt-[10px] sm:justify-center sm:pb-[30px] md:justify-start md:pb-0 '>
        <a href="https://t.me/as_exe/" ><FaTelegram className='text-3xl transition-all duration-500 hover:scale-90 hover:text-cyan'/></a>
        <a href="https://instagram.com/s0b1r0v._._/" ><FaInstagram className='text-3xl transition-all duration-500 hover:scale-90 hover:text-cyan'/></a>
        <a href="https://github.com/avazbek175/" ><FaGithub className='text-3xl transition-all duration-500 hover:scale-90 hover:text-cyan'/></a>
      </div>
    </div>
  )
}

export default HeroText;
