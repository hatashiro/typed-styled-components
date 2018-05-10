const { resolve } = require("path");

module.exports = {
  mode: "production",
  entry: "./dist/index",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd"
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  }
};
