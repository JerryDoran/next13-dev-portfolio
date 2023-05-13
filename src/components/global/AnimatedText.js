import { motion } from 'framer-motion';

const quoteVariant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      staggerChildren: 2,
    },
  },
};

const singleWordVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export default function AnimatedText({ text, className = '' }) {
  return (
    <div className='w-full mx-auto py-0 sm:py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1
        variants={quoteVariant}
        initial='initial'
        animate='animate'
        className={`inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light ${className}`}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            variants={singleWordVariant}
            key={`word-${index}`}
            className='inline-block'
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
