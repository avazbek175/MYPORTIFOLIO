import React from 'react'


const SingleSkil = ({imgSvg, text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
      <div className='flex flex-col items-center gap-2 relative'>
        <div className='bg-white text-cyan h-[100px] w-[100px] text-6xl flex justify-center items-center rounded-full hover:text-darkGrey hover:scale-105 transition-all duration-500'>{imgSvg}</div>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default SingleSkil