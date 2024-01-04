/* eslint-disable no-undef */
module.exports = {
  presets : [
      [
          '@babel/preset-env', {
              debug   : false,
              modules : false,
          },
      ],
  ],
  plugins : [
      '@babel/plugin-transform-runtime',
  ],
  env : {
      test : {
          presets : [
              ['@babel/preset-env', { targets: { node: '18' } }],
          ],
      },
  },
  sourceType : 'unambiguous',
};
