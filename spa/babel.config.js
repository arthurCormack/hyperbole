// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env',
//       {
//         modules: false,
//       },
//     ],
//     '@babel/preset-react',
//   ],
//   plugins: [
//     'styled-components',
//     '@babel/plugin-proposal-class-properties',
//     '@babel/plugin-syntax-dynamic-import',
//   ],
//   env: {
//     production: {
//       only: ['app'],
//       plugins: [
//         'lodash',
//         'transform-react-remove-prop-types',
//         '@babel/plugin-transform-react-inline-elements',
//         '@babel/plugin-transform-react-constant-elements',
//       ],
//     },
//     test: {
//       plugins: [
//         '@babel/plugin-transform-modules-commonjs',
//         'dynamic-import-node',
//       ],
//     },
//   },
// };

const loadableBabelPlugin = require('@loadable/babel-plugin');

function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader');
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    loadableBabelPlugin,
  ],
  env: {
    production: {
      only: ['app'],
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
};
