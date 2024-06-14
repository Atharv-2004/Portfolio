import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-item"><Link to="home" smooth={true} duration={1500}>Home</Link></li>
        <li className="nav-item"><Link to="about" smooth={true} duration={1500}>About</Link></li>
        <li className="nav-item"><Link to="skills" smooth={true} duration={1500}>Skills</Link></li>
        <li className="nav-item"><Link to="projects" smooth={true} duration={1500}>Projects</Link></li>
        <li className="nav-item"><Link to="contact" smooth={true} duration={1500}>Contact me!</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
