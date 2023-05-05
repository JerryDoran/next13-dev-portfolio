import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

function Details({ position, company, time, work, address }) {
  const circleRef = useRef(null);
  return (
    <li
      ref={circleRef}
      className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'
    >
      <LiIcon reference={circleRef} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl text-dark'>
          {position} {company}
        </h3>
        <span className='capitalize font-medium text-dark/50'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </motion.div>
    </li>
  );
}

export default function Experience() {
  const scrollRef = useRef();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div ref={scrollRef} className='w-[75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position='Software Engineer'
            company='Google'
            time='2022-Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and elevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position='Intern'
            company='Facebook'
            time='Summer 2021'
            address='Menlo Park, CA.'
            work='Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                  share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.'
          />
          <Details
            position='Intern'
            company='Facebook'
            time='Summer 2021'
            address='Menlo Park, CA.'
            work='Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                  share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.'
          />
          <Details
            position='Intern'
            company='Facebook'
            time='Summer 2021'
            address='Menlo Park, CA.'
            work='Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                  share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.'
          />
          <Details
            position='Intern'
            company='Facebook'
            time='Summer 2021'
            address='Menlo Park, CA.'
            work='Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                  share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.'
          />
        </ul>
      </div>
    </div>
  );
}
