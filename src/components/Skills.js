import { motion } from 'framer-motion';
import AnimatedText from './global/AnimatedText';

function Skill({ name, x, y }) {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold dark:text-light md:text-light md:bg-dark text-dark p-1.5 px-2 shadow-dark cursor-pointer absolute md:dark:text-dark md:dark:bg-light text-sm bg-transparent dark:bg-transparent'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <>
      <AnimatedText
        text='Skills'
        className='sm:mb-16 mb-8 !text-4xl sm:!text-6xl !mt-20'
      />
      <div className='w-full h-[50vh] lg:max-w-[1000px] lg:mx-auto lg:h-screen xs:h-[60vh] sm:h-[80vh] relative flex items-center justify-center rounded-full bg-circularLightSm dark:bg-circularDarkSm sm:bg-circularLightMd sm:dark:bg-circularDarkMd md:bg-circularLightLg md:dark:bg-circularDarkLg lg:bg-circularLight lg:dark:bg-circularDark'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light md:px-6 md:py-7 px-4 py-5 shadow-dark cursor-pointer dark:text-dark dark:bg-light text-xs md:text-base'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name='HTLM' x='-25vw' y='2vw' />
        <Skill name='Javascript' x='20vw' y='6vw' />
        <Skill name='ReactJS' x='-20vw' y='-15vw' />
        <Skill name='NextJS' x='-5vw' y='-10vw' />
        <Skill name='SQL' x='15vw' y='-12vw' />
        <Skill name='MongoDb' x='26vw' y='-5vw' />
        <Skill name='Firebase' x='0vw' y='20vw' />
        <Skill name='CSS' x='0vw' y='-20vw' />
        <Skill name='Postgres' x='-10vw' y='10vw' />
        <Skill name='TailwindCSS' x='18vw' y='18vw' />
      </div>
    </>
  );
}
