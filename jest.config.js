/* eslint @typescript-eslint/no-var-requires: "off" */
const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/stories/'
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};
