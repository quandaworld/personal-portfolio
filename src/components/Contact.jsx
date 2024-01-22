import React from 'react';

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form 
          action="https://getform.io/f/5e14d77e-44d9-46b9-83f6-c3b5f8514e9a"
          method="POST"
          className='flex flex-col w-full md:w-7/12'
        >
          <input 
            type="text"
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input 
            type="text"
            name='email'
            placeholder='Email'
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <textarea 
            name="message" 
            placeholder='Message'  
            rows="10"
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <button
            type='button'
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white'
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;