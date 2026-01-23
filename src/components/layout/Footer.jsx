import React from 'react';
import { SOCIALS } from '../../utils/data';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 py-10 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xl font-bold tracking-tighter text-primary dark:text-white">
                    Alex<span className="text-accent">.</span>
                </div>

                <div className="flex gap-6">
                    {SOCIALS.map(social => (
                        <a key={social.name} href={social.href} className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>

                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Alex Morgan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
