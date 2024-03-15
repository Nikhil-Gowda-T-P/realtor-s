import React from 'react'
import { Text } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';


export default function Header() {
  return (
    <header className='bg-[#121212] shadow-xl'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-[#FFFFFF]'>Realtors</span>
          <span className='text-[#382bf0]'>.io</span>
        </h1>
      </Link>
      <form
        
        className='bg-[#282828] p-3 rounded-lg flex items-center'
      >
        <input
          type='text'
          placeholder='Search...'
          className='h-6  bg-[#282828] focus:outline-none w-48 sm:w-64 text-white'
          
        />
        <button>
          <FaSearch className='text-white' />
        </button>
      </form>
      <ul className='flex gap-10'>
        <Link to='/'>
          <li className='hidden sm:inline text-[#FFFFFF] hover:underline'>
            Home
          </li>
        </Link>
        <Link to='/about'>
          <li className='hidden sm:inline text-[#FFFFFF] hover:underline'>
            About
          </li>
        </Link>
        <Link to='/signup'>
          
            <li className=' text-[#FFFFFF] hover:underline'> Sign in</li>
          
        </Link>
      </ul>
    </div>
  </header>
);
  
}
