import { SiCss, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPostman, SiReact, SiTailwindcss } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FaPlug } from 'react-icons/fa6'

// Skills grouped by category. No proficiency levels are shown, by design.
// To add a skill, add an entry with a name, an icon from react-icons and a brand color.
export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building responsive, interactive user interfaces.',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    description: 'Server logic, authentication and APIs.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress, color: 'currentColor' },
      { name: 'REST APIs', icon: FaPlug, color: '#22D3EE' },
    ],
  },
  {
    title: 'Database',
    description: 'Storing and organizing application data.',
    skills: [{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' }],
  },
  {
    title: 'Tools',
    description: 'Everyday tools for development and collaboration.',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: 'currentColor' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
]
