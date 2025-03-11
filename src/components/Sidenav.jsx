import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute h-6 w-6 top-4 right-4 z-[99] md:hidden cursor-pointer'/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center gap-6 z-20'>
            <a href="#intro" className='w-[30%] flex justify-center rounded-lg shadow-lg bg-gray-100 shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <span className='text-gray-900 font-bold'>About Me</span>
            </a>
            <a href="#intro" className='w-[30%] flex justify-center rounded-lg shadow-lg bg-gray-100 shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <span className='text-gray-900 font-bold'>Projects</span>
            </a>
            <a href="#intro" className='w-[30%] flex justify-center rounded-lg shadow-lg bg-gray-100 shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <span className='text-gray-900 font-bold'>Timeline</span>
            </a>
            <a href="#intro" className='w-[30%] flex justify-center rounded-lg shadow-lg bg-gray-100 shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <span className='text-gray-900 font-bold'>Resume</span>
            </a>
            <a href="#intro" className='w-[30%] flex justify-center rounded-lg shadow-lg bg-gray-100 shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <span className='text-gray-900 font-bold'>Contact</span>
            </a>
          </div>
        )
        : (
          <div></div>
        )
      }
    </div>
  )
}

export default Sidenav