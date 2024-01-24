import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Quan N. Nguyen</h1>
      <p className="text-base md:text-xl mb-5 font-medium">Self-Taught Software Engineer</p>
      <div className="max-w-4xl grid grid-cols-1 mb-2 md:grid-cols-4 gap-y-5 md:gap-6">
        <img
          src='public/assets/portrait.jpg'
          alt="self-portrait"
          className="h-36 md:h-48 object-cover rounded-md justify-self-center border-2 border-gray-900 dark:border-white"
        />
        <div className='col-span-3'>
          <p className="text-sm mb-4 font-bold">As a self-taught developer with a passion for technology, I am eager to further expand my expertise and contribute to innovative projects in the world of software and mobile application development. As a former tax accountant, I am highly detail-oriented, organized, and have a logical mindset, which allows me to approach programming challenges in a systematic and efficient manner. My keen interest in problem-solving drives me to constantly acquire new skills and knowledge, making me a valuable addition to any development team.</p>
          <p className='text-sm mb-2 font-bold'>I am seeking opportunities to learn and grow in the field of software and mobile application development, and am committed to making meaningful contributions to cutting-edge projects.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro;