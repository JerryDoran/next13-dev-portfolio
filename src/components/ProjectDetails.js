import Image from 'next/image';
import { projects } from '../data/projectData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiOpenproject } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { RiRadioButtonFill } from 'react-icons/ri';

// This is how to use framer motion for a component from a library
const FramerImage = motion(Image);

const gridVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.8,
    },
  },
};

export default function ProjectDetails({ projectId }) {
  const projectValue = projects.filter((project) => project.slug === projectId);

  const [project] = projectValue;

  return (
    <div>
      <motion.div
        className='grid grid-cols-6 gap-2 relative p-2 rounded-lg bg-gray-500 '
        variants={gridVariant}
        initial='initial'
        animate='animate'
      >
        <div className='w-full col-span-6 transition duration-200 overflow-hidden'>
          <FramerImage
            src={project?.image1}
            alt='project image'
            width={0}
            height={0}
            className='w-full h-[200px] object-cover brightness-50 rounded-lg'
            whileHover={{ scale: 1.05 }}
            transition={{ duaration: 0.2 }}
            priority
            sizes='100vw'
          />
        </div>
        <div className='hidden md:block w-full col-span-2 transition duration-200 overflow-hidden'>
          <FramerImage
            src={project?.image2}
            alt='project image'
            width={0}
            height={0}
            className='w-full h-[200px] object-cover rounded-lg'
            whileHover={{ scale: 1.05 }}
            transition={{ duaration: 0.2 }}
            priority
            sizes='100vw'
          />
        </div>

        <div className='hidden md:block w-full col-span-2 transition duration-200 overflow-hidden'>
          <FramerImage
            src={project?.image3}
            alt='project image'
            width={0}
            height={0}
            className='w-full h-[200px] object-cover rounded-lg'
            whileHover={{ scale: 1.05 }}
            transition={{ duaration: 0.2 }}
            priority
            sizes='100vw'
          />
        </div>

        <div className='hidden md:block w-full col-span-2 transition duration-200 overflow-hidden'>
          <FramerImage
            src={project?.image4}
            alt='project image'
            width={0}
            height={0}
            className='w-full h-[200px] object-cover rounded-lg'
            whileHover={{ scale: 1.05 }}
            transition={{ duaration: 0.2 }}
            priority
            sizes='100vw'
          />
        </div>

        <div className='absolute top-[120px] w-full left-[50px]'>
          <h2 className='py-2 sm:text-4xl text-light text-2xl font-bold tracking-wide -mb-2'>
            {project?.title}
          </h2>
        </div>
      </motion.div>
      <div className='mt-10'>
        <div className='p-2 grid md:grid-cols-5 gap-6 py-6'>
          <div className='col-span-4'>
            <p className='text-violet-600 text-2xl tracking-wider mb-3 text-semibold'>
              Project
            </p>
            <h2 className='text-3xl mb-3'>Overview</h2>
            <p className=''>{project?.summary}</p>
            <div className='flex items-center gap-3 mt-5 text-white'>
              <Link
                href={project?.demoLink || ''}
                target='_blank'
                rel='noopener'
                className='flex items-center gap-1.5 transition duration-200 px-4 py-1 rounded-2xl text-sm bg-violet-600 hover:bg-violet-700'
              >
                <SiOpenproject />
                Demo
              </Link>
              <Link
                href={project?.codeLink || ''}
                target='_blank'
                rel='noopener'
                className='flex items-center gap-1.5 transition duration-200 px-4 py-1 rounded-2xl text-sm bg-violet-600 hover:bg-violet-700'
              >
                <FaGithub />
                Code
              </Link>
            </div>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-lg dark:shadow-neutral-700 dark:border-neutral-700 rounded-xl border-2 p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Built With</p>
              {project?.technologies?.map((tech) => (
                <div key={tech} className=''>
                  <p className='text-gray-600 text-sm dark:text-gray-200 py-1 flex items-center gap-2'>
                    <RiRadioButtonFill className='p-0.5' /> {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Link href='/projects' className='text-gray-500 ml-4'>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
