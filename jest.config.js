module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', 'server/**/*.{js,jsx}'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)',
    '<rootDir>/server/**/__tests__/**/*.js?(x)',
    '<rootDir>/server/**/?(*.)(spec|test).js?(x)'
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$']
};
