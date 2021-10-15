import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Matt Chau',
  subtitle: 'Front end web developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.canva.com/design/DAEs1W2x8oQ/VsmjQKKBHr7duQ9CqyDG8Q/view?utm_content=DAEs1W2x8oQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Group project - Online to do list',
    info: 'React, JavaScript, CSS, HTML - Consisted of 3 Group Members, Scrum & Sprint of 3',
    info2: '',
    url: 'https://www.figma.com/file/mXzsax8uY38o1F5UahMn2w/To-Do-List_Project?node-id=116%3A386',
    repo: 'https://github.com/GenFewdGroup4/GenFewdGroup4.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'SL Hitoyoshi',
    info: 'React, Material UI as reference, carousel and sidebar - Interactive site illustrating history of a vintage train.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Wedding website',
    info: 'Figma wireframes - Wedding gift for a web developer couple',
    info2: '',
    url: 'https://www.figma.com/file/BT8UPp6mKrP5yQoOWq7uu9/Wedding-website?node-id=63%3A134',
    repo: 'https://www.figma.com/file/BT8UPp6mKrP5yQoOWq7uu9/Wedding-website?node-id=63%3A134', // if no repo, the button will not show up
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
      name: 'codepen',
      url: 'https://codepen.io/mattnofsky21/pen/vYZjbbW',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matt-chau-a98671220/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mattnofsky21',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
