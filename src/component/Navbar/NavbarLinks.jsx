import React from 'react'


const NavbarLinks = () => {
  const links = [
    { link: 'Home', href: '#home' },
    { link: 'About', href: '#about' },
    { link: 'Skills', href: '#skills' },
    { link: 'Projects', href: '#projects' },
    { link: 'Contact', href: '#contact' }
  ];
  return (
    <ul className='flex gap-6 font-bold text-center text-white lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full  py-4'>
      {links.map((link,index)=>{
        return(
            <li key={index} className='group'><a className='text-white transition-all duration-500 cursor-pointer hover:text-cyan' href='#'>{link.link}</a>
            <div className='w-0 mx-auto bg-cyan group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        )
      } )}
    </ul>
  )
}

export default NavbarLinks
