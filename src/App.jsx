import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Blogs from './components/sections/Blogs';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingActions from './components/common/FloatingActions';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#F5F2EA] dark:bg-[#0F0F0F] text-primary dark:text-white overflow-x-hidden selection:bg-[#A48858] selection:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>

      <FloatingActions />
      <Footer />
    </div>
  );
}

export default App;
