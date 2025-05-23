module.exports = {
  verbose: true,
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  testMatch: ["**/src/**/*.spec.js"],
  moduleFileExtensions: ["js", "json"],
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};
