import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import articleOne from '../../public/images/articles/pagination.jpg';
import articleTwo from '../../public/images/articles/create-loading-screen.jpg';
import articleThree from '../../public/images/articles/form-validation.png';
import articleFour from '../../public/images/articles/smooth-scrolling.png';
import articleFive from '../../public/images/articles/todo-framer-motion.png';
import articleSix from '../../public/images/articles/redux.png';
import articleSeven from '../../public/images/articles/higher-order-components.jpg';
import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

// This is how to use framer motion for a component from a library
const FramerImage = motion(Image);

function FeaturedArticle({ img, title, time, summary, link }) {
  return (
    <li className='col-span-1 w-full p-4 bg-light border border-solid border-neutral-200 rounded-2xl shadow-2xl dark:bg-dark dark:border-neutral-500'>
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
          priority
          sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-xl font-bold my-2 mt-4 text-violet-700 transition duration-200 hover:text-violet-600'>
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
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 flex items-center justify-between bg-light border border-solid border-neutral-200 rounded-2xl shadow-2xl first:mt-0 dark:bg-dark dark:border-neutral-500'
    >
      <MovingImage title={title} img={img} link={link} />
      <span className='text-neutral-400 font-semibold text-xs pl-4'>
        {date}
      </span>
    </motion.li>
  );
}

function MovingImage({ title, img, link }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  function handleMouse(e) {
    imageRef.current.style.display = 'inline-block';
    x.set(e.pageX);
    y.set(-10);
  }

  function handleMouseLeave(e) {
    imageRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='w-[90%] capitalize text-xl font-bold my-2 mt-4 text-violet-700 transition duration-200 hover:text-violet-600'>
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imageRef}
        src={img}
        alt={title}
        className='z-10 w-96 h-auto hidden absolute rounded-lg'
        priority
      />
    </Link>
  );
}

export default function ArticlesPage() {
  return (
    <>
      <Head>
        <title>Doran Software | Projects Page</title>
        <meta name='description' content='Jerry Doran software projects' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light '>
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
              title='Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers'
              img={articleFour}
              date='May 6, 2023'
              link='/'
            />
            <Article
              title='Build A Fabulous Todo List App With React, Redux And Framer-Motion'
              img={articleFive}
              date='May 6, 2023'
              link='/'
            />
            <Article
              title='Redux Simplified: A Guide For Web Developers'
              img={articleSix}
              date='May 6, 2023'
              link='/'
            />
            <Article
              title='What Is Higher Order Component (Hoc) In React?'
              img={articleSeven}
              date='May 6, 2023'
              link='/'
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
