import SectionHeading from './SectionHeading'
import { aboutText } from '../data/about'
import './About.css'

const About = () => {
  const { background, education, journey, interests, languages, careerGoals, objectives } = aboutText

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="About me" title="Background and journey" />

        <div className="about__grid">
          <div className="about__main">
            <div className="about__card">
              <h3 className="about__card-title">Who I am</h3>
              {background.map((paragraph) => (
                <p key={paragraph} className="about__text">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about__card">
              <h3 className="about__card-title">Development journey</h3>
              <ol className="timeline">
                {journey.map((step) => (
                  <li key={step.title} className="timeline__item">
                    <span className="timeline__period">{step.period}</span>
                    <h4 className="timeline__title">{step.title}</h4>
                    <p className="timeline__text">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="about__aside">
            <div className="about__card">
              <h3 className="about__card-title">Education</h3>
              {education.map((item) => (
                <div key={item.degree} className="about__education">
                  <p className="about__education-degree">{item.degree}</p>
                  <p className="about__text">{item.institution}</p>
                  <p className="about__meta">{item.period}</p>
                  <p className="about__meta">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="about__card">
              <h3 className="about__card-title">Interests</h3>
              <ul className="chip-list">
                {interests.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="about__meta about__languages">Languages: {languages.join(', ')}</p>
            </div>

            <div className="about__card">
              <h3 className="about__card-title">Career goals</h3>
              <p className="about__text">{careerGoals}</p>
              <h4 className="about__subtitle">Objectives</h4>
              <ul className="about__list">
                {objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
