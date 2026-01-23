import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#F9F9F4] dark:bg-[#0F0F0F]">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-accent font-medium tracking-wider uppercase text-sm">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary dark:text-white">Let's Work Together</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Feel free to reach out for collaborations, freelance work, or just a friendly chat.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email Me</p>
                                <p className="font-medium">hello@alexmorgan.dev</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-600 outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input type="email" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-600 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Subject</label>
                            <input type="text" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-600 outline-none transition-all" placeholder="Project Inquiry" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea rows="4" className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-600 outline-none transition-all" placeholder="Tell me about your project..." />
                        </div>
                        <button type="submit" className="w-full py-3 bg-primary dark:bg-white text-white dark:text-black font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message <FaPaperPlane size={14} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
