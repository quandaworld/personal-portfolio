import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Quan N. Nguyen</h1>
      <p className="text-base md:text-xl mb-5 font-medium">Self-Taught Software Engineer</p>
      <div className="max-w-4xl grid grid-cols-1 mb-2 md:grid-cols-4 gap-y-5 md:gap-6">
        <img
          src='/assets/portrait.png'
          alt="self-portrait"
          className="h-36 md:h-48 object-cover rounded-md justify-self-center border-2 border-gray-900 dark:border-white"
        />
        <div className='col-span-3'>
          <p className="text-sm mb-4 font-bold">I’m a self-taught software engineer from San Diego, California. With a background in accounting, I am highly detail-oriented, organized, and have an analytical mindset, which allows me to approach programming challenges in a systematic and efficient manner.</p>
          <p className='text-sm mb-2 font-bold'>If you want to know more about me, my work, or if you want to offer me a lot of money so I can visit my animal friends in the safari park and the aquarium every week, feel free to contact me by scrolling to the bottom of this site.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro;