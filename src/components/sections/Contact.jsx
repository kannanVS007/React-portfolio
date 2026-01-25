import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaCheckCircle, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Collaboration',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message_type: formData.type,
            message: formData.message,
            submission_time: new Date().toLocaleString(),
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setShowSuccess(true);
            setFormData({ name: '', email: '', type: 'Collaboration', message: '' });

            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="contact" className="relative py-24 bg-[#F5F2EA] dark:bg-[#0F0F0F] transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Introduction & Details */}
                    <div className="flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl font-bold text-black dark:text-white mb-6 font-display leading-tight"
                        >
                            Let's Build Something <br />
                            <span className="text-[#8B7355]">Exceptional.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-lg"
                        >
                            I'm a Front-End Developer with a passion for crafting responsive, user-friendly interfaces.
                            My experience enables me to build scalable web applications that solve real-world problems.
                            <br /><br />
                            Whether you're looking to launch a new product, or need a developer to join your team, I'm ready to help.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 mb-12"
                        >
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1A1A1A] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <FaEnvelope className="text-[#8B7355]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Email</p>
                                    <a href="mailto:vskannan4135@gmail.com" className="text-xl font-medium text-black dark:text-white hover:text-[#8B7355] dark:hover:text-[#8B7355] transition-colors">
                                        vskannan4135@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1A1A1A] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <FaPhone className="text-[#8B7355]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Phone</p>
                                    <a href="tel:+916379524135" className="text-xl font-medium text-black dark:text-white hover:text-[#8B7355] dark:hover:text-[#8B7355] transition-colors">
                                        +91 6379524135
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex gap-4">
                            {/* Socials or other details could go here */}
                            <button className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/10 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase tracking-wider text-sm font-semibold">
                                View Case Studies
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-[#1A1A1A] p-8 md:p-12 rounded-[2.5rem] shadow-xl dark:border dark:border-white/5 relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#F5F2EA] dark:bg-[#0F0F0F] border-none rounded-xl px-4 py-3 text-black dark:text-white focus:ring-2 focus:ring-[#8B7355] outline-none transition-all placeholder-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#F5F2EA] dark:bg-[#0F0F0F] border-none rounded-xl px-4 py-3 text-black dark:text-white focus:ring-2 focus:ring-[#8B7355] outline-none transition-all placeholder-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Whatever you need</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full bg-[#F5F2EA] dark:bg-[#0F0F0F] border-none rounded-xl px-4 py-3 text-black dark:text-white focus:ring-2 focus:ring-[#8B7355] outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option>Hiring</option>
                                    <option>Freelance</option>
                                    <option>Collaboration</option>
                                    <option>General Enquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#F5F2EA] dark:bg-[#0F0F0F] border-none rounded-xl px-4 py-3 text-black dark:text-white focus:ring-2 focus:ring-[#8B7355] outline-none transition-all placeholder-gray-400 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#8B7355] dark:hover:bg-[#8B7355] hover:text-white dark:hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane size={14} />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Success Popup */}
                        <AnimatePresence>
                            {showSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-sm rounded-[2.5rem] z-20"
                                >
                                    <div className="text-center p-8">
                                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <FaCheckCircle size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Thank you for reaching out.<br />I'll get back to you shortly.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
