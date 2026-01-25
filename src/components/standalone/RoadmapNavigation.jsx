import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Moon, Map } from "lucide-react";

/**
 * Premium Roadmap Navigation
 * - Default Dark Mode
 * - Animated roadmap line with glow pulse
 * - Nodes move along the path
 * - Mobile responsive
 */
const RoadmapNavigation = ({ isOpen, onClose, onNavigate }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((p) => !p);

  // Node positions as path progress (0 → 1)
  const nodes = [
    { id: "home", label: "HOME", progress: 0.1 },
    { id: "about", label: "ABOUT", progress: 0.3 },
    { id: "projects", label: "PROJECTS", progress: 0.5 },
    { id: "blogs", label: "BLOGS", progress: 0.7 },
    { id: "contact", label: "CONTACT", progress: 0.9 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundColor: darkMode ? "#0F0F0F" : "#F5F5F5",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* TEXTURE */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              backgroundImage: darkMode
                ? "radial-gradient(#1a1a1a 1px, transparent 1px)"
                : "radial-gradient(#d1d1d1 1px, transparent 1px)",
            }}
            transition={{ duration: 0.6 }}
            style={{ backgroundSize: "24px 24px" }}
          />

          {/* HEADER */}
          <div className="relative z-10 flex justify-between items-center p-4 sm:p-8">
            <div className="flex items-center gap-2 text-[#9A7B4F]">
              <Map size={22} />
              <span className="tracking-widest text-xs sm:text-sm font-bold">
                EXPLORER MAP
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              {/* THEME TOGGLE */}
              <button onClick={toggleDarkMode} className="text-white/70">
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <Moon size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Sun size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 color-[#fff]"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MAP AREA */}
          <div className="relative flex-1 w-full h-full">
            {/* SVG PATH */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 800"
              preserveAspectRatio="none"
            >
              {/* MAIN PATH */}
              <motion.path
                id="roadPath"
                d="M -100 200 C 200 0, 400 400, 600 300 S 900 600, 1200 400"
                stroke="#9A7B4F"
                strokeWidth="5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8 }}
                style={{
                  filter:
                    "drop-shadow(0 0 14px rgba(154,123,79,0.7))",
                }}
              />

              {/* GLOW PULSE */}
              <motion.circle
                r="8"
                fill="#9A7B4F"
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  offsetPath:
                    "path('M -100 200 C 200 0, 400 400, 600 300 S 900 600, 1200 400')",
                  filter:
                    "drop-shadow(0 0 10px rgba(154,123,79,0.9))",
                }}
              />
            </svg>

            {/* NODES ALONG PATH */}
            {nodes.map((node, i) => (
              <motion.button
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  offsetPath:
                    "path('M -100 200 C 200 0, 400 400, 600 300 S 900 600, 1200 400')",
                  offsetDistance: `${node.progress * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { delay: i * 0.2 + 0.6 },
                }}
                onClick={() => onNavigate(node.id)}
              >
                <div
                  className={`
                    px-4 sm:px-8 py-2 sm:py-3 rounded-full backdrop-blur-md border
                    text-xs sm:text-base transition-all
                    ${darkMode
                      ? "bg-black/50 text-white border-white/10"
                      : "bg-white/80 text-black border-black/10"
                    }
                    hover:scale-110 hover:border-[#9A7B4F]
                  `}
                >
                  {node.label}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="p-4 sm:p-6 text-center text-[10px] sm:text-xs tracking-[0.3em] text-white/30">
            JOURNEY THROUGH MY WORK
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoadmapNavigation;
