// Projects shown in the Projects section.
// To add a project, copy one object and fill in the fields.
// - image: path to a screenshot in /public/projects/ (e.g. '/projects/rabta.jpg'). Leave null to show a placeholder.
// - featured: true shows the project first with a "Featured" label.
// Descriptions are based on your CV and approved.

export const projects = [
  {
    id: 'rabta-app',
    name: 'Rabta-App',
    description:
      'A full-stack social media application with post and photo features. Built with the MERN stack and ImageKit.io for media handling.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'ImageKit.io'],
    image: null,
    featured: true,
    github: 'https://github.com/umairazam2042-arch/Rabta-App/tree/main/Frontend/frontend',
    live: 'https://rabta-app-eta.vercel.app/',
  },
  {
    id: 'multivendor-ecommerce',
    name: 'Multi-Vendor E-Commerce',
    description:
      'A MERN e-commerce project with user login and JWT authentication. ImageKit.io handles product image and media uploads.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'ImageKit.io'],
    image: null,
    featured: false,
    // github: 'https://github.com/umairazam2042-arch/E-commerece-App/tree/main/E-commerece-frontend',
    live: 'https://e-commerece-app-lemon.vercel.app/register',
  },
  {
    id: 'study-app',
    name: 'Study App',
    description:
      'A notes application where notes are saved in the browser using local storage, styled with Tailwind CSS.',
    tech: ['React.js', 'Tailwind CSS', 'Local Storage'],
    image: null,
    featured: false,
    github: 'https://github.com/umairazam2042-arch/Study-App',
    live: 'https://study-flow-u.vercel.app/',
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    description:
      'A React application that fetches live weather information from an API, with a clean interface built using Tailwind CSS.',
    tech: ['React.js', 'API Integration', 'Tailwind CSS'],
    image: null,
    featured: false,
    github: 'https://github.com/umairazam2042-arch/Weather-App/tree/main/Weather-app',
    live: 'https://weatherapp-57000.netlify.app/',
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description:
      'A web app that calculates age from a selected date of birth, built with plain HTML, CSS and JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: null,
    featured: false,
    github: 'https://github.com/umairazam2042-arch/Age-Calculater',
    live: 'https://age-calculater1.vercel.app/',
  },
]
