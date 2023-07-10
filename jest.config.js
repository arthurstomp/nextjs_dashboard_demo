/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/__tests__/test-utils.tsx"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  transform: {
    "\\.tsx?$": ['ts-jest', {"tsconfig": '<rootDir>/tsconfig_jest.json'}]
  }
};
