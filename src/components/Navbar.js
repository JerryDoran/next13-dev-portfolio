import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { MoonIcon, SunIcon } from './global/Icons';

function CustomLink({ href, title, className = '' }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group transition duration-200 hover:text-purple-800 dark:hover:text-purple-400`}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-purple-800 dark:bg-purple-400 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

export default function Navbar() {
  const { mode, setMode } = useThemeSwitcher();
  return (
    <header className='w-full px-32 font-medium flex items-center justify-between dark:text-light'>
      <Logo />
      <div>
        <h1 className='text-slate-400'>
          <span className='bg-purple-700 text-white px-2 py-1 rounded-full text-xl'>
            D
          </span>
          oran{' '}
          <span className='bg-purple-700 text-white px-2.5 py-1 rounded-full text-xl'>
            S
          </span>
          oftware
        </h1>
      </div>
      <nav className='hidden lg:flex'>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/articles' title='Articles' className='mx-4' />
        <CustomLink href='/contact' title='Contact Me' className='ml-4' />
      </nav>
      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className={`ml-3 flex items-center justify-center rounded-full p-1  ${
          mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark '
        }`}
      >
        {mode === 'dark' ? (
          <SunIcon className='fill-dark' />
        ) : (
          <MoonIcon className='fill-light' />
        )}
      </button>
    </header>
  );
}
