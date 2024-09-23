const path = require("path");

module.exports = {
  webpack: {
    alias: {
      component: path.resolve(__dirname, "src/component"),
      styles: path.resolve(__dirname, "src/styles"),
      shared: path.resolve(__dirname, "src/shared"),
      app: path.resolve(__dirname, "src/app"),
      widgets: path.resolve(__dirname, "src/widgets"),
      entities: path.resolve(__dirname, "src/entities"),
      pages: path.resolve(__dirname, "src/pages"),
      features: path.resolve(__dirname, "src/features"),
    },
  },
};

// const path = require('path');

// module.exports = {
//   webpack: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),  // Абсолютный путь для импорта из src
//     },
//   },
// };
