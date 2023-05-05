import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import { GithubIcon } from '@/components/global/Icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import project2 from '../../public/images/projects/portfolio-cover-image.jpg';

function FeaturedProject({ type, title, summary, img, link, githubLink }) {
  console.log(link);
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className=''>
          <h2 className='m-2 w-full text-left text-4xl font-bold text-purple-800 transition duration-200 hover:text-purple-700 '>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-neutral-500'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={link} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-2 text-lg font-semibold'
          >
            Visit the Project
          </Link>
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
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
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
            <div className='col-span-6'>Project-1</div>
            <div className='col-span-6'>Project-2</div>
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
            <div className='col-span-6'>Project-1</div>
            <div className='col-span-6'>Project-2</div>
          </div>
        </Layout>
      </main>
    </>
  );
}
