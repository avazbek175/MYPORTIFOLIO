import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
      <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
      <img src="../../public/img/about-me.jpg" alt="About Images" className='object-cover w-auto h-full'/>
      </div>
      <div className='h-[500px] w-[250px] bottom-[-30px] bg-orange rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 absolute  left-[-30px]'></div>
    </div>

  )
}

export default AboutMeImage
