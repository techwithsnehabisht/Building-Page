import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li className="logo">B E T W E E N</li>
          <li><a href="#"></a>For Birth Workers</li>
          <li><a href="#"></a>How it Works</li>
          <li><a href="#"></a>Blog</li>
          <li><a href="#"></a>FAQs</li>
        </ul>
        <button className="login-btn">Login/Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;
