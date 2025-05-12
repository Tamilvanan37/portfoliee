import React from "react";
import ResponsiveAppBar from "./Navbar/ResponsiveAppBar";
import Navbar from "./Navbar/Navbar";
import About from "./About";
import "./Navbar/nav.css";
import img from "../assest/WhatsApp Image 2025-05-09 at 4.10.40 PM.jpeg";
import Serives from "./Serives";
import Section from "./Section";
import Testmonial from "./Testmonial";
import Content from "./Content";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      {/* <ResponsiveAppBar/> */}
      <Navbar />

      <section class="hero" id="home">
        <div class="container">
          <div class="hero-content fade-in active">
            <p class="hero-subtitle">Hello, I'm</p>
            <h1 class="hero-title">
              Tamilvanan <br />
              <span>Front-end Developer</span>
            </h1>
            <p class="hero-description">
              I'm a passionate web designer and developer based in New York,
              creating beautiful and functional websites for businesses and
              individuals.
            </p>
            <div class="hero-buttons">
              <a href="#portfolio" class="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" class="btn btn-secondary">
                Contact Me
              </a>
            </div>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg
                  xmlns="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
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
              <a href="#" class="social-link">
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
              <a href="#" class="social-link">
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="social-link">
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
          <div class="hero-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#6366F1"></stop>
                  <stop offset="100%" stop-color="#EC4899"></stop>
                </linearGradient>
              </defs>
              <circle
                cx="250"
                cy="250"
                r="200"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="2"
                stroke-dasharray="5,5"
              ></circle>
              <circle
                cx="250"
                cy="250"
                r="150"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="2"
              ></circle>
              <path
                d="M250,100 Q400,250 250,400 Q100,250 250,100"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="3"
              ></path>
              <circle cx="250" cy="100" r="10" fill="url(#gradient)"></circle>
              <circle cx="250" cy="400" r="10" fill="url(#gradient)"></circle>
              <circle cx="100" cy="250" r="10" fill="url(#gradient)"></circle>
              <circle cx="400" cy="250" r="10" fill="url(#gradient)"></circle>
            </svg>
          </div>
        </div>
      </section>
      <About />
      <Serives />
      <Section />
      <Testmonial />
      <Content />
      <Footer />
      <div class="back-to-top active" id="backToTop">
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
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Home;
