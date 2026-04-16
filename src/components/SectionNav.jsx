"use client";
import React from 'react';

export default function SectionNav({ activeSection, setActiveSection }) {
  const handleClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
  };

  return (
    <div className="section-nav">
      <h1 className="nav-brand">
        <a href="#header" onClick={(e) => handleClick(e, 'header')}>
          Erioluwa Morakinyo
        </a>
      </h1>
      <nav className="top-navbar">
        <ul>
          <li>
            <a href="#header" onClick={(e) => handleClick(e, 'header')}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => handleClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeSection === 'resume' ? 'active' : ''}
              onClick={(e) => handleClick(e, 'resume')}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeSection === 'portfolio' ? 'active' : ''}
              onClick={(e) => handleClick(e, 'portfolio')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => handleClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
