import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import riya from "../../assets/riya-couture.png";
import idacard from "../../assets/idcard.png";
import chatbot from "../../assets/chatbot.png";
import scribbles from "../../assets/scribbles.png";
import trishul from "../../assets/trishul.png";


// Mock Data
const PROJECTS = [
    {
        id: 1,
        title: "Fashion E-Commerce Landing Page – Riya’s Couture",
        description:
            "A premium fashion e-commerce landing page focused on visual storytelling and conversion-driven design. Built with a modern UI to highlight collections, promotions, and brand identity.",
        tech: ["React.js", "Tailwind CSS", "JavaScript"],
        image: riya,
        date: "2025",
        links: {
            live: "https://riya-couture.netlify.app/"
        }
    },
    {
        id: 2,
        title: "School ID Card Generator System",
        description:
            "A complete PHP-based ID card generation system designed for schools to create professional student ID cards. Supports both single and bulk ID card creation with automatic photo processing and print-ready output for large-scale school requirements.",
        tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "GD Library"],
        image: idacard,
        date: "Current Company Project",
        links: {
            live: "https://idcard-generate.trishultrades.com/",
            github: "https://github.com/kannanVS007/id-card"
        }
    },
    {
        id: 3,
        title: "AI Chatbot Interface – NPNG Tech",
        description:
            "An interactive chatbot UI built for AI-driven customer engagement. Designed to simulate real-time conversations and improve lead generation, onboarding, and customer support experiences.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion"],
        image: chatbot,
        date: "2025",
        links: {
            live: "https://my-chatbot-react.netlify.app/"
        }
    },
    {
        id: 4,
        title: "Scribbles – School of Design (Live Website)",
        description:
            "A professional educational website developed for a creative design institute. Focused on clean layout, strong typography, and illustration-based visuals to attract and inform prospective students.",
        tech: ["HTML5", "CSS3"],
        image: scribbles,
        date: "Live Project",
        links: {
            live: "http://www.scribblesdesign.in/"
        }
    },
    {
        id: 5,
        title: "Trishul Trades – Business ",
        description:
            "A full-fledged business website independently designed, developed, deployed, and hosted for Trishul Trades. The platform showcases school accessories, bags, and printing products with a customer-first approach, strong branding, and enquiry-focused CTAs. Built and maintained as part of my current company’s production environment.",
        tech: ["HTML5", "CSS3", "Tailwind CSS"],
        image: trishul,
        date: "Current Company Project",
        links: {
            live: "https://trishultrades.com/"
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

    const getCardStyle = (index) => {
        if (index === activeIndex) return "active";

        const prevIndex = (activeIndex - 1 + PROJECTS.length) % PROJECTS.length;
        const nextIndex = (activeIndex + 1) % PROJECTS.length;

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
            transition: { duration: 0.6 }
        },
        prev: {
            x: "-60%",
            scale: 0.85,
            opacity: 0.6,
            zIndex: 20,
            transition: { duration: 0.6 }
        },
        next: {
            x: "60%",
            scale: 0.85,
            opacity: 0.6,
            zIndex: 20,
            transition: { duration: 0.6 }
        },
        hidden: {
            opacity: 0,
            scale: 0.5
        }
    };

    return (
        <section id="projects" className="py-24 bg-[#F5F2EA] dark:bg-[#0F0F0F] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold dark:text-white mb-4">
                        Live & Client Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Real-world applications built, deployed, and maintained for businesses and organizations.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative h-[550px] flex items-center justify-center">

                    {/* Nav Buttons */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-40">
                        <button
                            onClick={prevProject}
                            className="w-12 h-12 rounded-full 
             bg-white dark:bg-gray-800 
             text-gray-900 dark:text-white
             shadow flex items-center justify-center
             hover:bg-gray-100 dark:hover:bg-gray-700
             transition"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={nextProject}
                            className="w-12 h-12 rounded-full 
             bg-white dark:bg-gray-800 
             text-gray-900 dark:text-white
             shadow flex items-center justify-center
             hover:bg-gray-100 dark:hover:bg-gray-700
             transition"
                        >
                            <FaArrowRight />
                        </button>
                    </div>

                    {/* Cards */}
                    {PROJECTS.map((project, index) => {
                        const status = getCardStyle(index);
                        return (
                            <motion.div
                                key={project.id}
                                variants={variants}
                                animate={status}
                                className="absolute w-[90%] md:w-[800px] bg-white dark:bg-[#1A1A1A] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full md:w-1/2 h-64 md:h-auto object-contain"
                                />

                                {/* Content */}
                                <div className="p-8 flex flex-col justify-between w-full md:w-1/2">
                                    <div>
                                        <h3 className="text-2xl font-bold dark:text-white mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-white/10 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between border-t pt-4">
                                        <span className="text-xs font-bold text-[#8B7355]">
                                            {project.date}
                                        </span>

                                        {/* LINKS */}
                                        <div className="flex items-center gap-4">

                                            {/* GitHub Link LEFT SIDE */}
                                            {project.links?.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-black dark:hover:text-white text-lg transition"
                                                >
                                                    <FaGithub />
                                                </a>
                                            )}

                                            {/* Live Demo Link */}
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 font-semibold hover:text-[#8B7355] transition"
                                            >
                                                Live Demo
                                                <FaExternalLinkAlt size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
