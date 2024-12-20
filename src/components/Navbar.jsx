import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaFileAlt,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="download-buttons">
        <button
          className="download-btn"
          onClick={() => window.open('/profile/Samyak_Bajracharya_Resume.pdf', '_blank')}
        >
          <FaFileAlt /> Resume
        </button>
        <button
          className="download-btn"
          onClick={() =>
            window.open("/profile/Samyak_Bajracharya_CoverLetter.pdf", "_blank")
          }
        >
          <FaFileAlt /> Cover Letter
        </button>
      </div>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <FaUser /> About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            <FaProjectDiagram /> Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default Navbar;
