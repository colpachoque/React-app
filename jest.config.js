module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  setupFiles: ["<rootDir>/enzyme.config.js"],
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  coverageDirectory: "coverage"
};
