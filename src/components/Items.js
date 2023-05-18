import { FaGithub } from 'react-icons/fa';
import { SiOpenproject } from 'react-icons/si';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// This is how to use framer motion for a component from a library
const FramerImage = motion(Image);

export default function Items({ projectItems }) {
  return (
    <>
      {projectItems.map((projectItem) => (
        <div
          key={projectItem.id}
          className='w-full p-5 bg-light border border-solid border-neutral-200 rounded-2xl shadow-2xl dark:bg-dark dark:border-neutral-500'
        >
          <Link
            href='#'
            target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
          >
            <FramerImage
              src={projectItem.img}
              alt='some text'
              width={1}
              height={1}
              className='w-full h-auto rounded-2xl'
              whileHover={{ scale: 1.05 }}
              transition={{ duaration: 0.2 }}
              priority
              sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw'
            />
          </Link>

          <span className='uppercase text-xs font-semibold text-dark dark:text-light'>
            {projectItem.category}
          </span>
          <div className='text-xl font-semibold text-violet-500 mb-4 mt-1'>
            {projectItem.title}
          </div>
          <p className='mb-6'>{projectItem.description}</p>

          <div className='flex items-center'>
            <a
              href='#'
              className='flex items-center gap-1.5 transition duration-200 px-4 py-1 rounded-2xl dark:hover:bg-neutral-800 dark:hover:text-violet-500 hover:bg-neutral-300 hover:text-violet-600'
            >
              <SiOpenproject />
              Project
            </a>
            <a
              href='#'
              className='flex items-center gap-1.5 transition duration-200 px-4 py-1 rounded-2xl dark:hover:bg-neutral-800 dark:hover:text-violet-500 hover:bg-neutral-300 hover:text-violet-600'
            >
              <FaGithub />
              Code
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
