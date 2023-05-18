import { motion } from 'framer-motion';
import { services } from './projectData';
import AnimatedText from './global/AnimatedText';

function Service({ title, icon, description }) {
  return (
    <div className='dark:bg-dark bg-light dark:text-light flex flex-col justify-center items-center gap-10 p-12 rounded-lg cursor-pointer shadow-lg dark:shadow-white/40 shadow-black/40 transition duration-200 hover:scale-[1.02] hover:shadow-violet-700 dark:hover:shadow-violet-500'>
      <div className='icon hover:text-violet-500'>{icon}</div>
      <h3 className='service-title'>{title}</h3>
      <p className='service-description'>{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div className='mb-[80rem] sm:mb-[20rem] md:mb-40 lg:mb-0'>
      <AnimatedText
        text='My Services'
        className='sm:mb-16 mb-8 !text-4xl sm:!text-6xl !mt-20'
      />
      <div
        className='w-full h-screen p-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10'
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
