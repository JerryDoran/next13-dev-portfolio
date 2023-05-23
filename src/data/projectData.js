import { BiCodeAlt } from 'react-icons/bi';
import { RiStackFill } from 'react-icons/ri';
import { FaChartBar } from 'react-icons/fa';
import ecommerce1 from '../../public/images/projects/ecommerce-music-app.png';
import ecommerce2 from '../../public/images/projects/ecommerce-apple-app.png';
import ui1 from '../../public/images/projects/ui-design-metaverse.png';
import ui2 from '../../public/images/projects/ui-design-hoobank.png';
import business1 from '../../public/images/projects/business-gym-site.png';
import business2 from '../../public/images/projects/business-rosa.png';
import business3 from '../../public/images/projects/business-crypto-tracker.png';
import social1 from '../../public/images/projects/social-twitter-app.png';
import business4 from '../../public/images/projects/ui-movie-database.png';
import admin1 from '../../public/images/projects/admin-dash-one.png';

export const projects = [
  {
    slug: 'thanos-music',
    img: ecommerce1,
    category: 'e-commerce',
    title: 'Thanos Music',
    description:
      'An easy to use ecommerce site to take care of all your electronic and music needs.',
    summary: '',
    technologies: [],
  },
  {
    slug: 'metaverse',
    img: ui1,
    category: 'design',
    title: 'Explore the Metaverse',
    description:
      'Enjoy the virtual world of the metaverse through the use of state of the art VR devices.',
    summary: 'Summary of the Metaverse Project',
    technologies: ['React', 'Tailwind CSS', 'Javascript', 'Framer Motion'],
  },
  {
    slug: 'entertainment-hub',
    img: business4,
    category: 'business',
    title: 'Entertainment Hub',
    description:
      'Explore and browse your favorite movies and television shows in all in one place.',
  },
  {
    slug: 'apple-commerce',
    img: ecommerce2,
    category: 'e-commerce',
    title: 'Apple Commerce',
    description:
      'Order new state of the art devices or browse for your favorite apple products.',
    summary: '',
    technologies: [],
  },
  {
    slug: 'fit-club',
    img: business1,
    category: 'business',
    title: 'Fit Club Gym',
    description:
      'Feel your best and perform at the level you want in our all inclusive fit club.',
    summary: '',
    technologies: [],
  },
  {
    slug: 'mobile-one',
    img: 'https://images.unsplash.com/photo-1682685797365-41f45b562c0a?ixlib=rb-4.0.3&ixslug=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    category: 'mobile',
    title: 'Mobile One',
    description:
      'Coming soon a mobile app that will make your life so much more convenient.',
    summary: '',
    technologies: [],
  },
  {
    slug: 'rosa-restaurant',
    img: business2,
    category: 'business',
    title: 'The Rosa Restaurant',
    description:
      'Enjoy fun times and delicious authentic food in a wonderful family environment.',
    summary: '',
    technologies: [],
  },
  {
    slug: 'next-gen-banking',
    img: ui2,
    category: 'design',
    title: 'Next Gen Banking',
    description:
      'Next generation banking is here in this easy to use new banking site of the future.',
    summary: '',
    technologies: [],
  },
  {
    slug: 'crypto-tracker',
    img: business3,
    category: 'business',
    title: 'Crypto Tracker',
    description:
      'Track your favorite crypto currencies and save them to your user profile.',
    summary: '',
    technologies: [],
  },
  {
    slug: 'twitter-clone',
    img: social1,
    category: 'design',
    title: 'Twitter Clone',
    description:
      'A clone of a popular social media app that exhibits attention to detail and design.',
    summary: '',
    technologies: [],
  },
  {
    slug: 'admin-dashboard-one',
    img: admin1,
    category: 'analytics',
    title: 'Admin Dashbord One',
    description:
      'Coming soon an admin dashboard tracking app for analyzing your business performance',
    summary: '',
    technologies: [],
  },
];

export const services = [
  {
    id: 1,
    icon: <RiStackFill />,
    title: 'Full Stack Web Development',
    description:
      'Develop projects and solutions that involve database applications, building user interfaces, and website implementation using various technologies.',
  },
  {
    id: 2,
    icon: <BiCodeAlt />,
    title: 'Applications Development',
    description:
      'Translate user software requirements into workable programming code through the use of a variety of programming languages and technologies.',
  },
  {
    id: 3,
    icon: <FaChartBar />,
    title: 'Systems Development',
    description:
      'Design, test and implement new software applications through the development of customized systems, creation of database systems or third party software.',
  },
];
