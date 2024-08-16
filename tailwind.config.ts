import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
				"primary-dark": "rgb(var(--color-primary-dark)) ",
				"accent-dark": "rgb(var(--color-accent-dark))",
				"text-dark": "rgb(var(--color-text-dark))",
				"sub-text-dark": "rgb(var(--color-sub-text-dark))",
				"primary-light": "rgb(var(--color-primary-light))",
				"accent-light": "rgb(var(--color-accent-light))",
				"text-light": "rgb(var(--color-text-light))",
				"sub-text-light": "rgb(var(--color-sub-text-light))",
			},
			fontFamily: {
				garamond: ["EB Garamond", "serif"],
			},
			animation: {
				scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
		},
	},
	plugins: [addVariablesForColors],
	darkMode: "class",
	important: true,
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
