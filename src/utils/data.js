import { FaReact, FaJs, FaNodeJs, FaPython, FaFigma, FaGithub, FaHome, FaUser, FaProjectDiagram, FaBook, FaPenNib, FaLinkedin, FaTwitter, FaInstagram, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiCanva, SiPostman, SiVercel, SiCloudinary } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const NAV_LINKS = [
    { name: 'Home', icon: FaHome, href: '#home' },
    { name: 'About', icon: FaUser, href: '#about' },
    { name: 'Projects', icon: FaProjectDiagram, href: '#projects' },
    { name: 'Case Studies', icon: FaBook, href: '#case-studies' },
];

export const SKILLS_DATA = {
    "Development": [
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
    "Design": [
        { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
        { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
        { name: 'Prototyping', icon: null, color: '#A8834F' },
        { name: 'UI Systems', icon: null, color: '#A8834F' },
    ],
    "Product Thinking": [
        { name: 'User Research', icon: null, color: '#A8834F' },
        { name: 'Wireframing', icon: null, color: '#A8834F' },
        { name: 'Strategy', icon: null, color: '#A8834F' },
    ],
    "Tools": [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'GitHub', icon: FaGithub, color: '#181717' },
        { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
    ],
    "Soft Skills": [
        { name: 'Communication', icon: null, color: '#A8834F' },
        { name: 'Teamwork', icon: null, color: '#A8834F' },
        { name: 'Problem Solving', icon: null, color: '#A8834F' },
    ]
};

export const PROJECTS_DATA = [
    {
        id: 1,
        title: 'Portfolio Design System',
        description: 'Designed and built a reusable design system to maintain visual and a content-driven backend to dynamically manage portfolio.',
        image: 'https://via.placeholder.com/800x500?text=Portfolio+System',
        meta: {
            role: 'Design-led Frontend Engineer',
            type: 'Solo',
            components: '50+ reusable components'
        },
        tech: ['Figma', 'React', 'Storybook', 'Tailwind'],
        date: 'Dec 2025',
        link: '#'
    },
    {
        id: 2,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing online stores with real-time analytics and inventory management.',
        image: 'https://via.placeholder.com/800x500?text=E-Commerce',
        meta: {
            role: 'Full Stack Dev',
            type: 'Solo',
            components: '30+ screens'
        },
        tech: ['Next.js', 'Typescript', 'Stripe', 'Prisma'],
        date: 'Oct 2025',
        link: '#'
    },
    {
        id: 3,
        title: 'Finance Tracker',
        description: 'Mobile-first application to track personal expenses and visualize spending habits.',
        image: 'https://via.placeholder.com/800x500?text=Finance+App',
        meta: {
            role: 'Frontend Dev',
            type: 'Team',
            components: 'Mobile UI'
        },
        tech: ['React Native', 'Firebase', 'Chart.js'],
        date: 'Aug 2025',
        link: '#'
    }
];

export const BLOG_POSTS = [
    {
        id: 1,
        category: 'Product',
        title: 'AI Is Fast. Thinking Is Still My Job.',
        excerpt: 'Speed is not judgment. How I use AI before decisions, not instead of them.',
        featured: true,
    },
    {
        id: 2,
        category: 'Product',
        title: 'AI Is Fast. Thinking Is Still My Job.',
        excerpt: 'Speed is not judgment. How I use AI before decisions, not instead of them.',
        featured: false,
    },
    {
        id: 3,
        category: 'Design',
        title: 'The Art of Micro-interactions',
        excerpt: 'Enhancing user experience through subtle UI animations.',
        featured: false,
    }
];

export const SOCIALS = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
    { name: 'X', icon: FaTwitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' }
];
