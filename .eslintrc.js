module.exports = {
  extends: ['./packages/eslint-config'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
};
