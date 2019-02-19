module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  forceExit: true,
  globals: {
    'ts-jest': {
      extends: './babel.config.js',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '@taxi/(.+)$': '<rootDir>packages/$1/src',
  },
  modulePathIgnorePatterns: ['dist'],
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>packages'],
  setupTestFrameworkScriptFile: '<rootDir>jest/setupTests.ts',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__tests__/*.+(ts|tsx|js|jsx)', '**/*.test.+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: ['packages/ui'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    "^.+\\.css$": "<rootDir>/jest/cssTransform.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@taxi/))"
  ],
};
