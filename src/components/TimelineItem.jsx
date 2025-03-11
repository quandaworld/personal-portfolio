import React from 'react';

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-gray-300 dark:border-gray-400'>
      <li className='mb-10 ml-4'>
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 dark:bg-gray-400"/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-gray-900 bg-gray-900 dark:bg-amber-100 rounded-md'>
            {year}
          </span>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-amber-50'>
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
            {duration}
          </div>
        </p>
        <p className='my-2 text-sm font-extralight text-gray-900 dark:text-amber-50'>
          {details}
        </p>
      </li>
    </ol>
  )
}

export default TimelineItem;