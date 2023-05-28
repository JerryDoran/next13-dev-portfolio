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
import metaverse2 from '../../public/images/projects/metaverse-2.png';
import metaverse3 from '../../public/images/projects/metaverse-3.png';
import metaverse1 from '../../public/images/projects/metaverse-1.png';
import metaverse4 from '../../public/images/projects/metaverse-5.png';
import gym2 from '../../public/images/projects/business-gym-site.png';
import gym1 from '../../public/images/projects/gym-site-2.png';
import gym3 from '../../public/images/projects/gym-site-3.png';
import gym4 from '../../public/images/projects/gym-site-4.png';
import thanos1 from '../../public/images/projects/thanos-1.png';
import thanos2 from '../../public/images/projects/thanos-2.png';
import thanos3 from '../../public/images/projects/thanos-3.png';
import thanos4 from '../../public/images/projects/thanos-4.png';
import apple1 from '../../public/images/projects/ecommerce-apple-app.png';
import apple2 from '../../public/images/projects/apple-2.png';
import apple3 from '../../public/images/projects/apple-3.png';
import apple4 from '../../public/images/projects/apple-4.png';

export const projects = [
  {
    slug: 'thanos-music',
    img: ecommerce1,
    category: 'e-commerce',
    title: 'Thanos Music',
    description:
      'An easy to use ecommerce site to take care of all your electronic and music needs.',
    image1: thanos1,
    image2: thanos2,
    image3: thanos3,
    image4: thanos4,
    summary: 'Summary of Thanos Music',
    technologies: ['NextJS', 'Sanity CMS', 'Stripe', 'Javascript'],
  },
  {
    slug: 'metaverse',
    img: ui1,
    category: 'design',
    title: 'Explore the Metaverse',
    description:
      'Enjoy the virtual world of the metaverse through the use of state of the art VR devices.',
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
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
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
    summary: 'Summary of Entertainment Hub',
    technologies: ['', '', '', ''],
  },
  {
    slug: 'apple-commerce',
    img: ecommerce2,
    category: 'e-commerce',
    title: 'Apple Commerce',
    description:
      'Order new state of the art devices or browse for your favorite apple products.',
    image1: apple1,
    image2: apple2,
    image3: apple3,
    image4: apple4,
    summary: 'Summary of Apple Commerce',
    technologies: [
      'NextJS',
      'Javascript',
      'Redux Toolkit',
      'Stripe',
      'Sanity CMS',
      'Tailwind CSS',
    ],
  },
  {
    slug: 'fit-club',
    img: business1,
    category: 'business',
    title: 'Fit Club Gym',
    description:
      'Feel your best and perform at the level you want in our all inclusive fit club.',
    image1: gym1,
    image2: gym2,
    image3: gym3,
    image4: gym4,
    summary: 'Summary of The Fit Club',
    technologies: ['React', 'Chakra UI', 'Framer Motion', 'Javascript'],
  },
  {
    slug: 'mobile-one',
    img: 'https://images.unsplash.com/photo-1682685797365-41f45b562c0a?ixlib=rb-4.0.3&ixslug=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    category: 'mobile',
    title: 'Mobile One',
    description:
      'Coming soon a mobile app that will make your life so much more convenient.',
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
    summary: 'Summary of a Mobile App',
    technologies: ['', '', '', ''],
  },
  {
    slug: 'rosa-restaurant',
    img: business2,
    category: 'business',
    title: 'The Rosa Restaurant',
    description:
      'Enjoy fun times and delicious authentic food in a wonderful family environment.',
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
    summary: 'Summary of The Rosa',
    technologies: ['', '', '', ''],
  },
  {
    slug: 'next-gen-banking',
    img: ui2,
    category: 'design',
    title: 'Next Gen Banking',
    description:
      'Next generation banking is here in this easy to use new banking site of the future.',
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
    summary: 'Summary of Next Generation Banking',
    technologies: ['', '', '', ''],
  },
  {
    slug: 'crypto-tracker',
    img: business3,
    category: 'business',
    title: 'Crypto Tracker',
    description:
      'Track your favorite crypto currencies and save them to your user profile.',
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
    summary: 'Summary of Fitness Tracker',
    technologies: ['', '', '', ''],
  },
  {
    slug: 'twitter-clone',
    img: social1,
    category: 'design',
    title: 'Twitter Clone',
    description:
      'A clone of a popular social media app that exhibits attention to detail and design.',
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
    summary: 'Summary of Twitter Clone',
    technologies: ['', '', '', ''],
  },
  {
    slug: 'admin-dashboard-one',
    img: admin1,
    category: 'analytics',
    title: 'Admin Dashbord One',
    description:
      'Coming soon an admin dashboard tracking app for analyzing your business performance',
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
    summary: 'Summary of Admin Dashboard',
    technologies: ['', '', '', ''],
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
