import React from "react";
import "./Navbar/nav.css"
const Serives = () => {
  return (
    <div>
      <section class="section services" id="services">
        <div class="container">
          <div class="section-header fade-in active">
            <p class="section-subtitle">What I Do</p>
            <h2 class="section-title">My Services</h2>
          </div>
          <div class="services-grid">
            <div class="service-card fade-in active">
              <div class="service-icon">
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
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 class="service-title">Web Design</h3>
              <p class="service-description">
                Creating beautiful, modern, and user-friendly website designs
                that align with your brand identity and business goals.
              </p>
            </div>
            <div class="service-card fade-in active">
              <div class="service-icon">
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
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </div>
              <h3 class="service-title">Web Development</h3>
              <p class="service-description">
                Building responsive, fast, and functional websites using modern
                technologies and best practices in web development.
              </p>
            </div>
            <div class="service-card fade-in active">
              <div class="service-icon">
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
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
              <h3 class="service-title">UI/UX Design</h3>
              <p class="service-description">
                Designing intuitive user interfaces and experiences that enhance
                user engagement and satisfaction with your digital products.
              </p>
            </div>
            <div class="service-card fade-in active">
              <div class="service-icon">
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
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 class="service-title">Responsive Design</h3>
              <p class="service-description">
                Creating websites that look and function perfectly on all
                devices, from desktops to smartphones and tablets.
              </p>
            </div>
            <div class="service-card fade-in active">
              <div class="service-icon">
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
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 class="service-title">Brand Identity</h3>
              <p class="service-description">
                Developing cohesive brand identities including logos, color
                schemes, typography, and visual elements for your business.
              </p>
            </div>
            <div class="service-card fade-in active">
              <div class="service-icon">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 class="service-title">Consultation</h3>
              <p class="service-description">
                Providing expert advice and guidance on web design, development,
                and digital strategy to help you achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Serives;
