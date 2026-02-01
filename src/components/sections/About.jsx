import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMe = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [0, 1, 1, 0.4]
    );

    return (
        <section
            id="about"
            className="py-16 md:py-30 bg-[#F7F4EF] dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                    ref={containerRef}
                    style={{ scale, opacity }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center items-center text-center"
                >
                    {/* Centered Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 md:mb-8 transition-colors"
                        >
                            Who am I?
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="space-y-4 md:space-y-5"
                        >
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                                Hi, I'm{" "}
                                <span className="font-semibold text-[#8B6B3E] dark:text-[#D6C7B1] transition-colors">
                                    Kannan
                                </span>
                                , a Front-End Developer who loves turning ideas into intuitive, polished web experiences.
                            </p>

                            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                                With over 2 years of experience, I've worked on startup products,
                                enterprise platforms, and international client projects using
                                React, Next.js, JavaScript, and modern UI practices.
                            </p>

                            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                                I care deeply about clean code, responsive design, and user
                                experience. Whether it's building a scalable UI system or refining
                                performance, I enjoy solving problems that sit at the intersection
                                of design and development.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
