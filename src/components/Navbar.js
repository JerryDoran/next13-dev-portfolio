import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';

function CustomLink({ href, title, className = '' }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group transition duration-200 hover:text-purple-800`}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-purple-800 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <Logo />
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/articles' title='Articles' className='mx-4' />
        <CustomLink href='/contact' title='Contact Me' className='ml-4' />
      </nav>
    </header>
  );
}
