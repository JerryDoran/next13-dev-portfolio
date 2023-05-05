import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import Head from 'next/head';
import Image from 'next/image';
import about from '../../public/images/about.jpg';
import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';

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
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-2 text-lg font-bold uppercase text-dark/75'>
                About Me
              </h2>
              <p className='font-medium text-gray-500'>
                I am a self motivated and self driven software engineer with a
                passion for creating software solutions from ideas and
                perspective of others. I am constantly learning new skills and
                technologies to stay focused on current software development
                trends. I have many years of experience developing applications
                in enterprise settings. In the past several years I have
                specialized in web development to become a full stack software
                developer.
              </p>
              <p className='font-medium text-gray-500 mt-4'>
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0.5 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.2rem] bg-dark' />
              <Image
                src={about}
                alt='doran software'
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className='text-2xl font-medium capitalize text-dark/75'>
                  years of software experience
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-2xl font-medium capitalize text-dark/75'>
                  projects completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className='text-2xl font-medium capitalize text-dark/75'>
                  years of web and mobile development
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          {/* <Experience /> */}
        </Layout>
      </main>
    </>
  );
}

//
