import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Moon, Home, User, Briefcase, Mail, ChevronDown, ChevronUp, Award, BookOpen, Lightbulb } from "lucide-react";

/**
 * Premium Roadmap Navigation - Complete Version
 * - All labels: Home, Projects, About, Skills, Experience, Education, Contact
 * - Curves contained within screen
 * - Proper scrolling functionality
 * - Fully responsive
 */
const RoadmapNavigation = ({ isOpen, onClose, onNavigate }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((p) => !p);

  // Scroll handlers
  const handleScrollDown = () => {
    const container = document.getElementById('roadmap-container');
    if (container) {
      container.scrollBy({
        top: window.innerHeight * 0.7,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollUp = () => {
    const container = document.getElementById('roadmap-container');
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // All navigation nodes
  const nodes = [
    { id: "home", label: "HOME", icon: Home, top: "15%", left: "55%" },
    { id: "projects", label: "PROJECTS", icon: Briefcase, top: "28%", left: "28%" },
    { id: "about", label: "ABOUT", icon: User, top: "32%", right: "12%" },
    { id: "skills", label: "SKILLS", icon: Award, top: "48%", left: "65%" },
    { id: "experience", label: "EXPERIENCE", icon: Lightbulb, top: "62%", left: "22%" },
    { id: "education", label: "EDUCATION", icon: BookOpen, top: "68%", right: "18%" },
    { id: "contact", label: "CONTACT", icon: Mail, top: "82%", left: "58%" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundColor: darkMode ? "#0F0F0F" : "#EBE4D9",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* HEADER */}
          <div className="relative z-30 flex justify-between items-center p-4 sm:p-6 md:p-8">
            <motion.div
              className="text-[#8B7355]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="sm:w-10 sm:h-10">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="20" r="6" fill="currentColor" />
              </svg>
            </motion.div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* THEME TOGGLE */}
              <motion.button
                onClick={toggleDarkMode}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${darkMode ? "bg-white/10 text-white" : "bg-[#8B7355] text-white"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <Moon size={18} className="sm:w-5 sm:h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Sun size={18} className="sm:w-5 sm:h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* CLOSE BUTTON */}
              <motion.button
                onClick={onClose}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all border-2 ${darkMode
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-[#8B7355]/30 text-[#8B7355] hover:bg-[#8B7355]/10"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>

          {/* SCROLLABLE CONTAINER */}
          <div
            id="roadmap-container"
            className="relative flex-1 w-full overflow-y-auto overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              #roadmap-container::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* CONTENT WRAPPER - Extra height for scrolling */}
            <div className="relative w-full h-[200vh] min-h-[1400px]">

              {/* SVG CURVED PATHS - Contained within viewport width */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 200"
                preserveAspectRatio="none"
                style={{ zIndex: 1 }}
              >
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={darkMode ? "#6B5744" : "#A0826D"} />
                    <stop offset="50%" stopColor={darkMode ? "#8B7355" : "#8B7355"} />
                    <stop offset="100%" stopColor={darkMode ? "#6B5744" : "#A0826D"} />
                  </linearGradient>
                </defs>

                {/* Background curves - Light colored for depth */}
                <motion.path
                  d="M -5 20 Q 25 15, 50 22 T 105 18"
                  stroke={darkMode ? "#2A2A2A" : "#D4C4B0"}
                  strokeWidth="6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 0.2 }}
                />

                <motion.path
                  d="M -5 45 Q 30 38, 60 48 T 105 42"
                  stroke={darkMode ? "#2A2A2A" : "#D4C4B0"}
                  strokeWidth="6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 0.3 }}
                />

                <motion.path
                  d="M -5 80 Q 35 72, 65 82 T 105 76"
                  stroke={darkMode ? "#2A2A2A" : "#D4C4B0"}
                  strokeWidth="6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 0.4 }}
                />

                <motion.path
                  d="M -5 125 Q 25 118, 55 128 T 105 122"
                  stroke={darkMode ? "#2A2A2A" : "#D4C4B0"}
                  strokeWidth="6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />

                <motion.path
                  d="M -5 165 Q 30 155, 60 168 T 105 160"
                  stroke={darkMode ? "#2A2A2A" : "#D4C4B0"}
                  strokeWidth="6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 0.6 }}
                />

                {/* Main golden paths - Multiple curves */}
                <motion.path
                  d="M -5 16 Q 30 10, 55 18 Q 80 26, 105 20"
                  stroke="url(#goldGradient)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  style={{
                    filter: darkMode
                      ? "drop-shadow(0 0 8px rgba(139,115,85,0.6))"
                      : "drop-shadow(0 0 6px rgba(139,115,85,0.4))",
                  }}
                />

                <motion.path
                  d="M -5 35 Q 20 42, 50 36 Q 75 30, 105 38"
                  stroke="url(#goldGradient)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
                  style={{
                    filter: darkMode
                      ? "drop-shadow(0 0 8px rgba(139,115,85,0.6))"
                      : "drop-shadow(0 0 6px rgba(139,115,85,0.4))",
                  }}
                />

                <motion.path
                  d="M -5 58 Q 35 50, 65 60 Q 85 68, 105 62"
                  stroke="url(#goldGradient)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 0.4, ease: "easeInOut" }}
                  style={{
                    filter: darkMode
                      ? "drop-shadow(0 0 8px rgba(139,115,85,0.6))"
                      : "drop-shadow(0 0 6px rgba(139,115,85,0.4))",
                  }}
                />

                <motion.path
                  d="M -5 90 Q 25 82, 50 92 Q 75 100, 105 94"
                  stroke="url(#goldGradient)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 0.6, ease: "easeInOut" }}
                  style={{
                    filter: darkMode
                      ? "drop-shadow(0 0 8px rgba(139,115,85,0.6))"
                      : "drop-shadow(0 0 6px rgba(139,115,85,0.4))",
                  }}
                />

                <motion.path
                  d="M -5 135 Q 30 128, 60 138 Q 82 145, 105 140"
                  stroke="url(#goldGradient)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
                  style={{
                    filter: darkMode
                      ? "drop-shadow(0 0 8px rgba(139,115,85,0.6))"
                      : "drop-shadow(0 0 6px rgba(139,115,85,0.4))",
                  }}
                />

                <motion.path
                  d="M -5 172 Q 25 165, 55 175 Q 80 182, 105 176"
                  stroke="url(#goldGradient)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
                  style={{
                    filter: darkMode
                      ? "drop-shadow(0 0 8px rgba(139,115,85,0.6))"
                      : "drop-shadow(0 0 6px rgba(139,115,85,0.4))",
                  }}
                />

                {/* Animated glow dots */}
                <motion.circle
                  r="0.6"
                  fill={darkMode ? "#9A7B4F" : "#8B7355"}
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    offsetPath: "path('M -5 16 Q 30 10, 55 18 Q 80 26, 105 20')",
                    filter: "drop-shadow(0 0 4px rgba(139,115,85,0.9))",
                  }}
                />

                <motion.circle
                  r="0.6"
                  fill={darkMode ? "#9A7B4F" : "#8B7355"}
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                  }}
                  style={{
                    offsetPath: "path('M -5 90 Q 25 82, 50 92 Q 75 100, 105 94')",
                    filter: "drop-shadow(0 0 4px rgba(139,115,85,0.9))",
                  }}
                />
              </svg>

              {/* NAVIGATION LABELS */}
              {nodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.button
                    key={node.id}
                    className="absolute z-20"
                    style={{
                      top: node.top,
                      left: node.left,
                      right: node.right,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { delay: i * 0.12 + 1 },
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onNavigate(node.id)}
                  >
                    <div
                      className={`
                        flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 
                        rounded-full backdrop-blur-sm border-2 transition-all
                        text-[10px] sm:text-sm md:text-base font-bold tracking-wide
                        ${darkMode
                          ? "bg-black/60 text-white border-white/20 hover:border-[#9A7B4F] hover:bg-black/80"
                          : "bg-white/90 text-[#5A4A3A] border-[#8B7355]/30 hover:border-[#8B7355] hover:bg-white"
                        }
                        shadow-xl whitespace-nowrap
                      `}
                    >
                      <Icon size={14} className="sm:w-[18px] sm:h-[18px]" />
                      <span>{node.label}</span>
                    </div>
                  </motion.button>
                );
              })}

              {/* SCROLL INDICATOR - Bottom Center - Fixed position */}
              <motion.div
                className="fixed left-1/2 bottom-0 sm:bottom-0 transform -translate-x-1/2 z-30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <motion.button
                  onClick={handleScrollDown}
                  className={`
                    flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full
                    backdrop-blur-sm border transition-all text-[10px] sm:text-sm cursor-pointer
                    ${darkMode
                      ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
                      : "bg-white/80 text-[#5A4A3A] border-[#8B7355]/20 hover:bg-white"
                    }
                    shadow-lg
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    y: { duration: 2, repeat: Infinity },
                    type: "spring"
                  }}
                >
                  <ChevronDown size={14} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden sm:inline">Scroll down</span>
                </motion.button>
              </motion.div>

              {/* SCROLL UP BUTTON - Bottom Right - Fixed position */}
              <motion.button
                onClick={handleScrollUp}
                className={`
                  fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full
                  flex items-center justify-center transition-all cursor-pointer
                  ${darkMode
                    ? "bg-[#8B7355] text-white hover:bg-[#9A7B4F]"
                    : "bg-[#8B7355] text-white hover:bg-[#6B5744]"
                  }
                  shadow-xl
                `}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronUp size={20} className="sm:w-[22px] sm:h-[22px]" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoadmapNavigation;