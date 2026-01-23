import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '../../utils/data';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('Development');
    const tabs = Object.keys(SKILLS_DATA);

    return (
        <section id="skills" className="py-24 bg-[#F5F2EA] relative">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-8">Skills</h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === tab
                                        ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid Container */}
                <div className="bg-[#EBE7DD]/50 rounded-[3rem] p-8 md:p-12 min-h-[400px] relative overflow-hidden backdrop-blur-sm border border-white/50 shadow-inner">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                        >
                            {SKILLS_DATA[activeTab].map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-3 aspect-square group cursor-default"
                                >
                                    <div className="text-3xl text-gray-400 group-hover:text-gray-900 transition-colors">
                                        {skill.icon ? <skill.icon /> : <span className="text-lg font-bold">#</span>}
                                    </div>
                                    <span className="font-medium text-gray-700 text-sm text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Skills;
