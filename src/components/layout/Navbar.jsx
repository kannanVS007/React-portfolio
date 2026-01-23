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
} from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">

            {/* ================= VS LOGO (OUTSIDE PILL) ================= */}
            <div
                onClick={() => scrollTo("home")}
                className="cursor-pointer w-12 h-12 rounded-full
        border-2 border-black flex items-center justify-center bg-white"
            >
                <span className="font-bold text-sm">VS</span>
            </div>

            {/* ================= NAV PILL ================= */}
            <div
                className="
          hidden md:flex items-center justify-center
          rounded-full px-6 lg:px-8 py-3
          shadow-lg bg-[#F7F4EF] border border-[#D6C7B1]
        "
            >
                <div className="flex items-center gap-6 lg:gap-8">

                    {/* Home */}
                    <NavBtn active label="Home" onClick={() => scrollTo("home")}>
                        <Home size={18} />
                    </NavBtn>

                    {/* About */}
                    <NavBtn label="About" onClick={() => scrollTo("about")}>
                        <User size={18} />
                    </NavBtn>

                    {/* Projects */}
                    <NavBtn label="Projects" onClick={() => scrollTo("projects")}>
                        <Folder size={18} />
                    </NavBtn>

                    {/* Case Studies */}
                    <NavBtn label="Case Studies" onClick={() => scrollTo("case-studies")}>
                        <FileText size={18} />
                    </NavBtn>

                    {/* Blogs */}
                    <NavBtn label="Blogs" onClick={() => scrollTo("blogs")}>
                        <PenLine size={18} />
                    </NavBtn>

                    {/* ================= MORE ================= */}
                    <div className="relative -ml-2">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 text-[#2D2D2D]"
                        >
                            <span>More</span>
                            <ChevronDown size={16} />
                        </button>

                        {open && (
                            <div
                                className="
                  absolute left-1/2 -translate-x-1/2 mt-3
                  w-56 rounded-xl border shadow-xl
                  bg-white border-[#D6C7B1]
                "
                            >
                                <DropdownItem
                                    label="Education"
                                    icon={<GraduationCap size={16} />}
                                    onClick={() => scrollTo("education")}
                                />
                                <DropdownItem
                                    label="Skills"
                                    icon={<Sparkles size={16} />}
                                    onClick={() => scrollTo("skills")}
                                />
                                <DropdownItem
                                    label="Contact"
                                    icon={<Phone size={16} />}
                                    onClick={() => scrollTo("contact")}
                                />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;

/* ================= REUSABLE ================= */

const NavBtn = ({ label, onClick, children, active }) => (
    <button
        onClick={onClick}
        className={`relative flex items-center gap-2 text-sm lg:text-base
      ${active ? "text-[#A8834F] font-bold" : "text-[#2D2D2D]"}`}
    >
        {children}
        <span>{label}</span>
        {active && (
            <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#A8834F] rounded-full" />
        )}
    </button>
);

const DropdownItem = ({ label, icon, onClick }) => (
    <button
        onClick={onClick}
        className="
      w-full flex items-center gap-3 px-4 py-2 text-sm text-left
      hover:bg-[#F7F4EF] hover:text-[#A8834F]
    "
    >
        {icon}
        <span>{label}</span>
    </button>
);
