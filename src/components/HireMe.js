import React from 'react';
import { CircularText } from './global/Icons';
import Link from 'next/link';

export default function HireMe() {
  return (
    <div className='absolute lg:left-0 lg:bottom-[150px] flex items-center justify-center overflow-hidden'>
      <div className='w-24 lg:w-48 h-auto flex items-center justify-center relative'>
        <CircularText className='fill-dark animate-spin-slow dark:fill-light' />
        <Link
          href='mailto:jerry-doran@hotmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-900 text-light shadow-md border border-solid border-violet-900 w-12 h-12 text-[10px] lg:text-[16px] lg:w-20 lg:h-20 rounded-full font-semibold transition duration-200 hover:bg-violet-800'
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
