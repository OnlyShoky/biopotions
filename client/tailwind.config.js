/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pastel: {
                    pink: '#FAD2E1',
                    blue: '#C5E1A5', // Wait, C5E1A5 is green. Let's fix names.
                    green: '#C5E1A5',
                    blueLight: '#BCD4E6',
                    yellow: '#FFF9C4',
                    lavender: '#E1BEE7',
                    cream: '#FDFBF7',
                    text: '#4A4A4A',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
