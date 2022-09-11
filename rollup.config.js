import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default 	{
	input: 'src/scripts/script_index.js',
	plugins: [
		terser({
		ecma: 2020,
		mangle: { toplevel: true },
		compress: {
			module: true,
			toplevel: true,
			unsafe_arrows: true,
			drop_console: true,
			drop_debugger: true
		},
		output: { quote_style: 1 }
	}),
		nodeResolve()
	],
	output: {
		name: 'sass-swing-core',
		file: 'dist/public/scripts/script_index.min.js',
		format: 'umd',
		sourcemap:false
	}
};
