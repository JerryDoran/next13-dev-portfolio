import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import Head from 'next/head';
import Image from 'next/image';
import about from '../../public/images/profile/jerryportfolio1-rmbg.png';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Services from '@/components/Services';

function AnimatedNumbers({ value }) {
  const numberRef = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(numberRef, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (numberRef.current && latest.toFixed(0) <= value) {
        numberRef.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={numberRef}></span>;
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Doran Software | About Page</title>
        <meta name='description' content='Jerry Doran software engineer' />
      </Head>
      <main className='flex w-full h-auto flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Purpose Fuels Passion!'
            className='sm:mb-16 mb-8 !text-4xl sm:!text-6xl'
          />
          <div className='grid w-full grid-cols-8 sm:gap-16 gap-8'>
            <div className='xl:col-span-3 md:col-span-4 col-span-8 flex flex-col items-start justify-start order-2 lg:order-none'>
              <h2 className='mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light'>
                About Me
              </h2>
              <p className='font-medium text-gray-500 dark:text-light'>
                I am a self motivated and self driven software engineer with a
                passion for creating software solutions from ideas and
                perspective of others. I am constantly learning new skills and
                technologies to stay focused on current software development
                trends. I have many years of experience developing applications
                in enterprise settings. In the past several years I have
                specialized in web development to become a full stack software
                developer.
              </p>
              <p className='font-medium text-gray-500 dark:text-light mt-4'>
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className='xl:col-span-3 md:col-span-4 col-span-8 relative h-max rounded-2xl border-2 border-solid border-neutral-300 shadow-xl bg-white p-4 dark:bg-neutral-300 dark:border-neutral-700 order-1 lg:order-none flex items-center justify-center'>
              {/* <div className='absolute top-[1px] -right-2.5 -z-10 w-[101%] h-[102%] rounded-[1.2rem] bg-dark' /> */}
              <Image
                src={about}
                alt='doran software'
                className='w-full h-[600px] object-cover rounded-2xl bg-black'
                priority
                sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            <div className='xl:col-span-2 col-span-8 flex xl:flex-col flex-row justify-between order-3'>
              <div className='flex flex-col justify-center xl:items-end items-center'>
                <span className='inline-block text-3xl sm:text-5xl font-bold dark:text-light'>
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className='md:text-xl text-sm xs:text-base sm:text-lg text-center font-medium capitalize text-dark/75 dark:text-light/70'>
                  years of experience
                </h2>
              </div>
              <div className='flex flex-col justify-center xl:items-end items-center'>
                <span className='inline-block text-3xl sm:text-5xl font-bold dark:text-light'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='md:text-xl text-sm xs:text-base sm:text-lg text-center font-medium capitalize text-dark/75 dark:text-light/70'>
                  projects completed
                </h2>
              </div>
              <div className='flex flex-col justify-center xl:items-end items-center'>
                <span className='inline-block text-3xl sm:text-5xl font-bold dark:text-light'>
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className='md:text-xl text-sm xs:text-base sm:text-lg text-center font-medium capitalize text-dark/75 dark:text-light/70'>
                  years of web / mobile
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Services />
          {/* <Experience /> */}
        </Layout>
      </main>
    </>
  );
}

//
