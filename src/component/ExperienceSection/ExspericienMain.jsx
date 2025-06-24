
import { ExperienceText } from './ExperienceText'
import { ExperienceTop } from './ExperienceTop'
import { AllExperience } from './AllExperience'

export const ExspericienMain = () => {
  return (
    <div id='experience' className='w-[1200px] mx-auto px-4 '>
       <ExperienceText/>
       <ExperienceTop/>
       <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
       <AllExperience/>
    </div>
  )
}
