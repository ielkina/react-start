const path = require("path");

module.exports = {
  webpack: {
    alias: {
      shared: path.resolve(__dirname, "src/shared"),
      app: path.resolve(__dirname, "src/app"),
      widgets: path.resolve(__dirname, "src/widgets"),
      entities: path.resolve(__dirname, "src/entities"),
      pages: path.resolve(__dirname, "src/pages"),
      features: path.resolve(__dirname, "src/features"),
    },
  },
};