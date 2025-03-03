import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
	input: './src/adapter.js',
	output: {
		file: './dist/lit-simple-example.js',
		format: 'iife',
		name: 'example',
		plugins: [terser()]
	},
	plugins: [
		nodeResolve(),
		babel({ babelHelpers: 'bundled' })
	]
};
