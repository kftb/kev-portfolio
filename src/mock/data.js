import { nanoid } from 'nanoid';

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
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    cat: 'tech',
    img: 'logoalbstadt.png',
    title: 'Logo Albstadt: Speech therapy office website',
    info:
      'This project was focused to build a SEO-optimized, mobile-friendly webpage for a speech therapy office in Albstadt, Germany.',
    info2:
      'The website was planned in Figma and programmed from scratch with Gatsby/React to provide a better learning experience. The page is hosted on Netlify as the page itself will only change rarely.',
    url: 'https://logoalbstadt.netlify.app',
    repo: 'https://github.com/kftb/logo-albstadt', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    cat: 'tech',
    img: 'logoalbstadt.png',
    title: 'Visualizing a network of classes',
    info:
      'This project utilized a dataset of students and which classes they have taken. Visualizing it with a network chart revealed interesting insights into what classes are interesting to students.',
    info2:
      'The data was obtained via a Python BeautifulSoup/Selenium scraper and visualized with the NetworkX library',
    url: 'https://logoalbstadt.netlify.app',
    repo: 'https://github.com/kftb/logo-albstadt', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    cat: 'pm',
    img: 'project.jpg',
    title: 'Product Management for Healthcare app',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    cat: 'pm',
    img: 'kelloggmycourses.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    cat: 'pm',
    img: 'rocket.png',
    title: 'Rocket: Trend aggregation for trading',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
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
