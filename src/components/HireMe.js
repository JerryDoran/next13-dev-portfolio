import React from 'react';
import { CircularText } from './global/Icons';
import Link from 'next/link';

export default function HireMe() {
  return (
    <div className='fixed left-4 bottom-8 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className='fill-dark animate-spin-slow' />
        <Link
          href='mailto:jerry-doran@hotmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-900 text-light shadow-md border border-solid border-purple-900 w-20 h-20 rounded-full font-semibold transition duration-200 hover:bg-purple-800'
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
