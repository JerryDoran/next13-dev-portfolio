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

export const projects = [
  {
    id: 1,
    img: ecommerce1,
    category: 'e-commerce',
    title: 'Thanos Music',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 2,
    img: ui1,
    category: 'ui design',
    title: 'Explore the Metaverse',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 3,
    img: business4,
    category: 'business',
    title: 'Entertainment Hub',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 4,
    img: ecommerce2,
    category: 'e-commerce',
    title: 'Apple Commerce',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 5,
    img: business1,
    category: 'business',
    title: 'Fit Club Gym',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1682685797365-41f45b562c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    category: 'mobile apps',
    title: 'Test5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1682685797365-41f45b562c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    category: 'e-commerce',
    title: 'Test6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 8,
    img: business2,
    category: 'business',
    title: 'The Rosa Restaurant',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 9,
    img: ui2,
    category: 'ui design',
    title: 'Next Gen Banking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 10,
    img: business3,
    category: 'business',
    title: 'Crypto Tracker',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
  },
  {
    id: 11,
    img: social1,
    category: 'social',
    title: 'Twitter Close',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed est vitae sem porta tempus. Ut egestas vulputate lacus vel tempus. Proin tempus purus sapien, eu blandit est commodo vel.',
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
