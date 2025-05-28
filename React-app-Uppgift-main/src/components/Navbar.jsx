import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
