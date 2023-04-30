import React from 'react';
import { CircularText } from './global/Icons';

export default function HireMe() {
  return (
    <div className='fixed left-4 bottom-8 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className='fill-dark animate-spin' />
      </div>
    </div>
  );
}
