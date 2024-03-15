import React from 'react'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 text-white'>Sign Up</h1>
      <form  className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='p-3 rounded-lg bg-[#282828] text-white'
          id='username'
         
        />
        <input
          type='email'
          placeholder='email'
          className='p-3 rounded-lg bg-[#282828] text-white'
          id='email'
          
        />
        <input
          type='password'
          placeholder='password'
          className='p-3 rounded-lg bg-[#282828] text-white'
          id='password'
          
        />

        <button
          
          className='bg-[#382bf0] text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>SiGN UP
        
          
        </button>
        
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-white'>Have an account?</p>
        
          <span className='text-blue-700'>Sign in</span>
       
      </div>

    </div>
  );
}
 
