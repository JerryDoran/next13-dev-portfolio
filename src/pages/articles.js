import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import articleOne from '../../public/images/articles/pagination component in reactjs.jpg';
import articleTwo from '../../public/images/articles/create loading screen in react js.jpg';
import articleThree from '../../public/images/articles/create modal component in react using react portals.png';
import { motion } from 'framer-motion';

// This is how to use framer motion for a component from a library
const FramerImage = motion(Image);

function FeaturedArticle({ img, title, time, summary, link }) {
  return (
    <li className='col-span-1 w-full p-4 bg-light border border-solid border-neutral-200 rounded-2xl shadow-2xl'>
      <Link
        href={link}
        target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto rounded-2xl'
          whileHover={{ scale: 1.05 }}
          transition={{ duaration: 0.2 }}
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-xl font-bold my-2 mt-4 text-purple-800 transition duration-200 hover:text-purple-600'>
          {title}
        </h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-neutral-400 font-semibold text-xs'>{time}</span>
    </li>
  );
}

function Article({ img, title, date, link }) {
  return (
    <li className='relative w-full p-4 py-6 my-4 flex items-center justify-between bg-light border border-solid border-neutral-200 rounded-2xl shadow-2xl first:mt-0'>
      <Link href={link} target='_blank'>
        <h2 className='w-[70%] capitalize text-xl font-bold my-2 mt-4 text-purple-800 transition duration-200 hover:text-purple-600'>
          {title}
        </h2>
      </Link>
      <span className='text-neutral-400 font-semibold text-xs pl-4'>
        {date}
      </span>
    </li>
  );
}

export default function ArticlesPage() {
  return (
    <>
      <Head>
        <title>Doran Software | Projects Page</title>
        <meta name='description' content='Jerry Doran software projects' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text='Words Can Change The World!' className='mb-16' />
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              summary='Learn how to build a custom pagination component in ReactJS from scratch.
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              time='9 min read'
              link='/'
              img={articleOne}
            />
            <FeaturedArticle
              title='Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens'
              summary='Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
              Improve the user experience.'
              time='10 min read'
              link='/'
              img={articleTwo}
            />
          </ul>
          <h2 className='font-bold text-3xl w-full text-center my-16 mt-32'>
            All Articles
          </h2>
          <ul>
            <Article
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              img={articleThree}
              date='May 6, 2023'
              link='/'
            />
            <Article
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              img={articleThree}
              date='May 6, 2023'
              link='/'
            />
            <Article
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              img={articleThree}
              date='May 6, 2023'
              link='/'
            />
            <Article
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              img={articleThree}
              date='May 6, 2023'
              link='/'
            />
            <Article
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              img={articleThree}
              date='May 6, 2023'
              link='/'
            />
            <Article
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              img={articleThree}
              date='May 6, 2023'
              link='/'
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
