import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import Head from 'next/head';

import ArticleList from '@/components/ArticleList';

export default function ArticlesPage() {
  return (
    <>
      <Head>
        <title>Doran Software | Articles Page</title>
        <meta name='description' content='Jerry Doran software projects' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light '>
        <AnimatedText text='Words Can Change The World!' className='mb-16' />
        {/* <ArticleList /> */}
      </main>
    </>
  );
}
