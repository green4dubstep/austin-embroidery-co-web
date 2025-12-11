import { Link } from "react-router-dom";
import logo from "../images/austin+embroidery+co+long.png";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__brand" to="/">
        <img src={logo} alt="Austin Embroidery Co. Logo" class="nav__logo" />
      </Link>
      <nav className="nav__inner">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/embroidery">
          Embroidery
        </Link>
        <Link className="nav__link" to="/screen-printing">
          Screen Printing
        </Link>
        <Link className="nav__link" to="/our-work">
          Our Work
        </Link>
        <a href="#contact" class="nav__cta">
          Free Quote!
        </a>
      </nav>
    </div>
  );
};

export default Nav;
