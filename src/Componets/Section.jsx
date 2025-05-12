import React from "react";
import "./Navbar/nav.css"
const Section = () => {
  return (
    <div>
      <section class="section" id="portfolio">
        <div class="container">
          <div class="section-header fade-in active">
            <p class="section-subtitle">My Work</p>
            <h2 class="section-title">Recent Projects</h2>
          </div>
          <div class="portfolio-filter fade-in active">
            <button class="filter-btn active" data-filter="all">
              All
            </button>
            <button class="filter-btn" data-filter="web">
              Web Design
            </button>
            <button class="filter-btn" data-filter="app">
              App Design
            </button>
            <button class="filter-btn" data-filter="brand">
              Branding
            </button>
          </div>
          <div class="portfolio-grid">
            <div class="portfolio-item fade-in active" data-category="web">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=764&amp;q=80"
                alt="E-commerce Website"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h3 class="portfolio-title">E-commerce Website</h3>
                <p class="portfolio-category">Web Design</p>
              </div>
            </div>
            <div class="portfolio-item fade-in active" data-category="app">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1074&amp;q=80"
                alt="Fitness App"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h3 class="portfolio-title">Fitness App</h3>
                <p class="portfolio-category">App Design</p>
              </div>
            </div>
            <div class="portfolio-item fade-in active" data-category="brand">
              <img
                src="https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                alt="Coffee Shop Branding"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h3 class="portfolio-title">Coffee Shop Branding</h3>
                <p class="portfolio-category">Branding</p>
              </div>
            </div>
            <div class="portfolio-item fade-in active" data-category="web">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1115&amp;q=80"
                alt="Financial Dashboard"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h3 class="portfolio-title">Financial Dashboard</h3>
                <p class="portfolio-category">Web Design</p>
              </div>
            </div>
            <div class="portfolio-item fade-in active" data-category="app">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                alt="Travel App"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h3 class="portfolio-title">Travel App</h3>
                <p class="portfolio-category">App Design</p>
              </div>
            </div>
            <div class="portfolio-item fade-in active" data-category="brand">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                alt="Restaurant Rebrand"
                class="portfolio-image"
              />
              <div class="portfolio-overlay">
                <h3 class="portfolio-title">Restaurant Rebrand</h3>
                <p class="portfolio-category">Branding</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
