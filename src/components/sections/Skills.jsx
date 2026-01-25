import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, BarChart, Target, Map, MessageCircle, Puzzle, Users, Lightbulb } from "lucide-react";
import {
    SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython,
    SiFigma, SiAdobexd, SiSketch, SiAdobephotoshop, SiAdobeillustrator,
    SiGit, SiJira, SiSlack, SiNotion, SiHtml5, SiCss3, SiTailwindcss, SiMongodb
} from "react-icons/si";

// Brand Colors & Icons Mapping
const SKILLS_DATA = {
    "Design": [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
        { name: "Sketch", icon: SiSketch, color: "#F7B500" }
    ],
    "Product Thinking": [
        { name: "User Research", icon: Search, color: "#6366F1" },
        { name: "Market Analysis", icon: BarChart, color: "#8B5CF6" },
        { name: "Strategy", icon: Target, color: "#EC4899" },
        { name: "Roadmapping", icon: Map, color: "#10B981" }
    ],
    "Development": [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ],
    "Tools": [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Jira", icon: SiJira, color: "#0052CC" },
        { name: "Slack", icon: SiSlack, color: "#4A154B" },
        { name: "Notion", icon: SiNotion, color: "#000000" }
    ],
    "Soft Skills": [
        { name: "Communication", icon: MessageCircle, color: "#10B981" },
        { name: "Problem Solving", icon: Puzzle, color: "#8B5CF6" },
        { name: "Collaboration", icon: Users, color: "#EF4444" },
        { name: "Critical Thinking", icon: Lightbulb, color: "#F59E0B" }
    ]
};

const Skills = () => {
    const tabs = Object.keys(SKILLS_DATA);
    const [activeTabIndex, setActiveTabIndex] = useState(2); // Start with Development
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const activeTab = tabs[activeTabIndex];
    const autoPlayRef = useRef(null);

    // Auto-play logic
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                handleNext(); // Cycle forward
            }, 4000); // 4 seconds per tab
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlaying, activeTabIndex]);

    const handleNext = () => {
        setActiveTabIndex((prev) => (prev + 1) % tabs.length);
    };

    const handlePrev = () => {
        setActiveTabIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
    };

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
        setIsAutoPlaying(false); // Stop auto-play if user manually clicks
    };

    return (
        <section id="skills" className="py-24 bg-white dark:bg-[#0F0F0F] relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-black dark:text-white mb-12 transition-colors duration-500">Skills</h2>

                    {/* Individual Pill Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {tabs.map((tab, index) => {
                            const isActive = activeTabIndex === index;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => handleTabClick(index)}
                                    className={`
                    relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    border-2
                    ${isActive
                                            ? "text-white border-[#8B7355]"
                                            : "text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#8B7355] dark:hover:border-[#8B7355] bg-white dark:bg-[#1A1A1A]"}
                  `}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabBg"
                                            className="absolute inset-0 bg-[#8B7355] rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Navigation Arrows (Outside) */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 p-3 text-gray-400 hover:text-[#8B7355] transition-colors z-20"
                    >
                        <ChevronLeft size={48} strokeWidth={1.5} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 p-3 text-gray-400 hover:text-[#8B7355] transition-colors z-20"
                    >
                        <ChevronRight size={48} strokeWidth={1.5} />
                    </button>

                    {/* Main Content Box */}
                    <div className="relative w-full min-h-[400px] bg-white dark:bg-[#1A1A1A] rounded-[3rem] border border-gray-200 dark:border-white/5 shadow-lg dark:shadow-2xl overflow-hidden flex items-center justify-center p-8 md:p-12 transition-all duration-500">

                        {/* Watermark Background */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                            <KeyframeMarquee text={activeTab} />
                        </div>

                        {/* Content Transition */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative z-10 w-full flex flex-wrap justify-center items-center gap-6"
                            >
                                {SKILLS_DATA[activeTab].map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="
                        flex items-center gap-4 px-6 py-4 bg-[#f7f4ef] dark:bg-[#252525] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5
                        hover:shadow-md hover:-translate-y-1 transition-all duration-300
                      "
                                        >
                                            {/* Icon */}
                                            <div
                                                className="w-10 h-10 flex items-center justify-center rounded-lg"
                                                style={{ backgroundColor: `${skill.color}15` }}
                                            >
                                                <Icon size={24} style={{ color: skill.color }} />
                                            </div>

                                            {/* Name */}
                                            <span className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </section>
    );
};

// Subtle background text component
const KeyframeMarquee = ({ text }) => {
    return (
        <motion.div
            key={text}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12vw] md:text-[8rem] font-bold text-black dark:text-white uppercase tracking-widest whitespace-nowrap"
        >
            {text}
        </motion.div>
    )
}

export default Skills;