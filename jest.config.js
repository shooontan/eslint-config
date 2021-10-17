module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  transform: {
    '\\.[jt]sx?$': '@swc/jest',
  },
};
