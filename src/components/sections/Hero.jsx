import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.png';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20 bg-[#F5F2EA] dark:bg-[#0F0F0F] transition-colors duration-500"
        >

            {/* ================= MOBILE / TABLET NAME + ROLE ================= */}
            {/* visible only below md */}
            <div className="relative z-40 flex flex-col items-center text-center mb-[3.5rem] md:hidden mt-[-3.5rem]">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[9vw] font-black tracking-tight text-[#3A3A3A]"
                >
                    KANNAN VS
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.15 }}
                    className="text-[4vw] font-semibold uppercase tracking-widest text-[#7A6F5E]"
                >
                    Full Stack Developer
                </motion.h2>
            </div>

            {/* ================= BACKGROUND ROLE STRIP ================= */}
            <div className="absolute bottom-12 left-0 w-full -rotate-2 bg-[#111] text-[#F5F2EA] py-3 md:py-4 z-0 overflow-hidden shadow-xl skew-x-6 scale-110">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[1, 2, 3, 4].map(i => (
                        <span
                            key={i}
                            className="text-lg md:text-2xl font-semibold uppercase tracking-[0.25em] mx-8 opacity-70"
                        >
                            Full Stack Developer • React & PHP • Scalable Web Applications • Modern Web Experiences
                        </span>
                    ))}
                </div>
            </div>



            {/* ================= DESKTOP CINEMATIC TEXT ================= */}
            {/* hidden on mobile & tablet */}
            <div className="absolute inset-0 hidden md:flex items-center justify-between px-6 md:px-16 lg:px-24 z-10 pointer-events-none select-none">

                {/* Left — Name */}
                <motion.div
                    className="absolute left-8 top-1/2 -translate-y-1/2"
                    animate={{
                        opacity: [0.5, 0.8, 0.5],
                        x: [0, 20, 0],
                        color: ['#3A3A3A', '#7A6F5E', '#3A3A3A']
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <h1 className="text-[4.5vw] font-black tracking-tight">
                        KANNAN VS
                    </h1>
                </motion.div>

                {/* Right — Role */}
                <motion.div
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-right"
                    animate={{
                        opacity: [0.4, 0.75, 0.4],
                        x: [0, -20, 0],
                        color: ['#7A6F5E', '#3A3A3A', '#7A6F5E']
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <h2 className="text-[2.7vw] font-semibold tracking-wide uppercase">
                        Full Stack Developer
                    </h2>
                </motion.div>
            </div>

            {/* ================= BEIGE CIRCLE ================= */}
            <div
                className="absolute top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2
    w-[280px] h-[280px]
    sm:w-[320px] sm:h-[320px]
    md:w-[420px] md:h-[420px]
    lg:w-[500px] lg:h-[500px]
    rounded-full
    z-20
    ring-1 ring-black/10
    shadow-[0_0_0_1px_rgba(0,0,0,0.03)]"
                style={{ backgroundColor: 'rgb(214, 199, 177)' }}
            />


            {/* ================= PROFILE IMAGE ================= */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="relative z-30 mt-[-50px]"
            >
                <div className="w-[85vw] sm:w-[300px] md:w-[400px] lg:w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                    <img
                        src={profileImg}
                        alt="Kannan VS"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 pointer-events-none" />
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
