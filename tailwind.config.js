/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {},
			colors: {
				accent: 'hsl(var(--accent))',
				light: 'hsl(var(--light))',
				dark: 'hsl(var(--dark))',
				'dark-alt': 'hsl(var(--dark-alt))',
				danger: 'hsl(var(--danger))'
			},
			borderRadius: {
				sm: 'calc(var(--radius) - 8px)',
				md: 'calc(var(--radius) - 4px)',
				lg: 'calc(var(--radius))'
			}
		}
	},
	plugins: []
};
