const babel = require('rollup-plugin-babel')
const cleanup = require('rollup-plugin-cleanup')
const replace = require('rollup-plugin-replace')
const resolve = require('rollup-plugin-node-resolve')

const extensions = [ '.js' ]

export default {
  plugins : [
    replace({ 'process.env.NODE_ENV' : JSON.stringify('production') }),
    resolve({
      extensions,
      preferBuiltins : true,
    }),
    cleanup(),
    babel({
      extensions,
      exclude : [ 'node_modules/**' ],
    }),
  ],
  input  : 'stringFn.js',
  output : [
    {
      file   : './dist/stringFn.js',
      format : 'cjs',
    },
    {
      file   : './dist/stringFn.esm.js',
      format : 'es',
    }
  ],
}
