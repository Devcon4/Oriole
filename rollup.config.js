import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';
import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import { indexHtml } from './src/indexHtml.js';
import dev from 'rollup-plugin-dev';
import del from 'rollup-plugin-delete';

const extensions = ['.js', '.ts'];

/** @type {import('rollup-plugin-copy').CopyOptions} */
const copyConfig = {};

/** @type {import('rollup').RollupOptions} */
const config = {
	input: 'src/app.ts',
	output: {
		dir: 'dist',
		format: 'es',
		name: 'Oriole',
		entryFileNames: '[name].[hash].js',
		chunkFileNames: '[hash].js',
	},

	plugins: [
		del({ targets: 'dist/*' }),
		html({
			template: (opts) => indexHtml(opts, ['app.']),
		}),
		minifyHTML(),
		copy(copyConfig),
		resolve({ extensions }),
		commonjs(),
		babel({
			extensions,
			babelHelpers: 'bundled',
			include: ['src/**/*'],
		}),
	],
};

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
	config.watch = {};
}

if (!isDevelopment) {
	config.output.sourcemap = true;
	config.plugins = [
		...config.plugins,
		terser({}),
		dev({ dirs: ['dist'], host: 'localhost', spa: 'dist/index.html' }),
	];
}

export default config;
