'use client';

import ProjectDetails from '@/components/ProjectDetails';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';

import { useRouter } from 'next/router';

import Head from 'next/head';

export default function ProjectDetailsPage() {
  const router = useRouter();

  const { projectId } = router?.query;

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
            className='sm:mb-10 mb-8 mt-16 !text-4xl sm:!text-6xl'
          />
          <ProjectDetails projectId={projectId} />
        </Layout>
      </main>
    </>
  );
}
