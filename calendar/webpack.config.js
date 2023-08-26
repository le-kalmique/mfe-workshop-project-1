const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "calendar",
      filename: "remoteEntry.js",
      exposes: {
        "./Calendar": "./src/bootstrap",
      },
      shared: ["faker"],
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
