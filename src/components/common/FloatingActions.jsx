import React from 'react';
import { FaArrowUp, FaDownload } from 'react-icons/fa';

const FloatingActions = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex gap-4">
            <a
                href="#contact"
                className="bg-[#A48858] hover:bg-[#8e7448] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
                Contact <FaArrowUp className="rotate-45" />
            </a>
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
                Resume <FaDownload />
            </a>

        </div>
    );
};

export default FloatingActions;
