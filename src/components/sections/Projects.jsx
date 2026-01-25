import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

// Mock Data for Premium Presentation
const PROJECTS = [
    {
        id: 1,
        title: "JNTU-GV Admission Portal",
        description: "Designed and implemented an end-to-end university admission workflow that replaced manual processes, reducing friction for thousands of applicants. Features include real-time application tracking, document verification, and automated seat allocation analytics.",
        tech: ["React", "Node.js", "MongoDB", "Express", "CSS"],
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop", // University/Abstract concept
        date: "July 2025",
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers. Visualizes sales data, user demographics, and inventory status in real-time. Built with performance in mind using Next.js and high-performance charting libraries.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Dashboard/Analytics
        date: "Aug 2024",
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        id: 3,
        title: "TaskMaster Pro",
        description: "A collaborative project management tool inspired by Trello and Asana. Supports drag-and-drop tasks, real-time updates via WebSockets, and team workspaces with granular permission settings.",
        tech: ["React", "Redux", "Node.js", "Socket.io"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1939&auto=format&fit=crop", // Productivity/Task
        date: "Jan 2025",
        links: {
            live: "#",
            github: "#"
        }
    }
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };

    // Helper to determine z-index and visuals based on position relative to active activeIndex
    const getCardStyle = (index) => {
        if (index === activeIndex) return "active";

        const length = PROJECTS.length;
        // Simple logic for 3 items: Previous is (active - 1), Next is (active + 1)
        // With wrap around logic
        const prevIndex = (activeIndex - 1 + length) % length;
        const nextIndex = (activeIndex + 1) % length;

        if (index === prevIndex) return "prev";
        if (index === nextIndex) return "next";
        return "hidden";
    };

    const variants = {
        active: {
            x: 0,
            scale: 1,
            opacity: 1,
            zIndex: 30,
            filter: "blur(0px)",
            rotateY: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        prev: {
            x: "-60%", // Move to left
            scale: 0.85,
            opacity: 0.6,
            zIndex: 20,
            filter: "blur(2px)",
            rotateY: 15, // Subtle 3D turn
            transition: { duration: 0.6, ease: "easeOut" }
        },
        next: {
            x: "60%", // Move to right
            scale: 0.85,
            opacity: 0.6,
            zIndex: 20,
            filter: "blur(2px)",
            rotateY: -15, // Subtle 3D turn
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hidden: {
            x: 0,
            scale: 0.5,
            opacity: 0,
            zIndex: 10,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Mobile swipe handlers could be added here, but for now buttons work well.

    return (
        <section id="projects" className="py-24 bg-[#F5F2EA] dark:bg-[#0F0F0F] overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-7xl relative">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-black dark:text-white mb-4 transition-colors duration-500 font-display">
                        Some of my Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of technical complexity and design precision.
                    </p>
                </div>

                {/* Stacked Carousel Container */}
                <div className="relative h-[600px] md:h-[500px] flex items-center justify-center perspective-1000">

                    {/* Navigation Buttons (Desktop: Outside, Mobile: Bottom or Overlay) */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-40 px-4 md:px-12 pointer-events-none">
                        <button
                            onClick={prevProject}
                            className="w-12 h-12 rounded-full bg-white dark:bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:scale-110 hover:bg-[#8B7355] hover:text-white transition-all pointer-events-auto"
                        >
                            <FaArrowLeft size={18} />
                        </button>
                        <button
                            onClick={nextProject}
                            className="w-12 h-12 rounded-full bg-white dark:bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:scale-110 hover:bg-[#8B7355] hover:text-white transition-all pointer-events-auto"
                        >
                            <FaArrowRight size={18} />
                        </button>
                    </div>

                    {/* Cards */}
                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                        {PROJECTS.map((project, index) => {
                            const status = getCardStyle(index);
                            return (
                                <motion.div
                                    key={project.id}
                                    variants={variants}
                                    initial="hidden"
                                    animate={status}
                                    className="absolute w-[90%] md:w-[800px] bg-white dark:bg-[#1A1A1A] rounded-[2rem] shadow-2xl dark:border dark:border-white/5 overflow-hidden flex flex-col md:flex-row"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    {/* Image Section (50%) */}
                                    <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content Section (50%) */}
                                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight font-display mb-2">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack Pills */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-[#F5F2EA] dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold tracking-wide border border-transparent dark:border-white/5"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Footer / Actions */}
                                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-6 mt-auto">
                                            <span className="text-xs font-bold uppercase tracking-widest text-[#8B7355]">
                                                {project.date}
                                            </span>

                                            <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-[#8B7355] dark:hover:text-[#8B7355] transition-colors group">
                                                View Details
                                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Pagination / Dots */}
                <div className="flex justify-center mt-12 gap-3">
                    {PROJECTS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`
                                h-3 rounded-full transition-all duration-300 
                                ${idx === activeIndex
                                    ? "w-8 bg-[#8B7355]"
                                    : "w-3 bg-gray-300 dark:bg-gray-700 hover:bg-[#8B7355]/50"
                                }
                            `}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
