import Icons from 'unplugin-icons/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), Icons({ compiler: 'svelte', autoInstall: true })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
