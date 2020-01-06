const { join } = require('path');

module.exports = {
  roots: [join(__dirname, '/src')],
  // testRegex: ['(.*\\-(test|spec))\\.[t]sx?$'],
  testMatch: ['**/*-test.ts', '**/*-test.tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest'
};
