import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import { GithubIcon } from '@/components/global/Icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import project2 from '../../public/images/projects/portfolio-cover-image.jpg';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

function FeaturedProject({ type, title, summary, img, link, githubLink }) {
  console.log(link);
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-neutral-200 bg-light shadow-2xl p-12 dark:bg-dark dark:border-light/40 dark:shadow-neutral-600'>
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duaration: 0.2 }}
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='font-medium text-xl dark:text-light'>{type}</span>
        <Link href={link} target='_blank' className=''>
          <h2 className='m-2 w-full text-left text-4xl font-bold text-purple-800 transition duration-200 hover:text-purple-700 '>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-neutral-500 dark:text-light'>
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link
            href={githubLink}
            target='_blank'
            className='w-10 transition duration-200 hover:text-purple-700'
          >
            <GithubIcon />
          </Link>
          {/* <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-2 text-lg font-semibold'
          >
            Visit the Project
          </Link> */}
        </div>
      </div>
    </article>
  );
}

function Project({ title, img, link, githubLink }) {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-neutral-200 bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light/40 dark:shadow-neutral-600'>
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duaration: 0.2 }}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <Link href={link} target='_blank' className=''>
          <h2 className='m-2 w-full text-left text-3xl font-bold text-purple-800 transition duration-200 hover:text-purple-700 '>
            {title}
          </h2>
        </Link>
        {/* <p className='my-2 font-medium text-neutral-500'>{summary}</p> */}
        <div className='mt-2 flex items-center'>
          <Link
            href={githubLink}
            target='_blank'
            className='w-8 transition duration-200 hover:text-purple-700'
          >
            <GithubIcon />
          </Link>
          {/* <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-2 text-sm font-semibold transition duration-200 hover:bg-gray-700'
          >
            Project
          </Link> */}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Doran Software | Projects Page</title>
        <meta name='description' content='Jerry Doran software projects' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Imagination Meets Knowledge!' className='mb-16' />
          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Crypto Screener Application'
                link='/'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                type='Featured Project'
                githubLink='/'
                img={project1}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                link='/'
                type='Featured Project'
                githubLink='/'
                img={project1}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                link='/'
                type='Featured Project'
                githubLink='/'
                img={project1}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='React Portfolio Website'
                link='/'
                summary='A professional portfolio website using React JS, Framer-motion, and styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive.'
                type='Featured Project'
                githubLink='/'
                img={project2}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                link='/'
                type='Featured Project'
                githubLink='/'
                img={project1}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                link='/'
                type='Featured Project'
                githubLink='/'
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
