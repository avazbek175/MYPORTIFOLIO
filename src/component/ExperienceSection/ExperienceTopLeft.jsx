import React from 'react'
import ExperienceInfo from './ExperienceInfo'

export const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'> 
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Sice 2022</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number="2" text="Year" />
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <ExperienceInfo number="18" text="WebSite" />
      </div>
        <p className='text-center text-white'>I have more than 2 years of experience learning frontend development.</p>
        <ExperienceInfo number="$80k" text="Max Budget"/>
    </div>
  )
}
