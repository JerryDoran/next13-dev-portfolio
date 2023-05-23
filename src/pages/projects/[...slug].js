import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import ProjectDetails from '@src/components/ProjectDetails';
import Head from 'next/head';



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
          <ProjectDetails />
        </Layout>
      </main>
    </>
  );
}
