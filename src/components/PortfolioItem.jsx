import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, github }) {
  return (
    <div className='border-[1px] border-b-4 border-gray-900 dark:border-amber-50 rounded-lg overflow-hidden hover:-translate-y-0.5'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-auto md:h-48 object-cover cursor-pointer"
        />
      </a>
      <div className="w-full p-4">
        <div className="flex justify-between items-center mb-2 md:mb-3">
          <h3 className='text-lg md:text-xl dark:text-amber-50 font-semibold'>{title}</h3>
          <div className="flex space-x-2">
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <img 
                src="/assets/deployedSite.svg" 
                alt="Deployed Site" 
                className="dark:filter dark:brightness-0 dark:invert-[0.85] dark:sepia-[0.20] dark:saturate-[1000%] dark:hue-rotate-[340deg]"
                style={{ width: '1.2rem', height: '1.4rem' }} 
              />
            </a>
            {github && (
              <a href={github} target='_blank' rel='noopener noreferrer'>
                <img 
                  src="/assets/github.svg" 
                  alt="Github Repo" 
                  className="dark:filter dark:brightness-0 dark:invert-[0.85] dark:sepia-[0.20] dark:saturate-[1000%] dark:hue-rotate-[340deg]"
                  style={{ width: '1.3rem', height: '1.33rem' }} 
                />
              </a>
            )}
          </div>
        </div>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-xs dark:text-amber-50'>
          {stack.map((item, index) => (
            <span key={index} className='inline-block px-2 py-1 font-semibold border-[1px] border-gray-900 dark:border-amber-50 rounded-full'>
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default PortfolioItem;
