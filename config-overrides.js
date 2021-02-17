/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const path = require("path");

module.exports = function override(config, env) {
  config.resolve["alias"] = {
    src: path.resolve("src"),
    views: path.resolve("src/views"),
  };
  config = rewireReactHotLoader(config, env);
  return config;
};
