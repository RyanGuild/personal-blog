require('prettier-eslint')

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    "prettier/prettier": "error",
    "indent": [
      "error",
      2
    ],
  },
  'plugins': [
    'react',
  ],
};
