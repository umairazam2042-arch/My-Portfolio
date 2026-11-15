import './SectionHeading.css'
// Reusable heading used at the top of each portfolio section.
const SectionHeading = ({ eyebrow, title, description, id }) => (
  <header className="section-heading">
    {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
    <h2 id={id} className="section-heading__title">
      {title}
    </h2>
    {description && <p className="section-heading__description">{description}</p>}
  </header>
)

export default SectionHeading
