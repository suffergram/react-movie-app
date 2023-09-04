module.exports = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
}