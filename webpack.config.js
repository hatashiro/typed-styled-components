const { resolve } = require("path");

module.exports = {
  mode: "production",
  entry: "./dist/index",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "commonjs2"
  },
  externals: ["react"]
};
