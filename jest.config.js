module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  transform: {
    '\\.[jt]sx?$': '@swc/jest',
  },
  moduleNameMapper: {
    // HACK: let typescript-eslint load eslint's exports file.
    // https://github.com/facebook/jest/issues/9771
    'eslint/use-at-your-own-risk': 'eslint/lib/unsupported-api.js',
  },
};
