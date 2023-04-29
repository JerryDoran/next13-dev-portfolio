import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/components/global/AnimatedText';
import { motion } from 'framer-motion';

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
      <main className='flex items-center text-dark w-full m-h-screen'>
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
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
