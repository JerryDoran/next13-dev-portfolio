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
      <main className='relative flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 -mt-10 sm:mt-0 lg:-mt-20'>
          <div className='flex items-center justify-between w-full flex-col lg:flex-row'>
            <div className='md:w-1/2 w-full'>
              <Image
                src={profilePic}
                alt='doran software'
                className='w-full h-auto md:inline-block'
                priority
                sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='lg:w-1/2 w-full xl:w-3/4 text-center lg:text-left flex flex-col items-center self-center'>
              <AnimatedText
                className='!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl !text-center lg:!text-left lg:!text-5xl xl:!text-6xl mb-4 tracking-wide'
                text='Turning Vision Into Reality With Code And Design.'
              />
              <motion.p
                variants={paragraphVariant}
                initial='initial'
                animate='animate'
                className='leading-6 mb-4 text-sm md:text-base'
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
                className='flex items-center lg:self-start mt-4 space-x-8 self-center'
              >
                <Link
                  href='/dummy.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  download={true}
                  className='flex items-center gap-2 bg-violet-900 text-light p-2.5 text-base md:px-6 rounded-lg md:text-lg font-semibold tracking-wide transition duration-200 hover:bg-violet-800'
                >
                  Resume
                  <LinkArrow />
                </Link>
                <Link
                  href='mailto:jerry-doran@hotmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' md:text-lg text-base font-medium tracking-wide underline transition duration-200 dark:hover:text-violet-500 hover:text-violet-700'
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-20 bottom-[150px] hidden lg:inline-block'>
          <Image src={lightBulb} alt='doran software' className='w-24' />
        </div>
      </main>
    </>
  );
}
