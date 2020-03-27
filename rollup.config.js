'use strict';

var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify').uglify;
// var pkg = require('./package.json');

var input = 'source/index.js';
var config = {
  input: input,
  output: {
    format: 'umd',
    name: 'Eagle',
    exports: 'named'
    // banner: banner
  },
  plugins: [
    babel({ presets: [['@babel/preset-env', { targets: { ie: '11' } }]]})
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true
      },
      warnings: false
    })
  );
}

module.exports = config;
