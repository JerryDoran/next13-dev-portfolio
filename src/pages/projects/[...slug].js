import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import Head from 'next/head';
import Image from 'next/image';
import metaverseOne from '@public/images/projects/metaverse-1.png';
import metaverseTwo from '@public/images/projects/metaverse-2.png';
import metaverseThree from '@public/images/projects/metaverse-3.png';
import metaverseFour from '@public/images/projects/metaverse-4.png';
import metaverseFive from '@public/images/projects/metaverse-5.png';

import { motion } from 'framer-motion';

// This is how to use framer motion for a component from a library
const FramerImage = motion(Image);

export default function ProjectDetailsPage() {
  return (
    <>
      <Head>
        <title>Doran Software | Project Details Page</title>
        <meta name='description' content='Jerry Doran software projects' />
      </Head>
      <main className='max-w-6xl mx-auto mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light '>
        <Layout className='!p-4'>
          <AnimatedText
            text='More about the Project'
            className='sm:mb-16 mb-8 !text-4xl sm:!text-6xl'
          />
          <div className=''>
            <div className='grid grid-cols-6 gap-2'>
              <div className='w-full col-span-6 transition duration-200 overflow-hidden'>
                <FramerImage
                  src={metaverseFour}
                  alt='project image'
                  width={0}
                  height={0}
                  className='w-full h-[200px] object-cover brightness-50'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duaration: 0.2 }}
                  priority
                  sizes='100vw'
                />
              </div>
              <div className='hidden md:block w-full col-span-2 transition duration-200 overflow-hidden'>
                <FramerImage
                  src={metaverseTwo}
                  alt='project image'
                  width={0}
                  height={0}
                  className='w-full h-[200px] object-cover'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duaration: 0.2 }}
                  priority
                  sizes='100vw'
                />
              </div>

              <div className='hidden md:block w-full col-span-2 transition duration-200 overflow-hidden'>
                <FramerImage
                  src={metaverseThree}
                  alt='project image'
                  width={0}
                  height={0}
                  className='w-full h-[200px] object-cover'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duaration: 0.2 }}
                  priority
                  sizes='100vw'
                />
              </div>

              <div className='hidden md:block w-full col-span-2 transition duration-200 overflow-hidden'>
                {' '}
                <FramerImage
                  src={metaverseFive}
                  alt='project image'
                  width={0}
                  height={0}
                  className='w-full h-[200px] object-cover'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duaration: 0.2 }}
                  priority
                  sizes='100vw'
                />
              </div>
            </div>
            <div className='mt-10'>Description</div>
          </div>
        </Layout>
      </main>
    </>
  );
}
