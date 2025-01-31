import React, { useState } from "react";
import "./style.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <nav className="nav">
          
          <div className="logo">B E T W E E N</div>

          
          <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#">For Birth Workers</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
          <button className="login-btn">Login/Sign Up</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
