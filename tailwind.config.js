/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    presets: [require("@carrot-kpi/ui/tailwind-preset")],
    theme: {
        extend: {
            colors: {
                "twitter-blue": "#22BDD5",
                "discord-purple": "#CF2CF6",
                "medium-yellow": "#F6FB18",
                "light-grid": "rgba(255, 255, 255, 0.25)",
            },
            backgroundImage: {
                "white-squares":
                    "linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px), " +
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
            },
        },
    },
};
