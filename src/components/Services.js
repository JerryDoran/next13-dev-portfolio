import { motion } from 'framer-motion';

function Service({ name }) {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-2 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
}

export default function Services() {
  return (
    <>
      <h2 className='font-bold text-6xl mt-40 w-full text-center dark:text-light'>
        My Services
      </h2>
      <div className='w-full h-screen relative flex items-center justify-center'>
        <Service name='Website Development' />
      </div>
    </>
  );
}
