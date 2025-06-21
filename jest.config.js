module.exports = {
  testEnvironment: 'node',
  testRunner: 'jasmine2',
  testMatch: ['**/tests/api/**/*.test.js'],
  collectCoverage: false,
  verbose: true,
  testTimeout: 30000,
  setupFilesAfterEnv: ['jest-allure/dist/setup'],
  reporters: [
    'default',
    ['jest-allure', { outputDirectory: 'allure-results' }]
  ]
}; 
