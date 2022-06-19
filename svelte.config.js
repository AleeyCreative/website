import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import poppanatorSvg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({ postcss: true })],

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [poppanatorSvg()]
		}
	}
};

export default config;
