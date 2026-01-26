import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EXPERIENCE_DATA = [
    {
        id: 1,
        role: "Front-End Developer",
        company: "Nexify Software",
        period: "Dec 2025 – Present",
        current: true,
        description: [
            "Currently working as a Front-End Developer building and maintaining business websites for international clients, including a Denmark-based granite and stone industry company",
            "Developing responsive, user-friendly web interfaces using HTML5, CSS3, JavaScript, React.js, and modern UI practices",
            "Collaborating with designers and backend teams to translate business requirements into high-quality, scalable UI solutions",
        ],
        skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
        impact: "Building global digital presence",
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Bezohminds",
        period: "Dec 2024 – Aug 2025",
        current: false,
        description: [
            "Built and maintained enterprise-level web applications using Next.js (CSR & SSR) and Node.js",
            "Developed and maintained a private app store with organized service listings to simplify internal application discovery",
            "Implemented secure authentication and authorization systems for business applications",
            "Focused on scalability, performance, and maintainable UI architecture",
        ],
        skills: ["Next.js", "Node.js", "SSR/CSR", "Authentication", "Scalability"],
        impact: "Enterprise-grade architecture",
    },
    {
        id: 3,
        role: "Front-End Developer",
        company: "Government Enterprises",
        period: "July 2023 – Oct 2024",
        current: false,
        description: [
            "Independently handled end-to-end front-end development for internal enterprise web applications",
            "Built modular and scalable UI systems using HTML5, CSS3, SCSS, JavaScript (ES6), and Handlebars.js",
            "Applied BEM methodology, improving CSS maintainability and readability by ~30%",
            "Worked with minimal supervision, taking ownership of UI delivery and timelines",
        ],
        skills: ["HTML5", "CSS3", "SCSS", "JavaScript ES6", "BEM", "Handlebars.js"],
        impact: "30% improvement in maintainability",
    },
    {
        id: 4,
        role: "Front-End Developer",
        company: "Trishul Tech Solution",
        period: "Nov 2022 – Apr 2023",
        current: false,
        description: [
            "Collaborated directly with founders to convert business requirements into functional, responsive web pages",
            "Optimized website layout, navigation, and responsiveness to improve user engagement",
            "Contributed to brand credibility through a polished and professional online presence",
            "Built reusable UI components using modern front-end practices",
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI Components"],
        impact: "Foundation of expertise",
    },
];

const ExperienceCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.4]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, opacity }}
            className="mb-6"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
            >
                {/* Main Card Container */}
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-[#8B6B3E]/30 dark:hover:border-[#D6C7B1]/30 transition-all duration-500 shadow-md hover:shadow-xl">

                    {/* Compact Layout */}
                    <div className="p-6 md:p-8">
                        {/* Header Row */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B6B3E] to-[#A0845A] dark:from-[#D6C7B1] dark:to-[#E8DCC8] flex items-center justify-center text-white dark:text-gray-900 font-bold text-base shadow-md transition-colors"
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </motion.div>

                                    {item.current && (
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="px-2.5 py-1 bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-600 dark:to-green-700 text-white text-[10px] font-bold rounded-full flex items-center gap-1 shadow-sm transition-colors"
                                        >
                                            <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
                                            CURRENT
                                        </motion.div>
                                    )}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 tracking-tight transition-colors">
                                    {item.role}
                                </h3>

                                <p className="text-base md:text-lg font-semibold text-[#8B6B3E] dark:text-[#D6C7B1] mb-1 transition-colors">
                                    {item.company}
                                </p>

                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider transition-colors">
                                    {item.period}
                                </p>
                            </div>

                            {/* Impact Badge */}
                            <div className="md:text-right flex-shrink-0">
                                <div className="inline-block px-3 py-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5 transition-colors">Key Impact</p>
                                    <p className="text-xs font-bold text-gray-900 dark:text-gray-100 transition-colors">{item.impact}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description - Compact */}
                        <div className="mb-5 space-y-2">
                            {item.description.slice(0, 2).map((desc, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + i * 0.05 }}
                                    className="flex items-start gap-2 group/item"
                                >
                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-[#8B6B3E] dark:bg-[#D6C7B1] flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300 transition-colors" />
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                                        {desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills - Compact */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                            className="flex flex-wrap gap-2"
                        >
                            {item.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ y: -1, scale: 1.02 }}
                                    className="px-3 py-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-lg hover:shadow-sm transition-all duration-300 cursor-default transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B6B3E]/0 via-transparent to-[#D6C7B1]/0 dark:from-[#D6C7B1]/0 dark:to-[#8B6B3E]/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl transition-colors" />
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-[#8B6B3E]/10 to-transparent dark:from-[#D6C7B1]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none transition-colors" />
            </motion.div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative py-20 md:py-24 bg-[#FAF8F3] dark:bg-gray-900 overflow-hidden transition-colors duration-300"
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B6B3E]/5 dark:bg-[#D6C7B1]/5 rounded-full blur-3xl transition-colors" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D6C7B1]/5 dark:bg-[#8B6B3E]/5 rounded-full blur-3xl transition-colors" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight transition-colors">
                            Experience
                        </h2>
                        <div className="flex items-center justify-center gap-3 mb-5">
                            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B6B3E] dark:to-[#D6C7B1] transition-colors" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8B6B3E] dark:bg-[#D6C7B1] transition-colors" />
                            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#8B6B3E] dark:to-[#D6C7B1] transition-colors" />
                        </div>
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors">
                            Short previews of my journey—from startups to enterprises, building exceptional web experiences.
                        </p>
                    </motion.div>
                </div>

                {/* Experience Grid - 2 Column on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {EXPERIENCE_DATA.map((item, index) => (
                        <ExperienceCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* Bottom Decorative Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex items-center justify-center mt-12 gap-2"
                >
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#8B6B3E] to-transparent dark:via-[#D6C7B1] transition-colors" />
                    <div className="w-1 h-1 rounded-full bg-[#8B6B3E] dark:bg-[#D6C7B1] animate-pulse transition-colors" />
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#8B6B3E] to-transparent dark:via-[#D6C7B1] transition-colors" />
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;