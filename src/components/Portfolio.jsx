"use client";
import React, { useState } from 'react';
import SectionNav from './SectionNav';

export default function Portfolio({ activeSection, setActiveSection }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    { 
      title: 'Business Consulting Firm', 
      category: 'web', 
      image: '/img/portfolio/Screenshot 2026-04-03 130503.png',
      link: 'https://maximizepotential.netlify.app/'
    },
    { 
      title: 'Business Consulting Firm V2', 
      category: 'web', 
      image: '/img/portfolio/Screenshot 2026-04-03 130616.png',
      link: 'https://maximizepotential2.netlify.app/'
    },
    { 
      title: 'Art Gallery', 
      category: 'web', 
      image: '/img/portfolio/Screenshot 2026-04-03 130931.png',
      link: 'https://malomsyart.netlify.app/'
    },
    { 
      title: 'Model Agency', 
      category: 'web', 
      image: '/img/portfolio/Screenshot 2026-04-03 131017.png',
      link: 'https://modelmanagement.netlify.app/'
    },
    { 
      title: 'E-commerce Platform', 
      category: 'web', 
      image: '/img/portfolio/Screenshot 2026-02-08 220133.png',
      link: 'https://e-commercezadel.netlify.app/'
    },
  ];

  return (
    <section id="portfolio" className={`portfolio ${activeSection === 'portfolio' ? 'active' : ''}`}>
      <div className="section-inner">
        <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="section-content">
          <div className="section-label">
            <span>PROJECTS</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">MY WORKS</h2>

          <div className="portfolio-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              ALL
            </button>
            <button
              className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
              onClick={() => setFilter('app')}
            >
              APP
            </button>
            <button
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              WEB
            </button>
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => {
              const isVisible = filter === 'all' || filter === project.category;
              if (!isVisible) return null;

              return (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="portfolio-item" 
                  key={index} 
                  style={{ animation: 'fadeInUp 0.4s ease forwards' }}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>{project.title}</h4>
                      <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                    </div>
                    <div className="link-icon">
                      <i className="ri-external-link-line"></i>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
