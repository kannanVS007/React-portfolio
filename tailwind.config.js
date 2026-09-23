/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#121212',
                secondary: '#F5F2EA', // Paper color
                accent: '#9A7B4F', // Brown/Gold from buttons
                paper: '#F5F2EA',
                'paper-dark': '#E6DFD1',
            },
            fontFamily: {
                sans: ['League Spartan', 'sans-serif'],
                serif: ['League Spartan', 'sans-serif'], // User said use for all
                display: ['League Spartan', 'sans-serif'], // User said use for all
            },
            borderRadius: {
                '4xl': '2.5rem',
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
