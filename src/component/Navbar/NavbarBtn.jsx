import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className='flex items-center gap-1 px-4 py-2 text-xl font-semibold text-white transition-all duration-500 border rounded-full font-body border-cyan bg-gradient-to-r from-cyan to-orange hover:scale-110 hover:border-orange hover:shadow-cyanShadow'> 
      Hire me
      <div className='sm:hidden md:block'>
      <LuArrowDownRight/>
        </div> 
    </button>
  )
}

export default NavbarBtn
