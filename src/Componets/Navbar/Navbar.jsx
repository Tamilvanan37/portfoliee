import React from "react";
import './nav.css';
const Navbar = () => {
  return (
    <div>
      <header id="header" class="scrolled">
        <div class="container">
          <nav class="navbar">
            <a href="#" class="logo">
              Port<span>folio</span>
            </a>
            <ul class="nav-links" id="navLinks">
              <li>
                <a href="#home" class="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" class="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#services" class="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" class="nav-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" class="nav-link">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <button class="mobile-menu-btn" id="mobileMenuBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
