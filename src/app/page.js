"use client";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Read the hash on mount
    const hash = window.location.hash.replace("#", "") || "header";
    setActiveSection(hash);

    const handleHashChange = () => {
      setActiveSection(window.location.hash.replace("#", "") || "header");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash when activeSection changes via state (to keep URL in sync)
  useEffect(() => {
    if (activeSection) {
      if (activeSection === "header") {
        if (window.location.hash) {
          window.history.replaceState(null, null, ' ');
        }
      } else {
        window.history.replaceState(null, null, `#${activeSection}`);
      }
    }
  }, [activeSection]);

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <About activeSection={activeSection} setActiveSection={setActiveSection} />
      <Resume activeSection={activeSection} setActiveSection={setActiveSection} />
      <Portfolio activeSection={activeSection} setActiveSection={setActiveSection} />
      <Contact activeSection={activeSection} setActiveSection={setActiveSection} />
    </>
  );
}
