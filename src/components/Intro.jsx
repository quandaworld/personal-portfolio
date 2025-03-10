import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-semibold">quan nguyen</h1>
      <p className="text-base md:text-xl mb-5 font-semibold">i am
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
      <div className="max-w-4xl grid grid-cols-1 mb-2 md:grid-cols-4 gap-y-5 md:gap-6">
        <img
          src='/assets/portrait.png'
          alt="self-portrait"
          className="h-40 md:h-52 object-cover rounded-full justify-self-center border-2 border-gray-900 dark:border-white"
        />
        <div className='col-span-3 self-center'>
          <p className="text-sm mb-4 font-">i’m a self-taught software developer from san diego, california. with a background in accounting, i am highly detail-oriented, organized, and have an analytical mindset, which allows me to approach programming challenges in a systematic and efficient manner.</p>
          <p className='text-sm mb-2 font-'>if you want to know more about me, my work, or if you want to offer me a lot of money so i can visit my animal friends in the safari park and the aquarium every week, feel free to contact me by scrolling to the bottom of this site.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro;