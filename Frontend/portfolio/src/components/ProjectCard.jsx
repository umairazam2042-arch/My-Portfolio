import { useTilt } from '../hooks/useTilt'
import { ExternalLinkIcon, GithubIcon } from './Icons'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const { name, description, tech, image, featured, github, live } = project
  const tiltRef = useTilt(6)

  return (
    <article ref={tiltRef} className="project-card" style={{ '--tilt-x': '0deg', '--tilt-y': '0deg' }}>
      <div className="project-card__inner">
        <div className="project-card__media">
          {image ? (
            <img src={image} alt={`${name} screenshot`} loading="lazy" width="640" height="400" className="project-card__image" />
          ) : (
            <div className="project-card__placeholder" aria-hidden="true">
              <span>{name.charAt(0)}</span>
            </div>
          )}
          {featured && <span className="project-card__badge">Featured</span>}
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{name}</h3>
          <p className="project-card__description">{description}</p>

          <ul className="project-card__tech" aria-label={`Technologies used in ${name}`}>
            {tech.map((item) => (
              <li key={item} className="project-card__tag">
                {item}
              </li>
            ))}
          </ul>

          <div className="project-card__links">
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`${name} GitHub repository`}>
              <GithubIcon /> GitHub
            </a>
            <a href={live} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--primary" aria-label={`${name} live demo`}>
              <ExternalLinkIcon /> Live demo
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
