import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Jimtechs Logo" className="navbar-logo-img" />
          <span>Jimtechs Ug Ltd</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
