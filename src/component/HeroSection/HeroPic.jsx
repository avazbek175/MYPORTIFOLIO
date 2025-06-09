import React from 'react'
import { PiHexagon } from "react-icons/pi";
// import { RiCheckboxBlankCircleLine } from "react-icons/ri";
const HeroPic = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <img src="../../public/img/MyPic.png" alt="Avazbek Sobirov" className='max-h-[450px] w-auto' />
      <div className='absolute flex items-center justify-center -z-10 animate-pulse'>
        <PiHexagon className=' md:h-[80%] sm:h-[110%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
      </div>
    </div>
  )
}

export default HeroPic;
