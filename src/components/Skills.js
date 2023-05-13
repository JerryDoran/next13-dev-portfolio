import { motion } from 'framer-motion';

function Skill({ name, x, y }) {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-2 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'
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
      <h2 className='font-bold text-6xl mt-40 w-full text-center dark:text-light'>
        Skills
      </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light'
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
