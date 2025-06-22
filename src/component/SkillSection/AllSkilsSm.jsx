import React from 'react'
import SingleSkil from './SingleSkil.jsx';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";

const AllSkilIcon =[
  {
    skill: "HTML",
    icon: FaHtml5
  },
  
  {
    skill: "CSS",
    icon: FaCss3Alt
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript
  },
  {
    skill: "React",
    icon: FaReact
  },
  {
    skill: "Tailwind CSS",
    icon: RiTailwindCssFill
  },
  {
    skill: "GitHub",
    icon: FaGithub
  },
  {
    skill: "TypeScript",
    icon: BiLogoTypescript
  },
  {
    skill: "Node.js",
    icon: FaNodeJs
  },

]

export const AllSkilsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
       {AllSkilIcon.map((item, index)=>{
              return <div key={index} className='flex flex-col items-center'>
                     <item.icon className='text-7xl text-orange'/>
                     <p className='text-center mt-4 text-white '>{item.skill}</p>
              </div>
       })}
    </div>
  )
}
