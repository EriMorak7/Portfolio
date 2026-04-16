"use client";
import React from 'react';
import SectionNav from './SectionNav';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function About({ activeSection, setActiveSection }) {
  return (
    <section id="about" className={`about ${activeSection === 'about' ? 'active' : ''}`}>
      <div className="about-inner">
        <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="section-content">
          <div className="section-label">
            <span>ABOUT</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">LEARN MORE ABOUT ME</h2>

          <div className="about-grid">
            <div className="about-text">
              <h3>Frontend Developer | Aspiring DevOps Enthusiast</h3>
              <p className="about-bio" style={{ marginTop: '15px' }}>
                I’m a passionate frontend developer with strong skills in HTML, CSS, JavaScript, and React, along with backend experience in Node.js and Django. I enjoy crafting responsive, user-friendly interfaces and building seamless digital experiences.
              </p>
              <p className="about-bio" style={{ marginTop: '15px' }}>
                Currently, I’m expanding my skills into Linux and DevOps, blending development with infrastructure to become a versatile full-stack technologist. I thrive on problem-solving, learning new technologies, and turning ideas into practical, functional solutions.
              </p>
              <p className="about-bio" style={{ marginTop: '15px', marginBottom: '25px' }}>
                Based in Nigeria, I’m available for freelance or remote opportunities where I can contribute my creativity, technical skills, and dedication to high-quality software projects.
              </p>
              <div className="about-details">
                <div className="detail-col">
                  <p><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+2348100398302</span></p>
                  <p><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>erimorakinyo7@gmail.com</span></p>
                </div>
                <div className="detail-col">
                  <p><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.webChamploo.com</span></p>
                  <p><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="keywords-section">
            <div className="section-label">
              <span>KEY SKILLS</span>
              <div className="label-line"></div>
            </div>
            
            <div className="skills-category">
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px', marginTop: '20px' }}>Languages & Core</h4>
              <div className="skills-grid">
                <div className="skill-card"><i className="ri-code-s-slash-line skill-icon cyan"></i><span>Python</span></div>
                <div className="skill-card"><i className="ri-code-s-slash-line skill-icon yellow"></i><span>JavaScript</span></div>
                <div className="skill-card"><i className="ri-code-box-line skill-icon orange"></i><span>HTML</span></div>
                <div className="skill-card"><i className="ri-css3-line skill-icon blue"></i><span>CSS</span></div>
              </div>

              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px', marginTop: '30px' }}>Frontend</h4>
              <div className="skills-grid">
                <div className="skill-card"><i className="ri-reactjs-line skill-icon cyan"></i><span>React</span></div>
                <div className="skill-card"><i className="ri-bootstrap-line skill-icon purple"></i><span>Bootstrap 5</span></div>
                <div className="skill-card"><i className="ri-windy-line skill-icon teal"></i><span>Tailwind CSS</span></div>
              </div>

              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px', marginTop: '30px' }}>Backend</h4>
              <div className="skills-grid">
                <div className="skill-card"><i className="ri-nodejs-line skill-icon green"></i><span>Node.js</span></div>
                <div className="skill-card"><i className="ri-database-2-line skill-icon teal"></i><span>Django</span></div>
              </div>

              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px', marginTop: '30px' }}>Tools & Others</h4>
              <div className="skills-grid">
                <div className="skill-card"><i className="ri-git-branch-line skill-icon red"></i><span>Git</span></div>
                <div className="skill-card"><i className="ri-ubuntu-line skill-icon orange"></i><span>Linux (learning)</span></div>
                <div className="skill-card"><i className="ri-exchange-box-line skill-icon blue"></i><span>REST APIs</span></div>
                <div className="skill-card"><i className="ri-smartphone-line skill-icon violet"></i><span>Responsive Design</span></div>
              </div>
            </div>
          </div>

          <div className="soft-skills-section" style={{ marginTop: '40px' }}>
            <div className="section-label">
              <span>SOFT SKILLS & WORK ETHIC</span>
              <div className="label-line"></div>
            </div>
            
            <div className="skills-category">
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px', marginTop: '20px' }}>Problem Solving & Focus</h4>
              <div className="skills-grid">
                <div className="skill-card"><i className="ri-lightbulb-line skill-icon yellow"></i><span>Creative Problem Solving</span></div>
                <div className="skill-card"><i className="ri-mind-map skill-icon orange"></i><span>Logical Thinking</span></div>
                <div className="skill-card"><i className="ri-code-line skill-icon green"></i><span>Code Quality</span></div>
                <div className="skill-card"><i className="ri-layout-line skill-icon cyan"></i><span>UI/UX Detail</span></div>
              </div>

              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px', marginTop: '30px' }}>Professional Traits</h4>
              <div className="skills-grid">
                <div className="skill-card"><i className="ri-team-line skill-icon blue"></i><span>Adaptability</span></div>
                <div className="skill-card"><i className="ri-chat-voice-line skill-icon purple"></i><span>Effective Communication</span></div>
                <div className="skill-card"><i className="ri-flashlight-line skill-icon yellow"></i><span>Quick Learner</span></div>
              </div>

              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px', marginTop: '30px' }}>Management</h4>
              <div className="skills-grid">
                <div className="skill-card"><i className="ri-rocket-2-line skill-icon red"></i><span>Self-Motivation</span></div>
                <div className="skill-card"><i className="ri-time-line skill-icon teal"></i><span>Time Management</span></div>
              </div>
            </div>
          </div>
          {/* <div className="testimonials-section">
            <Swiper
              modules={[Autoplay, Pagination]}
              speed={600}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="testimonials-slider"
            >
              <SwiperSlide>
                <div className="testimonial-item">
                  <p>He fixed my Wi‑Fi and somehow made my TV stop asking me to update every day. Also, he's a very nice boy. Hire him.</p>
                  <h3>Mom</h3>
                  <h4>Unbiased Reviewer</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <p>I taught him everything he knows. He keeps saying that's not true, which just proves I also taught him humility.</p>
                  <h3>Dad</h3>
                  <h4>DIY Consultant</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <p>He said he was just going to "fix a tiny bug." Four hours later I had a brand new website and somehow the toaster makes espresso.</p>
                  <h3>Wife</h3>
                  <h4>Quality Assurance (at home)</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <p>Woof. Translation: He's great. Also, I pressed enter and launched something important. 10/10 would zoom again.</p>
                  <h3>Dog</h3>
                  <h4>Chief Bark Officer</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <p>I tried to sell him a gold‑plated HDMI cable. He built his own fiber network instead. Guy knows his stuff.</p>
                  <h3>Computer Part Salesman</h3>
                  <h4>Cable Enthusiast</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> */}
        </div>
      </div>
    </section>
  );
}
