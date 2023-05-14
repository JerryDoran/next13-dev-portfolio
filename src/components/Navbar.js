import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

function CustomLink({ href, title, className = '' }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group transition duration-200 hover:text-violet-800 dark:hover:text-violet-400`}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-violet-800 dark:bg-violet-400 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

function MobileLink({ href, title, className = '', toggle }) {
  const router = useRouter();

  function handleClick() {
    toggle();
    router.push(href);
  }

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group transition duration-200 text-light hover:text-violet-800 dark:hover:text-violet-400 my-4 text-lg`}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-violet-800 dark:bg-violet-400 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
}

export default function Navbar() {
  const { mode, setMode } = useThemeSwitcher();
  const [open, setOpen] = useState(false);

  function handleMenuToggle() {
    setOpen(!open);
  }
  return (
    <header className='w-full px-8 md:px-12 lg:px-16 xl:px-32 font-medium flex items-center justify-between dark:text-light relative pt-8 z-10'>
      <Logo />
      <div className='hidden xl:flex'>
        {/* <h1 className='text-slate-400'>
          <span className='bg-violet-700 text-white px-2 py-1 rounded-full text-xl'>
            D
          </span>
          oran{' '}
          <span className='bg-violet-700 text-white px-2.5 py-1 rounded-full text-xl'>
            S
          </span>
          oftware
        </h1> */}
      </div>
      <nav className='hidden lg:flex'>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About Me' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        {/* <CustomLink href='/articles' title='Articles' className='mx-4' /> */}
        <CustomLink href='/contact' title='Contact Me' className='ml-4' />
      </nav>

      {/* Mobile Menu */}
      {open ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className='min-w-[60vw] flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-dark/75 rounded-lg backdrop-blur-lg py-20'
        >
          <nav className='flex flex-col items-center justify-center'>
            <MobileLink
              href='/'
              title='Home'
              className=''
              toggle={handleMenuToggle}
            />
            <MobileLink
              href='/about'
              title='About Me'
              className=''
              toggle={handleMenuToggle}
            />
            <MobileLink
              href='/projects'
              title='Projects'
              className=''
              toggle={handleMenuToggle}
            />
            {/* <MobileLink href='/articles' title='Articles' className='mx-4' /> */}
            <MobileLink
              href='/contact'
              title='Contact Me'
              className=''
              toggle={handleMenuToggle}
            />
          </nav>
        </motion.div>
      ) : null}

      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className={`flex items-center justify-center rounded-full p-1  ${
          mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark '
        }`}
      >
        {mode === 'dark' ? (
          <BsSunFill className='fill-dark' />
        ) : (
          <BsMoonStarsFill className='fill-light' />
        )}
      </button>

      {/* Hamburger Menu */}
      <button
        className='flex-col justify-center items-center lg:hidden'
        onClick={handleMenuToggle}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? 'rotate-45 translate-y-1' : '-translate-y-1'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            open ? 'opacity-0' : 'opacity - 100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? '-rotate-45 -translate-y-1' : 'translate-y-1'
          }`}
        ></span>
      </button>
    </header>
  );
}
