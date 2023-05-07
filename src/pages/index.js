import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import AnimatedText from '@/components/global/AnimatedText';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LinkArrow } from '../components/global/Icons';
import HireMe from '@/components/HireMe';

const paragraphVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const buttonVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1.5,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>My Dev Portfolio</title>
        <meta
          name='description'
          content="Jerry Doran's software developer portfolio"
        />
      </Head>
      <main className='relative flex items-center text-dark w-full m-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image
                src={profilePic}
                alt='doran software'
                className='w-full h-auto'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText
                className='!text-6xl !text-left mb-4 tracking-wide'
                text='Turning Vision Into Reality With Code And Design.'
              />
              <motion.p
                variants={paragraphVariant}
                initial='initial'
                animate='animate'
                className='leading-6'
              >
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in building
                inspiring business solutions.
              </motion.p>
              <motion.div
                variants={buttonVariant}
                initial='initial'
                animate='animate'
                className='flex items-center self-start mt-4 space-x-8'
              >
                <Link
                  href='/dummy.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  download={true}
                  className='flex items-center gap-2 bg-purple-900 text-light p-2.5 px-6 rounded-lg text-lg font-semibold tracking-wide transition duration-200 hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                >
                  Resume
                  <LinkArrow />
                </Link>
                <Link
                  href='mailto:jerry-doran@hotmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' text-lg font-medium tracking-wide underline '
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-20 bottom-[150px] inline-block'>
          <Image src={lightBulb} alt='doran software' className='w-24' />
        </div>
      </main>
    </>
  );
}
