module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  setupFiles: ["<rootDir>/enzyme.config.js"]
};
