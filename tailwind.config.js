/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./docs/**/*.{html,js}'],
    theme: {
        extend: {}
    },
    darkMode: ['variant', '&:not(.light *)'],
    plugins: []
};
