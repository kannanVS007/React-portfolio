import React, { useState } from "react";
import {
  Home,
  User,
  Folder,
  FileText,
  PenLine,
  ChevronDown,
  GraduationCap,
  Sparkles,
  Phone,
  Menu,
  Sun,
  Moon,
  Map, // Added Map icon
} from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode, onOpenRoadmap }) => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-8">
      <div className="flex items-center justify-between">

        {/* ===== LEFT LOGO ===== */}
        <div onClick={() => scrollTo("home")} className="cursor-pointer">
          <VSLogo darkMode={darkMode} />
        </div>

        {/* ===== CENTER NAV ===== */}
        <div className="
          hidden md:flex items-center rounded-full px-8 py-3
          shadow-lg border transition-colors duration-500
          bg-[#F7F4EF] dark:bg-[#1A1A1A]
          border-[#D6C7B1] dark:border-white/10
        ">
          <div className="flex items-center gap-6 lg:gap-8">

            <NavBtn active label="Home" onClick={() => scrollTo("home")}>
              <Home size={18} />
            </NavBtn>

            <NavBtn label="About" onClick={() => scrollTo("about")}>
              <User size={18} />
            </NavBtn>

            <NavBtn label="Projects" onClick={() => scrollTo("projects")}>
              <Folder size={18} />
            </NavBtn>

            <NavBtn label="Blogs" onClick={() => scrollTo("blogs")}>
              <PenLine size={18} />
            </NavBtn>

            {/* MORE */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1"
              >
                <span>More</span>
                <ChevronDown size={16} />
              </button>

              {open && (
                <div className="
                  absolute left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl
                  border shadow-xl transition-colors
                  bg-white dark:bg-[#1A1A1A]
                  border-[#D6C7B1] dark:border-white/10
                ">
                  <DropdownItem label="Education" icon={<GraduationCap size={16} />} onClick={() => scrollTo("education")} />
                  <DropdownItem label="Skills" icon={<Sparkles size={16} />} onClick={() => scrollTo("skills")} />
                  <DropdownItem label="Contact" icon={<Phone size={16} />} onClick={() => scrollTo("contact")} />
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ===== RIGHT ===== */}
        <div className="flex items-center gap-4">

          {/* 🧭 EXPLORE BUTTON (New) */}
          <button
            onClick={onOpenRoadmap}
            className="
              flex items-center gap-2 px-3 py-2 md:px-4 rounded-full
              bg-[#E8D8BD] dark:bg-[#333] 
              text-primary dark:text-white
              font-medium text-sm transition-all hover:scale-105 active:scale-95
            "
          >
            <Map size={18} />
            <span className="hidden md:inline">Explore</span>
          </button>

          {/* 🌙 THEME TOGGLE */}
          <button
            onClick={toggleDarkMode}
            className="
              relative w-14 h-8 rounded-full
              bg-[#E8D8BD] dark:bg-[#333]
              transition-colors duration-500
            "
          >
            <span
              className={`
                absolute top-0.5 w-7 h-7 rounded-full bg-white
                flex items-center justify-center shadow-md
                transition-all duration-500 ease-in-out
                ${darkMode ? "translate-x-6 rotate-180" : "translate-x-1"}
              `}
            >
              {darkMode ? <Moon size={14} className="text-gray-700" /> : <Sun size={14} className="text-amber-500" />}
            </span>
          </button>

          <button className="md:hidden">
            <Menu size={26} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

/* ================= LOGO ================= */

const VSLogo = ({ darkMode }) => (
  <svg width="38" height="38" viewBox="0 0 36 36">
    <circle
      cx="18"
      cy="18"
      r="16"
      stroke={darkMode ? "#fff" : "#2D2D2D"}
      strokeWidth="2"
      fill="none"
    />
    <text
      x="50%"
      y="54%"
      textAnchor="middle"
      fill={darkMode ? "#fff" : "#2D2D2D"}
      fontSize="12"
      fontWeight="700"
    >
      VS
    </text>
  </svg>
);

/* ================= REUSABLE ================= */

const NavBtn = ({ label, onClick, children, active }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-2 text-sm
      ${active ? "text-[#A8834F] font-bold" : ""}
    `}
  >
    {children}
    <span>{label}</span>
  </button>
);

const DropdownItem = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="
      w-full flex items-center gap-3 px-4 py-2 text-sm
      hover:bg-[#F7F4EF] dark:hover:bg-white/5
    "
  >
    {icon}
    <span>{label}</span>
  </button>
);