const expoJestPreset = require('jest-expo/jest-preset');
const nativeTestingJestPreset = require('@testing-library/react-native/jest-preset');

module.exports = {
  preset: 'jest-expo',
  setupFiles: [
    ...expoJestPreset.setupFiles,
    ...nativeTestingJestPreset.setupFiles
  ],
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['.d.ts', '.types.ts', '/types/', 'props.ts'],
  coverageReporters: ['json', 'text', 'html'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  },
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsConfig: './jest/tsconfig.jest.json'
    }
  }
};
