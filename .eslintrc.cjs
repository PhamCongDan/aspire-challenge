/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  plugins: ['import', 'vue'],
  parserOptions: {
    ecmaVersion: 'latest',
    "parser": "babel-eslint",
    ecmaVersion: 6
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "parser": "flow"
      },
    ],
  }
}