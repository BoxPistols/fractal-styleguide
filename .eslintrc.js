module.exports = {
  plugins: [
    "stylelint-scss"
  ],
    env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended','stylelint-config-recommended-scss',],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    &#8230;
  },
}
