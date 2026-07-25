/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },

            colors: {
                dark: "#0f172a",
                darker: "#020617",
                primary: "#6366f1",
                secondary: "#8b5cf6",
                accent: "#ec4899",
            },

            animation: {
                float: "float 6s ease-in-out infinite",
                "pulse-slow":
                    "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },

            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-15px)",
                    },
                },
            },
        },
    },

    plugins: [],
};