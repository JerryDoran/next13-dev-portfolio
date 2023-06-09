import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import Head from 'next/head';
import Items from '../components/Items';
import List from '../components/List';
import { projects } from '../data/projectData';
import { useState } from 'react';

import { motion } from 'framer-motion';

const navCategories = [
  'all',
  ...new Set(projects.map((project) => project.category)),
];

export default function ProjectsPage() {
  const [projectItems, setProjectItems] = useState(projects);
  const [categories, setCategories] = useState(navCategories);

  function filterItems(category) {
    if (category === 'all') {
      setProjectItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (project) => project.category === category
    );

    setProjectItems(newProjectItems);
  }
  return (
    <>
      <Head>
        <title>Doran Software | Projects Page</title>
        <meta name='description' content='Jerry Doran software projects' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Solutions to inspire your business!'
            className='sm:mb-12 mb-8 !text-4xl sm:!text-6xl'
          />
          <section className='portfolio section' id='work'>
            {/* <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <AnimatedText text='My Work' className='!mb-1 !text-violet-700' />
            </motion.div> */}

            <div>
              <List categories={categories} filterItems={filterItems} />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-2 grid'
              >
                <Items projectItems={projectItems} />
              </motion.div>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
