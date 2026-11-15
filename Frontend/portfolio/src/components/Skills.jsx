import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'
import Reveal from './effects/Reveal'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Technologies I work with"
          description="The tools and technologies I use to build full-stack applications."
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.1}>
            <article className="skills__group">
              <header className="skills__group-header">
                <h3 className="skills__group-title">{group.title}</h3>
                <p className="skills__group-description">{group.description}</p>
              </header>

              <ul className="skills__list">
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <li key={name} className="skill">
                    <span className="skill__icon" style={{ color }}>
                      <Icon size={26} aria-hidden="true" focusable="false" />
                    </span>
                    <span className="skill__name">{name}</span>
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
