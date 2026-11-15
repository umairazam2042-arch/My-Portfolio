import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'
import { DownloadIcon, ExternalLinkIcon } from './Icons'
import './CvSection.css'

const CvSection = () => {
  return (
    <section id="cv" className="section cv" aria-labelledby="cv-title">
      <div className="container">
        <SectionHeading
          id="cv-title"
          eyebrow="Resume"
          title="My CV"
          description="My education, projects, technical skills and contact details are all in my CV. You can open it in a new tab or download a copy."
        />

        <div className="cv__card">
          <p className="cv__card-text">{profile.name}, {profile.title}</p>
          <div className="cv__actions">
            <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="cv__link">
              View CV
              <ExternalLinkIcon width={16} height={16} />
            </a>
            <a href={profile.cvPath} download className="btn btn--primary">
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CvSection
