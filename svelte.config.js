import adapter from '@sveltejs/adapter-auto';
import { windi } from 'svelte-windicss-preprocess';
import preprocess from 'svelte-preprocess';
import poppanatorSvg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), windi({})],

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [poppanatorSvg({})]
		}
	}
};

export default config;
