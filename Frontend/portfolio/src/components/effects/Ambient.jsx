import './Ambient.css'

// Fixed background layer: slow drifting gradient light and floating geometric shapes.
// Purely decorative, hidden from assistive technology, and static under reduced motion.
const Ambient = () => (
  <div className="ambient" aria-hidden="true">
    <span className="ambient__blob ambient__blob--violet" />
    <span className="ambient__blob ambient__blob--cyan" />
    <span className="ambient__shape ambient__shape--square" />
    <span className="ambient__shape ambient__shape--ring" />
    <span className="ambient__shape ambient__shape--triangle" />
  </div>
)

export default Ambient
