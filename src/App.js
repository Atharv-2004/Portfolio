import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import React, { useEffect } from 'react';
import About from './Components/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/Contact/Contact';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.App-header');
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
