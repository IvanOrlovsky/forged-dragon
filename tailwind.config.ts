import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"primary-dark": "#291720",
				"secondary-dark": "#A30000",
				"primary-light": "f4f3ee",
				//"secondary-light":
			},
			fontFamily: {
				garamond: ["EB Garamond", "serif"],
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
