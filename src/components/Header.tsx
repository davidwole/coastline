import { useState } from "react";
import Logo from "../assets/Logo.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex header">
      <ul className="hide-for-mobile">
        <li>Releases</li>
        <li>Categories</li>
      </ul>
      <img src={Logo} alt="logo" />
      <ul className="hide-for-mobile">
        <li>Account</li>
        <li>Bag</li>
      </ul>

      {/* Hamburger Icon */}
      <button
        className={`hamburger hide-for-desktop ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={toggleMenu}>Releases</li>
          <li onClick={toggleMenu}>Categories</li>
          <li onClick={toggleMenu}>Account</li>
          <li onClick={toggleMenu}>Bag</li>
        </ul>
      </div>
    </header>
  );
}
