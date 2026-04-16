"use client";
import React from 'react';
import SectionNav from './SectionNav';

export default function Resume({ activeSection, setActiveSection }) {
  return (
    <section id="resume" className={`resume ${activeSection === 'resume' ? 'active' : ''}`}>
      <div className="section-inner">
        <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="section-content">
          <div className="section-label">
            <span>RESUME</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">CHECK MY RESUME</h2>

          <div className="resume-grid">
            {/* Left Column */}
            <div className="resume-col">
              <h3 className="resume-heading">Summary</h3>
              <div className="resume-item">
                <h4>Morakinyo Erioluwa</h4>
                <p>Dedicated Frontend Developer and B.Sc. Computer Science graduate with First Class Honours. Passionate about building responsive user interfaces and exploring the intersection of Machine Learning and Cloud Security.</p>
                <ul>
                  <li>Nigeria</li>
                  <li>+(234)8100398302</li>
                  <li>erimorakinyo7@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-heading">Education</h3>
              <div className="resume-item">
                <h4>B.Sc. Computer Science – First Class Honours</h4>
                <p className="resume-date"><i className="bi bi-calendar"></i> 2022 - 2025</p>
                <p className="resume-location">Koladaisi University, Ibadan, Nigeria</p>
                <p>GPA: 4.54/5.00. Leading private university in Nigeria.</p>
                <ul>
                  <li>Final Year Project Grade: 89/100 ("Sign Language to Text Conversion using CNN")</li>
                  <li>Awarded Merit-Based Scholarship (25% tuition coverage)</li>
                  <li>Coursework: Computer Networks, Data Structures & Algorithms, DBMS</li>
                  <li>Public Relations & Academic Officer for NACOS</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Secondary Education (WAEC)</h4>
                <p className="resume-date"><i className="bi bi-calendar"></i> 2015 - 2021</p>
                <p className="resume-location">Seed of Life College</p>
                <p>Result: 1 A, 5 Bs, 3 Cs</p>
                <ul>
                  <li>Elected Health Prefect, responsible for student well-being and first-response care</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="resume-col">
              <h3 className="resume-heading">Work & Research Experience</h3>
              <div className="resume-item">
                <h4>Sign Language to Text Conversion using CNN</h4>
                <p className="resume-date"><i className="bi bi-calendar"></i> Academic Research Project, Final Year Thesis</p>
                <p>Developed a desktop application using a Convolutional Neural Network (CNN) to classify sign language gestures in real-time using OpenCV and Python.</p>
                <ul>
                  <li><strong>Model Development:</strong> Trained on a 50,000+ Kaggle dataset with data augmentation and a 70/15/15 split.</li>
                  <li><strong>Analysis:</strong> Evaluated learning curves and per-class F1-scores to achieve 99% test accuracy and address potential overfitting.</li>
                  <li><strong>GUI Development:</strong> Created a functional desktop interface for real-time video capture and gesture prediction.</li>
                  <li><strong>Optimization:</strong> Delivered a full application suite under resource constraints, demonstrating systematic problem-solving and full-lifecycle development.</li>
                </ul>
              </div>

              <h3 className="resume-heading">Leadership Roles</h3>
              <div className="resume-item">
                <h4>Academic Officer – NACOS</h4>
                <p className="resume-date"><i className="bi bi-calendar"></i> 2024 - 2025</p>
                <p className="resume-location">Koladaisi University, Ibadan</p>
                <ul>
                  <li>Organized coding competitions and inter-university debates during NACOS week.</li>
                  <li>Managed technical workshops and communications for the executive committee.</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Public Relations Officer – NACOS</h4>
                <p className="resume-date"><i className="bi bi-calendar"></i> 2022 - 2023</p>
                <p className="resume-location">Koladaisi University, Ibadan</p>
                <ul>
                  <li>Managed communications for 150+ members and increased digital engagement via social media strategy.</li>
                  <li>Liaised between students, faculty, and the university association.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Skills */}
          <div className="pro-skills-section">
            <h3 className="resume-heading">Additional Skills & Activities</h3>
            <div className="skills-list">
              <div className="skill-category">
                <strong>Programming:</strong> Python, JavaScript, HTML, CSS
              </div>
              <div className="skill-category">
                <strong>Web Development:</strong> React, Bootstrap 5, Tailwind CSS, Node.js, Django
              </div>
              <div className="skill-category">
                <strong>Machine Learning & Tools:</strong> CNN, OpenCV, Data Augmentation, Git, Linux
              </div>
              <div className="skill-category">
                <strong>Professional Interests:</strong> Cloud Security Architecture, Vulnerability Assessment, Identity & Access Management (IAM), Encryption Protocols
              </div>
              <div className="skill-category">
                <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#ccc' }}>
                  <em>Currently self-studying for CompTIA Security+, with long-term plans for AWS Certified Security, Microsoft Azure Security Engineer, and Google Professional Cloud Security Engineer certifications.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
