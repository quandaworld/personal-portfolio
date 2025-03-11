import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col pt-20 mb-20">
      <h1 className="text-4xl md:text-7xl dark:text-amber-100 mb-1 md:mb-3 font-semibold">Quan Nguyen</h1>
      <p className="text-base md:text-xl dark:text-lime-300 mb-5 font-normal">I am
        <TypeAnimation
          sequence={[
            ' a software developer',
            1000,
            ' a food enthusiast',
            1000,
            ' a problem solver',
            1000,
            ' a animal',
            2500,
            ' an animal lover',
            1000,
            ' an idea realizer',
            1000,
            ' an amateur gamer',
            1000,
            ' an avid learner',
            1000,
            ' self-taught',
            1000,
          ]}
          wrapper="span"
          speed={150}
          repeat={Infinity}
        />
      </p>
      <div className="max-w-4xl grid grid-cols-1 mt-8 mb-2 md:grid-cols-4 gap-y-5 md:gap-6">
        <img
          src="/assets/portrait.png"
          alt="self-portrait"
          className="h-40 md:h-52 object-cover rounded-full justify-self-center border-[1.5px] border-gray-900 dark:border-amber-50"
        />
        <div className="col-span-3 self-center">
          <p className="text-sm mb-4 font-extralight dark:text-amber-50">Welcome to my personal playground, where I apply what I learn to create experiments that are fun and cool!</p>
          <p className="text-sm mb-4 font-extralight dark:text-amber-50">I believe that programming can be both <span className='font-semibold'>organized</span> and <span className='font-semibold text-red-500'>c</span><span className='font-semibold text-green-500'>r</span><span className='font-semibold text-yellow-500'>e</span><span className='font-semibold text-blue-500'>a</span><span className='font-semibold text-purple-500'>t</span><span className='font-semibold text-cyan-500'>i</span><span className='font-semibold text-amber-600'>v</span><span className='font-semibold text-emerald-500'>e</span>. With a highly detail-oriented and methodical nature, I actively seek solutions that nurture creativity.</p>
          <p className="text-sm mb-2 font-extralight dark:text-amber-50">If you want to know more about me or offer me a lot of money so I can visit my animal friends in the safari park and the aquarium every week, feel free to contact me by scrolling to the bottom of this site.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro;