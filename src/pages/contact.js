import ContactForm from '@/components/ContactForm';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/global/AnimatedText';
import Head from 'next/head';
import React from 'react';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Doran Software | About Page</title>
        <meta name='description' content='Jerry Doran software engineer' />
      </Head>
      <main className='flex w-full h-auto flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='How can I help?'
            className='sm:mb-2 mb-4 !text-4xl sm:!text-6xl'
          />
          <ContactForm />
        </Layout>
      </main>
    </>
  );
}
