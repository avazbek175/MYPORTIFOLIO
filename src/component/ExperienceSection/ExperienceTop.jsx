import React from 'react'
import { ExperienceTopLeft } from './ExperienceTopLeft'
import { ExperienceTopMiddle } from './ExperienceTopMiddle'
import { ExperienceTopRight } from './ExperienceTopRight'
export const ExperienceTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-2 items-center'>
      <ExperienceTopLeft/>
      <ExperienceTopMiddle/>
      <ExperienceTopRight/>

    </div>
  )
}
