import React from 'react';

function Header() {
  return (
    <div className='bg-white shadow-md'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex space-x-4'>
            <a href='#' className='font-semibold text-gray-800 hover:text-gray-900'>Home</a>
            <a href='#' className='font-semibold text-gray-800 hover:text-gray-900'>Scheduler</a>
            <a href='#' className='font-semibold text-gray-800 hover:text-gray-900'>Planner</a>
            <a href='#' className='font-semibold text-gray-800 hover:text-gray-900'>Ramadan</a>
            <a href='#' className='font-semibold text-gray-800 hover:text-gray-900'>About</a>
          </div>
          <div className='flex space-x-4 md:space-x-6'>
            <span className='hidden md:inline-block font-semibold text-gray-800'>Now Time</span>
            <span className='hidden md:inline-block font-semibold text-red-500'>Current Location</span>
          </div>
          <button className='md:hidden text-gray-800'>
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
