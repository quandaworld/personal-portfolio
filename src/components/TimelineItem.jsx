import React from 'react';

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-gray-200 dark:border-gray-700'>
      <li className='mb-10 ml-4'>
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-gray-900 bg-gray-900 dark:bg-white rounded-md'>
            {year}
          </span>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {duration}
          </div>
        </p>
        <p className='my-2 text-base font-normal text-gray-500 dark:text-gray-400'>
          {details}
        </p>
      </li>
    </ol>
  )
}

export default TimelineItem;