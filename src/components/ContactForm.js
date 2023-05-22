/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);

  function wait() {
    return new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
  }

  async function sendEmail(e) {
    e.preventDefault();

    setIsLoading(true);

    wait();

    emailjs
      .sendForm(
        'service_3f6uv6g',
        'template_n02f609',
        form.current,
        'IE7ILYoQqrxWnvJkS'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          setIsLoading(false);
          toast.success('Your message has been sent', {
            theme: 'dark',
            hideProgressBar: true,
            transition: Slide,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <motion.div
        className='flex flex-col lg:flex-row border dark:border-2 dark:border-neutral-800 border-neutral-300 rounded-lg text-white shadow-xl dark:shadow-neutral-600'
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <img
          width={0}
          height={0}
          className='w-full h-[250px] lg:h-[500px] lg:w-[300px] object-cover lg:rounded-l-lg lg:rounded-t-none lg:rounded-tl-lg rounded-t-lg '
          src='https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
        />
        <form
          ref={form}
          className='w-full p-[40px] bg-transparent dark:text-white/50 text-gray-500'
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <label className='block mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='bg-transparent border border-neutral-400 dark:border-neutral-700 rounded-md w-full mb-4 h-[40px] px-4 box-border'
            type='text'
            name='user_name'
          />
          <label className='block mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='bg-transparent border border-neutral-400 dark:border-neutral-700 rounded-md w-full mb-4 h-[40px] px-4 box-border'
            type='email'
            name='user_email'
          />

          <label className='block mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            className='px-4 box-border w-full bg-transparent border border-neutral-400 dark:border-neutral-700 rounded-md py-2'
            rows={4}
            name='message'
          />

          <button
            className='w-[150px] mt-8 bg-violet-700 px-4 py-2 rounded-2xl transition duration-200 hover:bg-violet-600 text-white'
            type='submit'
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
