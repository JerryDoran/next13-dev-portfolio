import { useState } from 'react';
import { motion } from 'framer-motion';

export default function List({ categories, filterItems }) {
  const [active, setActive] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className='flex justify-center space-x-4 m-[60px] mt-5 flex-wrap gap-y-2'
    >
      {categories.map((category, index) => (
        <button
          className={`${
            active === index
              ? 'bg-violet-500 py-1 px-2 rounded-xl text-xs sm:text-sm font-semibold relative transition duration-200 ease-linear uppercase tracking-wide'
              : 'text-xs sm:text-sm font-semibold relative transition duration-200 ease-linear uppercase tracking-wide hover:text-violet-500 '
          }`}
          key={index}
          onClick={() => {
            setActive(index);
            filterItems(category);
          }}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
