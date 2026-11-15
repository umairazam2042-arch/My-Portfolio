import { useEffect, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'
import { DownloadIcon, ExternalLinkIcon } from './Icons'
import './CvSection.css'

const CvSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  // Most phone browsers cannot show PDFs inside an iframe, so only show the preview on larger screens.
  const showPreview = useMediaQuery('(min-width: 768px)')

  // Some mobile browsers never fire onLoad for PDF frames, so hide the loader after a timeout.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="cv" className="section cv" aria-labelledby="cv-title">
      <div className="container">
        <SectionHeading
          id="cv-title"
          eyebrow="Resume"
          title="My CV"
          description="A summary of my education, projects, technical skills and links. You can view or download a copy."
        />

        <div className="cv__actions">
          <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            <ExternalLinkIcon />
            View CV
          </a>
          <a href={profile.cvPath} download className="btn btn--primary">
            <DownloadIcon />
            Download CV
          </a>
        </div>

        {showPreview ? (
          <div className="cv__frame-wrapper">
            {!isLoaded && (
              <div className="cv__loading" role="status">
                Loading CV preview...
              </div>
            )}
            <iframe
              src={`${profile.cvPath}#view=FitH`}
              title={`${profile.name} CV preview`}
              className="cv__frame"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        ) : (
          <div className="cv__mobile-card">
            <p>Open or download the CV as a PDF file.</p>
          </div>
        )}

        {showPreview && (
          <p className="cv__note">
            If the preview does not show on your device, use the View CV button above.
          </p>
        )}
      </div>
    </section>
  )
}

export default CvSection
