import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col justify-center h-full gap-4 md:text-left sm:text-center'>
      <h2 className='uppercase lg:text-2xl sm:text-xl text-cyan '>Front-end Web Developer</h2>
      <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>Avazbek Sobirov</h1>
      <p className='mt-4 text-lg text-white'>I have been working as a Frontend developer <br />
      for 2 years.</p>
    </div>
  )
}

export default HeroText;
