const loadableBabelPlugin = require('@loadable/babel-plugin');

function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader');
}

module.exports = (api) => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);
  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          targets: !web ? { node: 'current' } : undefined,
          modules: webpack ? false : 'commonjs',
        },
      ],
      
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      loadableBabelPlugin,
      'styled-components',
      '@babel/plugin-proposal-class-properties',
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
  }
};
