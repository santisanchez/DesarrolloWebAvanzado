import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
import serve from 'rollup-plugin-serve';

export default {
  input: pkg.main,
  output: {
    file: 'public/bundle.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
    serve('public'),
    babel({
      runtimeHelpers: true,
      exclude: '/node_modules/**'
    })
  ]
}
