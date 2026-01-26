import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/common/FloatingActions";
import RoadmapNavigation from "./components/standalone/RoadmapNavigation";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);

  // 🔹 On first load: localStorage > system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    } else if (savedTheme === "light") {
      setDarkMode(false);
    } else {
      // system preference fallback
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // 🔹 Apply theme + persist
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="
        min-h-screen overflow-x-hidden
        bg-[#F5F2EA] dark:bg-[#0F0F0F]
        text-primary dark:text-white
        transition-colors duration-500 ease-in-out
        selection:bg-[#A48858] selection:text-white
      "
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
        onOpenRoadmap={() => setShowRoadmap(true)}
      />

      <RoadmapNavigation
        isOpen={showRoadmap}
        onClose={() => setShowRoadmap(false)}
        onNavigate={(id) => {
          setShowRoadmap(false);
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <FloatingActions />
      <Footer />
    </div>
  );
}

export default App;
