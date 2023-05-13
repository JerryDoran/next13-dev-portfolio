import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className='flex items-center justify-center'>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href='/'>
          <Image src='/images/ds-logo.png' alt='logo' width={60} height={60} />
        </Link>
      </motion.div>

      <p className='lg:text-lg ml-3'>Doran Sofware</p>
    </div>
  );
}
