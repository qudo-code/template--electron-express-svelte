import { defineConfig } from "vite";
import sveltePreprocess from "svelte-preprocess";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ command, mode }) => {
	const isProduction = mode === 'production';

	return {
        base : "./",
		build : {
			outDir : "ui"
		},
		plugins: [
			svelte({
                dev        : !isProduction,
                preprocess: sveltePreprocess.scss(),
            }),
		],
    };
});