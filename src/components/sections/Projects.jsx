import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../utils/data';
import { FaArrowLeft, FaArrowRight, FaWifi, FaUser, FaLayerGroup } from 'react-icons/fa';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
    };

    const currentProject = PROJECTS_DATA[currentIndex];

    // Helper to get previous and next images for blurred background
    const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;

    return (
        <section id="projects" className="py-24 bg-[#F5F2EA] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Carousel Area */}
                <div className="relative mb-8 flex items-center justify-center h-[300px] md:h-[400px]">

                    {/* Previous Image (Blurred) */}
                    <div className="absolute left-0 w-1/3 h-3/4 opacity-30 blur-[2px] transform -translate-x-1/2 scale-90 hidden md:block rounded-3xl overflow-hidden transition-all duration-500">
                        <img src={PROJECTS_DATA[prevIndex].image} alt="Previous" className="w-full h-full object-cover" />
                    </div>

                    {/* Active Image */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-2/3 h-full rounded-[2rem] overflow-hidden shadow-2xl relative z-10"
                    >
                        <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover" />
                        {/* Arrows Overlay */}
                        <button onClick={prevProject} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                            <FaArrowLeft />
                        </button>
                        <button onClick={nextProject} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                            <FaArrowRight />
                        </button>
                    </motion.div>

                    {/* Next Image (Blurred) */}
                    <div className="absolute right-0 w-1/3 h-3/4 opacity-30 blur-[2px] transform translate-x-1/2 scale-90 hidden md:block rounded-3xl overflow-hidden transition-all duration-500">
                        <img src={PROJECTS_DATA[nextIndex].image} alt="Next" className="w-full h-full object-cover grayscale" />
                    </div>
                </div>

                <div className="text-center mb-12">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Scroll Down</span>
                </div>

                {/* Detail Card */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                        <div>
                            <h3 className="text-4xl font-bold font-display text-gray-900 mb-2">{currentProject.title}</h3>
                        </div>
                        <button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            Live Preview <FaWifi className="rotate-45" />
                        </button>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
                        {currentProject.description}
                    </p>

                    <div className="h-[1px] bg-gray-100 w-full mb-8" />

                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        {/* Meta Info */}
                        <div className="flex gap-8 md:gap-16">
                            <div className="flex items-center gap-2 text-gray-700">
                                <FaUser />
                                <span className="font-medium text-sm">{currentProject.meta.type}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <FaLayerGroup />
                                <span className="font-medium text-sm">{currentProject.meta.components}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Role</span>
                                <span className="font-medium text-sm text-gray-900">{currentProject.meta.role}</span>
                            </div>
                        </div>

                        {/* Tech Pills */}
                        <div className="flex flex-col items-end gap-4">
                            <span className="text-sm text-gray-400">{currentProject.date}</span>
                            <div className="flex gap-2 flex-wrap justify-end">
                                {currentProject.tech.map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
