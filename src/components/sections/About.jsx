import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-black/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="text-accent font-medium tracking-wider uppercase text-sm">About Me</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8 text-primary dark:text-white">Design & Code</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        I'm a passionate developer and designer with a keen eye for detail. I bridge the gap between engineering and design, creating user experiences that look great and perform beautifully.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        With a background in Computer Science and a love for visual arts, I specialize in building React applications with modern UI libraries. When I'm not coding, you can find me exploring new design trends or contributing to open source.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
