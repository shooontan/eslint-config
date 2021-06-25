module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@shooontan', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
