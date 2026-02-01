import React from 'react';
import { Github, Linkedin, Instagram, Phone } from 'lucide-react';

const Footer = () => {
    const socials = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/kannanVS007',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/kannan-vs/',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            href: 'https://www.instagram.com/mr__savvge_/',
            gradient: 'from-pink-500 to-orange-500'
        },
        {
            name: 'WhatsApp',
            icon: Phone,
            href: 'https://wa.me/916379524135',
            gradient: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <footer className="relative bg-white dark:bg-gray-900 overflow-hidden">
            {/* Animated background effects */}
            <div className="absolute inset-0 opacity-20 dark:opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 dark:bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 dark:bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-purple-500 to-transparent"></div>

            <div className="relative container mx-auto px-4 py-8">
                {/* Main content */}
                <div className="flex flex-col items-center space-y-6">
                    {/* Logo with glow effect */}
                    <div className="group cursor-pointer">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 dark:text-white">
                            Kannan VS
                            <span className="inline-block text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text">.</span>
                        </h2>
                        <div className="h-0.5 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mt-1"></div>
                    </div>

                    {/* Social icons with cinematic hover effects */}
                    <div className="flex gap-4">
                        {socials.map((social, index) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>

                                {/* Icon container */}
                                <div className={`relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br ${social.gradient} p-[1.5px] transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-12`}>
                                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                                        <social.icon className="w-4 h-4 text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-black px-2 py-0.5 rounded text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {social.name}
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Decorative line */}
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

                    {/* Copyright with typing effect styling */}
                    <div className="text-center space-y-1">
                        <p className="text-gray-500 dark:text-gray-400 text-xs font-light tracking-wider">
                            Crafted with passion
                        </p>
                        <p className="text-gray-400 dark:text-gray-500 text-[10px] font-mono">
                            © {new Date().getFullYear()} Kannan. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom gradient glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-pink-500 to-transparent"></div>
        </footer>
    );
};

export default Footer;