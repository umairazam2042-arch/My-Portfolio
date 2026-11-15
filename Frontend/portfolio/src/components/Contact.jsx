import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'
import { contactLimits, validateContact, validateField } from '../utils/validateContact'
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from './Icons'
import './Contact.css'

const emptyForm = { name: '', email: '', subject: '', message: '' }

const Field = ({ id, label, error, as = 'input', ...inputProps }) => {
  const Tag = as
  const errorId = `${id}-error`
  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      <Tag
        id={id}
        className="field__input"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <p id={errorId} className="field__error">
          {error}
        </p>
      )}
    </div>
  )
}

// Builds the text that is sent to the visitor's own email app or WhatsApp.
const buildMessageText = ({ name, email, message }) =>
  `From: ${name} (${email})\n\n${message}`

const Contact = () => {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isReady, setIsReady] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setIsReady(false)
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allErrors = validateContact(values)
    setTouched({ name: true, email: true, subject: true, message: true })
    setErrors(allErrors)
    setIsReady(Object.keys(allErrors).length === 0)
  }

  const handleReset = () => {
    setValues(emptyForm)
    setErrors({})
    setTouched({})
    setIsReady(false)
  }

  const cleaned = {
    name: values.name.trim(),
    email: values.email.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  }
  const bodyText = buildMessageText(cleaned)
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(`[Portfolio] ${cleaned.subject}`)}&body=${encodeURIComponent(bodyText)}`
  const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(`${cleaned.subject}\n\n${bodyText}`)}`

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project, an internship opportunity or a question? Send me a message."
        />

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <Field
                id="contact-name"
                name="name"
                label="Name"
                autoComplete="name"
                maxLength={contactLimits.name.max + 20}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
              />
              <Field
                id="contact-email"
                name="email"
                type="email"
                label="Email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
            </div>

            <Field
              id="contact-subject"
              name="subject"
              label="Subject"
              maxLength={contactLimits.subject.max + 20}
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subject && errors.subject}
            />

            <Field
              id="contact-message"
              name="message"
              label="Message"
              as="textarea"
              rows={6}
              maxLength={contactLimits.message.max + 100}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.message && errors.message}
            />

            <div className="contact__footer">
              <span className="contact__count" aria-live="polite">
                {values.message.length}/{contactLimits.message.max}
              </span>
              <div className="contact__buttons">
                <button type="button" className="btn btn--ghost" onClick={handleReset}>
                  Clear
                </button>
                <button type="submit" className="btn btn--primary">
                  Check message
                </button>
              </div>
            </div>

            <div className="contact__status" role="status" aria-live="polite">
              {isReady && (
                <div className="contact__ready">
                  <p>
                    Your message is ready. This site does not run a server, so please send it with one of these buttons. Your message will be filled in for you.
                  </p>
                  <div className="contact__buttons">
                    <a href={mailHref} className="btn btn--outline">
                      <MailIcon /> Open in email app
                    </a>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                      <WhatsappIcon /> Send on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </form>

          <aside className="contact__info" aria-label="Contact details">
            <h3 className="contact__info-title">Direct contact</h3>

            <ul className="contact__links">
              <li>
                <a href={`mailto:${profile.email}`} className="contact__link">
                  <MailIcon /> <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact__link">
                  <WhatsappIcon /> <span>{profile.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact__link">
                  <GithubIcon /> <span>GitHub profile</span>
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                  <LinkedinIcon /> <span>LinkedIn profile</span>
                </a>
              </li>
            </ul>

            <p className="contact__location">{profile.location}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
