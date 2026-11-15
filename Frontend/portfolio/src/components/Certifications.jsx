import SectionHeading from './SectionHeading'
import { certifications } from '../data/certifications'
import { ExternalLinkIcon } from './Icons'
import Reveal from './effects/Reveal'
import './Certifications.css'

const Certifications = () => {
  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="section certifications" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading
          id="certifications-title"
          eyebrow="Learning"
          title="Certifications"
          description="Courses and certificates I have completed."
        />

        <ul className="certifications__grid">
          {certifications.map((cert, index) => (
            <Reveal key={`${cert.title}-${cert.issuer}`} delay={index * 0.1}>
            <li className="certificate">
              <p className="certificate__date">{cert.date}</p>
              <h3 className="certificate__title">{cert.title}</h3>
              <p className="certificate__issuer">{cert.issuer}</p>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="certificate__link">
                  View certificate <ExternalLinkIcon width={16} height={16} />
                </a>
              )}
            </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certifications
