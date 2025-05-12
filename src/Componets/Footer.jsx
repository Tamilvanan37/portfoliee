import React from "react";
import "./Navbar/nav.css"
const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="footer-content">
            <div>
              <div class="footer-logo">
                {/* Port<span style="color: var(--accent-color);">folio</span> */}
              </div>
              <p class="footer-text">
                A passionate web designer and developer creating beautiful and
                functional websites for businesses and individuals.
              </p>
              <div class="footer-social">
                <a href="#" class="footer-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" class="footer-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" class="footer-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" class="footer-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 class="footer-title">Links</h3>
              <ul class="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="footer-title">Services</h3>
              <ul class="footer-links">
                <li>
                  <a href="#services">Web Design</a>
                </li>
                <li>
                  <a href="#services">Web Development</a>
                </li>
                <li>
                  <a href="#services">UI/UX Design</a>
                </li>
                <li>
                  <a href="#services">Brand Identity</a>
                </li>
                <li>
                  <a href="#services">Consultation</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="footer-title">Contact</h3>
              <ul class="footer-links">
                <li>Dharmapuri, Tamilnadu</li>
                <li>anbutamil620@gmail.com</li>
                <li>+91 9363330604</li>
              </ul>
            </div>
          </div>
          <div class="copyright">
            <p>© 2025 Tamilvanan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
