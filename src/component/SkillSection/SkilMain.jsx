import React from 'react'
import { SkilText } from './SkilText'
import { AllSkils } from './AllSkils'
import { AllSkilsSm } from './AllSkilsSm'

export const SkilMain = () => {
  return (
    <div id='slill'>
      <div className='max-w-[1200px] px-4 mx-auto min-h-[500px] relative overflow-hidden '>
       <SkilText/>
       <div className='lg:block md:hidden sm:hidden bottom-10 absolute left-[50%] -translate-x-[50%]'>
       <AllSkils/>
       </div>
       <div className='lg:hidden  sm:block'>
        <AllSkilsSm/>
       </div>
      </div>
    </div>
  )
}
