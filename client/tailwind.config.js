/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pastel: {
                    green: '#74C69D',      // Sage Green (Primary)
                    mint: '#B7E4C7',       // Mint (Secondary)
                    light: '#F0FFF4',      // Very light green/white (Background)
                    dark: '#2D6A4F',       // Dark Forest Green (Text/Accents)
                    cream: '#D8F3DC',      // Light Green/Cream
                    text: '#1B4332',       // Deep Green Text
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
