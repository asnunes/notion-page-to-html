module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.(test|spec).ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/migrations/*.ts', '!src/server.ts', '!src/protocols/*.ts'],
  coverageProvider: 'babel',
  coverageDirectory: 'coverage',
  restoreMocks: true,
};
