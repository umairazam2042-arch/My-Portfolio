import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import Reveal from './effects/Reveal'
import './Projects.css'

const Projects = () => {
  // Featured projects are shown first.
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected work"
          description="Full-stack and frontend projects I have built. Each one links to its source code and a live demo."
        />

        <div className="projects__grid">
          {sorted.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.12}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
