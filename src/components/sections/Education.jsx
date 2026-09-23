import React from "react";
import { motion } from "framer-motion";

import collegeLogo from "../../assets/sadak-logo.png";
import schoolLogo from "../../assets/john-logo.png";

const EDUCATION_DATA = [
    {
        id: 1,
        degree: "Bachelor's Degree - B.Sc Information Technology",
        institution: "Sadakathullah Appa College",
        location: "Palayamkottai, Tirunelveli",
        score: "7.86",
        scoreLabel: "CGPA",
        year: "2022",
        logo: collegeLogo,
    },
    {
        id: 2,
        degree: "Higher Secondary Certificate (HSC)",
        institution: "St. John's Higher Secondary School",
        location: "Palayamkottai, Tirunelveli",
        score: "80%",
        scoreLabel: "Percentage",
        year: "2019",
        logo: schoolLogo,
    },
];

const Education = () => {
    return (
        <section
            id="education"
            className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 transition-colors"
                    >
                        Education
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-500 dark:text-gray-400 text-lg transition-colors"
                    >
                        My academic background that built a strong foundation in technology and problem solving.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
                    {EDUCATION_DATA.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="w-full md:w-[420px]"
                        >
                            <div
                                className="
                  flex items-center gap-3 p-3 rounded-xl border
                  bg-[#F7F4EF] dark:bg-gray-800
                  border-[#D6C7B1] dark:border-gray-700
                  hover:shadow-md transition-all duration-300
                "
                                style={{ height: "120px" }}
                            >
                                {/* Logo */}
                                <div className="
                  w-14 h-14 flex-shrink-0 rounded-lg flex items-center justify-center
                  bg-white dark:bg-gray-900
                  border border-[#D6C7B1] dark:border-gray-700
                  transition-colors
                ">
                                    <img
                                        src={item.logo}
                                        alt={item.institution}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex justify-between w-full gap-3">
                                    {/* Left */}
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-sm leading-tight mb-1 text-gray-900 dark:text-gray-100 transition-colors">
                                            {item.degree}
                                        </h3>
                                        <p className="text-xs font-medium text-[#8B6B3E] dark:text-[#D6C7B1] transition-colors">
                                            {item.institution}
                                        </p>
                                        <p className="text-[11px] text-gray-500 dark:text-gray-400 transition-colors">
                                            {item.location}
                                        </p>
                                    </div>

                                    {/* Right */}
                                    <div className="text-right flex-shrink-0">
                                        <p className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors">
                                            {item.score}
                                        </p>
                                        <p className="text-[11px] text-gray-500 dark:text-gray-400 transition-colors">
                                            {item.scoreLabel}
                                        </p>
                                        <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 transition-colors">
                                            {item.year}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
