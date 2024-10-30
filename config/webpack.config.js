// const path = require("path");

// module.exports = {
//   resolve: {
//     alias: {
//       Components: path.resolve(__dirname, "src/components"),
//       Templates: path.resolve(__dirname, "src/templates/"),
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           {
//             loader: "sass-loader",
//             options: {
//               additionalData: `@import "${path.resolve(
//                 __dirname,
//                 "src/styles/base.scss"
//               )}";`,
//             },
//           },
//           // Compiles Sass to CSS
//         ],
//       },
//     ],
//   },
// };
