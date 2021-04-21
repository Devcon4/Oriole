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
// import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
// import postcssLit from 'rollup-plugin-postcss-lit';
import postcss from 'postcss';

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
		chunkFileNames: '[name].[hash].js',
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
		// {
		// 	name: 'lit-css-fix',
		// 	async transform(code, id) {
		// 		let finCode = `${code}`;
		// 		let slicedCode = finCode;
		// 		const cssBits = [...((code || '').matchAll(/css`.*?`/g) || [])];
		// 		if (cssBits.length < 1) return null;

		// 		let indexCorrection = 0;
		// 		const processor = postcss([autoprefixer()]);
		// 		/** @type {RegExpExecArray} */
		// 		let all = '';
		// 		let counter = 0;
		// 		while (
		// 			(all = /css`.*?`/g.exec(slicedCode)) !== null &&
		// 			all[0].length > 5 &&
		// 			counter < 20
		// 		) {
		// 			let bit = all[0],
		// 				index = all.index;
		// 			let bitStr = bit.replace('css`', '');
		// 			bitStr = bitStr.replace('`', '');
		// 			var finBit = await processor.process(bitStr, { from: undefined });
		// 			const correctedIndex = indexCorrection + index;
		// 			finCode = finCode.slice(0, correctedIndex) + 'css`';
		// 			finBit.css + '`' + finCode.slice(correctedIndex);
		// 			indexCorrection = indexCorrection + finBit.css.length;
		// 			console.log(indexCorrection);
		// 			slicedCode = slicedCode.slice(indexCorrection + 4);
		// 			counter++;
		// 		}

		// for (const all of cssBits) {
		// 	let bit = all[0],
		// 		index = all.index;
		// 	let bitStr = bit.replace('css`', '');
		// 	bitStr = bitStr.replace('`', '');
		// 	var finBit = await processor.process(bitStr, { from: undefined });
		// 	const correctedIndex = indexCorrection + index;
		// 	finCode =
		// 		finCode.slice(0, correctedIndex) +
		// 		finBit.css +
		// 		finCode.slice(correctedIndex);
		// 	indexCorrection += bit.length - finBit.css.length;
		// }
		// 	console.log(finCode);

		// 	return {
		// 		code: finCode,
		// 		map: null,
		// 	};
		// },
		// },
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
