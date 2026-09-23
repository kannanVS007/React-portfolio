import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, BarChart, Target, Map, MessageCircle, Puzzle, Users, Lightbulb, Server, Globe2, Globe2Icon, ServerCog } from "lucide-react";
import {
    SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiJest,
    SiGit, SiBitbucket,
    SiWordpress,
    SiShopify, SiHtml5, SiCss3, SiTailwindcss, SiMongodb, SiNextdotjs,
    SiServerfault,
    SiGlobus
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";




// Brand Colors & Icons Mapping
const SKILLS_DATA = {

    "Product Thinking": [
        { name: "User Research", icon: Search, color: "#6366F1" },
        { name: "Market Analysis", icon: BarChart, color: "#8B5CF6" },
        { name: "Strategy", icon: Target, color: "#EC4899" },
        { name: "Roadmapping", icon: Map, color: "#10B981" }
    ],
    "Development": [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Jest", icon: SiJest, color: "#C2E0C6" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ],
    "Tools": [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
        { name: "Azure DevOps", icon: VscAzureDevops, color: "#0078D7" },
        { name: "cPanel", icon: SiServerfault, color: "#FF6C2C" },
        { name: "DirectAdmin", icon: SiGlobus, color: "#2563EB" }
    ],
    "CMS & Platforms": [
        { name: "WordPress", icon: SiWordpress, color: "#21759B" },
        { name: "Shopify", icon: SiShopify, color: "#95BF47" }
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
        <section id="skills" className="py-12 md:py-24 bg-white dark:bg-[#0F0F0F] relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6 md:mb-12 transition-colors duration-500">Skills</h2>

                    {/* Individual Pill Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {tabs.map((tab, index) => {
                            const isActive = activeTabIndex === index;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => handleTabClick(index)}
                                    className={`
                                        relative
                                        px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300
                                        border-2
                                        ${isActive
                                            ? "text-white border-[#8B7355]"
                                            : "text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#8B7355] dark:hover:border-[#8B7355] bg-white dark:bg-[#1A1A1A]"
                                        }
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
                        className="hidden md:block absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 p-3 text-gray-400 hover:text-[#8B7355] transition-colors z-20"
                    >
                        <ChevronLeft size={48} strokeWidth={1.5} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="hidden md:block absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 p-3 text-gray-400 hover:text-[#8B7355] transition-colors z-20"
                    >
                        <ChevronRight size={48} strokeWidth={1.5} />
                    </button>

                    {/* Main Content Box */}
                    <div className="relative w-full min-h-[300px] md:min-h-[350px] bg-white dark:bg-[#1A1A1A] rounded-2xl md:rounded-[3rem] border border-gray-200 dark:border-white/5 shadow-lg dark:shadow-2xl overflow-hidden flex items-center justify-center p-4 md:p-8 lg:p-12 transition-all duration-500">

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
                                className="relative z-10 w-full flex flex-wrap justify-center items-center gap-3 md:gap-4"
                            >
                                {SKILLS_DATA[activeTab].map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-xl bg-[#F7F4EF] text-black"
                                        >
                                            {/* Icon */}
                                            <div
                                                className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-lg"
                                                style={{ backgroundColor: `${skill.color}15` }}
                                            >
                                                <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: skill.color }} />
                                            </div>

                                            {/* Name */}
                                            <span className="font-bold text-sm md:text-base">
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