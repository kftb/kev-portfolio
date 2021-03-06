import { Chip } from '@material-ui/core';
import { nanoid } from 'nanoid';
import { graphql, useStaticQuery } from 'gatsby';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Kevin.',
  subtitle: '',
  cta: 'straight to resume',
};

// ABOUT DATA
export const aboutData = {
  img: 'kev.png',
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   cat: 'pm',
  //   img: 'project.jpg',
  //   title: 'Product Management for Healthcare app',
  //   info:
  //     'This project was focused to build a SEO-optimized, mobile-friendly webpage for a speech therapy office in Albstadt, Germany.',
  //   info2:
  //     'The website was planned in Figma and programmed from scratch with Gatsby/React to provide a better learning experience. The page is hosted on Netlify as the page itself will only change rarely.',

  //   url: '',
  //   tag1: 'Professional',
  //   tag2: 'Product Management',
  //   tag3: 'Analytics',
  //   slug: 'pm/healthcare',
  //   repo: '', // if no repo, the button will not show up
  //   figma: '',
  // },
  {
    id: nanoid(),
    cat: 'pm',
    img: 'kmc_header.png',
    title: 'Kellogg MyCourses: A better way to plan classes',
    info:
      'Picking classes during an MBA is a stressful exercise as historic data meets a plethora of options. Kellogg MyCourses was designed to provide an aggregated data view that makes class comparison easy.',
    info2: 'The website was planned in Figma, built in React with data wrangled in R',

    url: 'https://kftb.github.io/k_mycourses',
    tag1: 'Academic',
    tag2: 'Full PM journey',
    tag3: 'React',
    slug: 'pm/kmycourses',
    repo: '', // if no repo, the button will not show up
    figma:
      'https://www.figma.com/proto/VJFw4lqtoYAmpMTNvV3L14/Kellogg-My-Courses?node-id=206%3A39&viewport=394%2C343%2C0.3430800139904022&scaling=min-zoom',
  },
  // {
  //   id: nanoid(),
  //   cat: 'pm',
  //   img: 'rocket.png',
  //   title: 'Rocket: Trend aggregation for trading',
  //   info:
  //     'This project was focused to build a SEO-optimized, mobile-friendly webpage for a speech therapy office in Albstadt, Germany.',
  //   info2:
  //     'The website was planned in Figma and programmed from scratch with Gatsby/React to provide a better learning experience. The page is hosted on Netlify as the page itself will only change rarely.',

  //   url: '',
  //   tag1: 'Academic',
  //   tag2: 'User discovery',
  //   tag3: 'Prototyping',
  //   slug: 'pm/rocket',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  //   figma: '',
  // },
  {
    id: nanoid(),
    cat: 'tech',
    img: 'logoalbstadt.png',
    title: 'Logo Albstadt: Speech therapy office website',
    info:
      'This project was focused to build a SEO-optimized, mobile-friendly webpage for a speech therapy office in Albstadt, Germany.',
    info2:
      'The website was planned in Figma and programmed from scratch with Gatsby/React to provide a better learning experience. The page is hosted on Netlify as the page itself will only change rarely.',
    slug: 'tech/logoalbstadt',
    tag1: 'Design',
    tag2: 'Wireframes',
    tag3: 'React/Gatsby',
    url: 'https://logoalbstadt.netlify.app',
    repo: 'https://github.com/kftb/logo-albstadt', // if no repo, the button will not show up
    figma:
      'https://www.figma.com/proto/igYBO1ccqZnScUg6qMNZBo/Logo-Albstadt?node-id=80%3A180&viewport=-57%2C116%2C0.22711579501628876&scaling=min-zoom',
  },
  {
    id: nanoid(),
    cat: 'tech',
    img: 'webquest_logo.png',
    title: 'WebQuest: A silly game to deliver gifts with riddles',
    info: 'A first foray into JavaScript two years ago brought me to develop this mini game.',
    info2:
      'WebQuest is the result of my experimentation with PhaserJS, and an attempt of building a mini-game in which players are asked to solve five riddles, all embedded in a cute 8bit graphics style. ',
    slug: 'tech/webquest',
    tag1: 'Game Design',
    tag2: 'Javascript',
    tag3: 'Full development',
    url: 'https://kftb.github.io/webquest/',
    repo: 'https://github.com/kftb/webquest/', // if no repo, the button will not show up
    figma: '',
  },
  // {
  //   id: nanoid(),
  //   cat: 'tech',
  //   img: 'logoalbstadt.png',
  //   title: 'WebQuest: A mini-game to deliver gifts via riddles',
  //   info:
  //     'This little project was the result of a desire to experiment with Phaser as well as the idea to deliver a birthday gift via riddles embedded into a little mini-game.',
  //   info2:
  //     'The result of this effort is WebQuest, a horribly hacky foray into Javascript and JS-based games and game design in general.',
  //   slug: 'tech/webquest',
  //   tag1: 'Leisure',
  //   tag2: 'Programming',
  //   tag3: 'Game Design',
  //   url: 'https://logoalbstadt.netlify.app',
  //   repo: 'https://github.com/kftb/webquest', // if no repo, the button will not show up
  //   figma: '',
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/baykevin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kftb',
    },
  ],
  colors: [
    {
      name: 'red',
      hex: 'E07A5F',
    },
    {
      name: 'blue',
      hex: '3D405B',
    },
    {
      name: 'green',
      hex: '81B29A',
    },
    {
      name: 'yellow',
      hex: 'F2CC8F',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
