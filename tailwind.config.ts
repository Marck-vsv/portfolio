import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1c1c22",
                secondary: "#1C2026",
                tertiary: "#E0E1DD",
                accent: {
                    DEFAULT: "#00ff99",
                    hover: "#00e187"
                },
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
            "2xl": "1560px",
            "3xl": "1800px"
        },
        fontFamily: {
            primary: "var(--font-jetbrains)",  
        },
    },
    plugins: [],
};
export default config;
