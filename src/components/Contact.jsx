import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form 
          action="https://getform.io/f/5e14d77e-44d9-46b9-83f6-c3b5f8514e9a"
          method="POST"
          className='flex flex-col w-full md:w-7/12 font-extralight'
        >
          <Title>connect</Title>
          <input 
            type="text"
            name="name"
            placeholder='name'
            className='p-2 bg-transparent border-[1.5px] border-gray-300 dark:border-gray-400 rounded-md focus:outline-none'
          />
          <input 
            type="text"
            name="email"
            placeholder='email'
            className='my-2 p-2 bg-transparent border-[1.5px] border-gray-300 dark:border-gray-400 rounded-md focus:outline-none'
          />
          <textarea 
            name="message" 
            placeholder='message'  
            rows="10"
            className='p-2 mb-4 bg-transparent border-[1.5px] border-gray-300 dark:border-gray-400 rounded-md focus:outline-none'
          />
          <button
            type='submit'
            className='text-center inline-block px-8 py-[10px] w-max text-base font-normal rounded-md text-gray-900 bg-lime-300 hover:bg-lime-500'
          >
            letschat!
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;