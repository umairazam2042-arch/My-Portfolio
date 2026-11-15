import { profile } from '../data/profile'
import './Footer.css'

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__inner">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <a href="#home" className="site-footer__top">
        Back to top
      </a>
    </div>
  </footer>
)

export default Footer
