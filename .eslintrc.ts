module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "array-element-newline": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
  }
};