import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Meghana K.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm Bengaluru based <strong className="text-stone-100">Devops Engineer</strong>, currently working
        at <strong className="text-stone-100"> Apple </strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Yoga</strong>,
        playing   <strong className="text-stone-100">Table Tennis or Badminton</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100"> Places around</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m a DevOps Engineer with over 4 years of experience in the IT industry. I’ve worked extensively with technologies like Docker, Jenkins, Terraform, and Kubernetes. I’ve collaborated with multiple clients, built strong relationships, and consistently delivered to their expectations.
Beyond work, I enjoy practicing yoga, singing, and playing table tennis and badminton.`,
  aboutItems: [
    {label: 'Location', text: 'Bangalore,Karnataka', Icon: MapIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Travelling, Hiking', Icon: CalendarIcon},
    {label: 'Hobbies', text: 'Yoga, Singing, Table Tennis, Badminton', Icon: SparklesIcon},
    {label: 'Study', text: 'Visweshariah Technological Unviversity', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Apple, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Kannada',
        level: 10,
      },
    ],
  },
  {
    name: 'Devops Engineer',
    skills: [
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Jenkins CI CD',
        level: 9,
      },
      {
        name: 'Terraform',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 8,
      },
      {
        
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Observability Tools',
    skills: [
      {
        name: ' Prometheus',
        level: 9,
      },
      {
        name: 'Grafana',
        level: 9,
      },
      {
        name: 'OpenTelemetry',
        level        : 8,
      },
      {
        name: 'ELK Stack',
        level: 8,
      },
      {
        
        name: 'Grafana',
        level: 6,
        
      },
    ],
  },
  
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Meghana0976/drt_react_meghana',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2021',
    location: 'VTU University',
    title: 'Bachelors in Information and Technology',
   content: <p>Studied Computer Science and Information Technology and worked on variours projects , collaborated with team .</p>,
  },
  {
    date: 'April 2018',
    location: 'Christ Junior College',
    title: 'II PUC',
   content: <p>Completed 2nd puc in christ.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Aug 2025 - Present',
    location: 'Marthahalli Bangalore',
    title: 'Devops Engineer II',
    content: (
      <p>
      Worked as a DevOps Engineer focusing on CI/CD pipeline setup using Jenkins and containerization with Docker. 
      Contributed to infrastructure automation using Terraform and supported Kubernetes-based deployments
      </p>
    ),
  },
  {
    date: 'April 2023 - Jul 2025',
    location: 'Yelahanka Bangalore',
    title: 'Associate Software Engineer',
    content: (
      <p>
        Handled cloud infrastructure and deployment workflows, improving system reliability and scalability. 
        Collaborated closely with clients, resolved production issues, and ensured smooth release cycles.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'megha01gowda@gmail.com',
      href: 'megha01gowda@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bangalore Karnataka',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    
  
    {
      type: ContactType.Github,
      text: 'Meghana K',
      href: 'https://github.com/Meghana0976',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
