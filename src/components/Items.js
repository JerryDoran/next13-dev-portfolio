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
          key={projectItem.slug}
          className='w-full p-5 bg-light rounded-xl shadow-lg dark:bg-dark border border-white/20 dark:border-neutral-700 dark:shadow-white/10 -mt-5 mb-4'
        >
          <Link
            href={`/projects/${projectItem.slug}`}
            // target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-md'
          >
            <FramerImage
              src={projectItem.img}
              alt='some text'
              width={0}
              height={0}
              className='w-full h-auto'
              whileHover={{ scale: 1.05 }}
              transition={{ duaration: 0.2 }}
              priority
              sizes='100vw'
            />
          </Link>

          <span className='uppercase text-xs font-semibold text-dark dark:text-light'>
            {projectItem.category}
          </span>
          <div className='text-xl font-semibold text-violet-500 mb-4 mt-1'>
            {projectItem.title}
          </div>
          <p className='mb-6 text-sm md:text-base'>{projectItem.description}</p>

          <div className='flex items-center'>
            <Link
              href={`/projects/${projectItem.slug}`}
              className='flex items-center gap-1.5 transition duration-200 px-4 py-1 rounded-2xl text-sm dark:hover:bg-neutral-800 dark:hover:text-violet-500 hover:bg-neutral-300 hover:text-violet-600'
            >
              
              Read More
            </Link>
            {/* <a
              href='#'
              className='flex items-center gap-1.5 transition duration-200 px-4 py-1 rounded-2xl dark:hover:bg-neutral-800 dark:hover:text-violet-500 hover:bg-neutral-300 hover:text-violet-600'
            >
              <FaGithub />
              Code
            </a> */}
          </div>
        </div>
      ))}
    </>
  );
}
