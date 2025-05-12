import React from "react";
import './Navbar/nav.css'
const Testmonial = () => {
  return (
    <div>
      <section class="section testimonials" id="testimonials">
        <div class="container">
          <div class="section-header fade-in active">
            <p class="section-subtitle">Client Reviews</p>
            <h2 class="section-title">Testimonials</h2>
          </div>
          <div class="testimonial-slider fade-in active">
            <div
              class="testimonial-track"
              id="testimonialTrack"
            //   style="transform: translateX(-200%);"
            >
              <div class="testimonial-slide">
                <div class="testimonial-card">
                  <p class="testimonial-text">
                    "Alex did an amazing job redesigning our website. The new
                    design is not only beautiful but also much more
                    user-friendly. Our conversion rate has increased by 30%
                    since the launch!"
                  </p>
                  <div class="testimonial-author">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                      alt="Sarah Johnson"
                      class="author-image"
                    />
                    <div class="author-info">
                      <h4>Sarah Johnson</h4>
                      <p>CEO, TechStart</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-slide">
                <div class="testimonial-card">
                  <p class="testimonial-text">
                    "Working with Alex was a pleasure. He understood our vision
                    from the start and delivered a website that perfectly
                    represents our brand. His attention to detail and creativity
                    are outstanding."
                  </p>
                  <div class="testimonial-author">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                      alt="Michael Brown"
                      class="author-image"
                    />
                    <div class="author-info">
                      <h4>Michael Brown</h4>
                      <p>Marketing Director, Elevate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-slide">
                <div class="testimonial-card">
                  <p class="testimonial-text">
                    "Alex's expertise in UI/UX design transformed our app. The
                    user interface is now intuitive and visually appealing. Our
                    users love the new design, and we've seen a significant
                    increase in user engagement."
                  </p>
                  <div class="testimonial-author">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=688&amp;q=80"
                      alt="Emily Davis"
                      class="author-image"
                    />
                    <div class="author-info">
                      <h4>Emily Davis</h4>
                      <p>Product Manager, AppWave</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-controls">
              <button class="slider-btn" id="prevBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button class="slider-btn" id="nextBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testmonial;
