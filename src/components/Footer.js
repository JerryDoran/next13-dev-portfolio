import Link from 'next/link';
import Layout from './Layout';

export default function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-gray-200 dark:border-neutral-700 text-gray-400 font-medium text-xs'>
      <Layout className='!py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          Build with <Link href='/'>Doran Software</Link>
        </div>
      </Layout>
    </footer>
  );
}
