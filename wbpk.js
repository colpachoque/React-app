const clientConfig = require("./webpack.config.js");
const serverConfig = require("./webpack.server.js");

module.exports = [clientConfig("development"), serverConfig];
