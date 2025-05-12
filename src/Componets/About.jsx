import React from "react";
import "./Navbar/nav.css";
import img from "../assest/WhatsApp Image 2025-05-09 at 4.10.40 PM.jpeg"
const About = () => {
  return (
    <div>
      <section class="section" id="about">
        <div class="container">
          <div class="section-header fade-in active">
            <p class="section-subtitle">About Me</p>
            <h2 class="section-title">My Journey</h2>
          </div>
          <div class="about-content">
            <div class="about-image fade-in active">
              <img src={img} />
            </div>
            <div class="about-text fade-in active">
              <h3>A passionate designer &amp; developer based in New York</h3>
              <p>
                I'm a web designer and developer with over 5 years of experience
                in creating beautiful, functional, and user-friendly websites. I
                specialize in modern web technologies and design trends to
                deliver exceptional digital experiences.
              </p>
              <p>
                My approach combines creative design thinking with technical
                expertise to solve complex problems and create intuitive user
                interfaces. I believe in continuous learning and staying updated
                with the latest industry trends.
              </p>
              <div class="skills">
                <span class="skill">HTML5</span>
                <span class="skill">CSS3</span>
                <span class="skill">JavaScript</span>
                <span class="skill">React</span>
                <span class="skill">UI/UX Design</span>
                <span class="skill">Figma</span>
                <span class="skill">WordPress</span>
                <span class="skill">Responsive Design</span>
              </div>
              <div class="hero-buttons">
                <a href="#" class="btn btn-primary">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
