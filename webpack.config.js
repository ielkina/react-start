const path = require("path");
const sass = require("sass");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            implementation: sass,
            options: {
              implementation: require("sass"),
              sourceMap: true,
            },
            sassOptions: {
              // Your additional Sass options
              silenceDeprecations: ["legacy-js-api"],
            },
          },
        ],
      },
    ],
  },
};

// const path = require("path");
// // const Sass = require("sass-embedded");
// // const purgecss = require("@fullhuman/postcss-purgecss");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       // {
//       //   test: /\.scss$/,
//       //   use: [
//       //     'style-loader',
//       //     'css-loader',
//       //     'postcss-loader',
//       //     'resolve-url-loader',
//       //     {
//       //       loader: 'sass-loader',
//       //       options: {
//       //         implementation: require('sass'),
//       //         sourceMap: true,
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     "style-loader",
//       //     "css-loader",
//       //     {
//       //       loader: "sass-loader",
//       //       options: {
//       //         // Prefer `dart-sass`, even if `sass-embedded` is available
//       //         implementation: require.resolve("sass"),
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   // test: /\.jsx?$/,
//       //   test: /\.s[ac]ss$/i,
//       //   exclude: /node_modules/,
//       //   use: [
//       //     // Creates `style` nodes from JS strings
//       //     "style-loader",
//       //     // Translates CSS into CommonJS
//       //     "css-loader",
//       //     // Compiles Sass to CSS
//       //     "sass-loader",
//       //     "babel-loader",
//       //   ],
//       // },
//       // {
//       //   test: /\.scss$/,
//       //   use: [
//       //     "style-loader",
//       //     "css-loader",
//       //     "sass-loader",
//       //     {
//       //       loader: "postcss-loader",
//       //       options: {
//       //         postcssOptions: {
//       //           plugins: [
//       //             require("postcss-merge-rules"),
//       //             require("postcss-sort-media-queries")(),
//       //             require("css-declaration-sorter")({
//       //               order: "concentric-css",
//       //             }),
//       //             require("cssnano")({
//       //               preset: [
//       //                 "default",
//       //                 {
//       //                   mergeRules: true, // Включает объединение одинаковых селекторов
//       //                   discardDuplicates: true, // Удаляет повторяющиеся правила
//       //                 },
//       //               ],
//       //             }),
//       //             purgecss({
//       //               content: [
//       //                 "./src/**/*.js",
//       //                 "./src/**/*.jsx",
//       //                 "./public/index.html",
//       //               ],
//       //             }),
//       //           ],
//       //         },
//       //       },
//       //     },
//       //     {
//       //       loader: "sass-loader",
//       //       options: {
//       //         implementation: Sass,
//       //         api: "modern-compiler",
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     // Creates `style` nodes from JS strings
//       //     "style-loader",
//       //     // Translates CSS into CommonJS
//       //     "css-loader",
//       //     // Compiles Sass to CSS
//       //     "sass-loader",
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     "style-loader",
//       //     "css-loader",
//       //     {
//       //       loader: "sass-loader",
//       //       options: {
//       //         // Prefer `dart-sass`, even if `sass-embedded` is available
//       //         implementation: require("sass"),
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     "style-loader",
//       //     "css-loader",
//       //     {
//       //       loader: "sass-loader",
//       //       options: {
//       //         // Prefer `dart-sass`, even if `sass-embedded` is available
//       //         implementation: require.resolve("sass"),
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     "style-loader",
//       //     "css-loader",
//       //     {
//       //       loader: "sass-loader",
//       //       options: {
//       //         sassOptions: {
//       //           style: `compressed`,
//       //           loadPaths: ["absolute/path/a", "absolute/path/b"],
//       //         },
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     "style-loader",
//       //     {
//       //       loader: "css-loader",
//       //       options: {
//       //         sourceMap: true,
//       //       },
//       //     },
//       //     {
//       //       loader: "sass-loader",
//       //       options: {
//       //         sourceMap: true,
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     "style-loader",
//       //     "css-loader",
//       //     {
//       //       loader: "sass-loader",
//       //       options: {
//       //         sourceMap: true,
//       //         sassOptions: {
//       //           outputStyle: "compressed",
//       //         },
//       //       },
//       //     },
//       //   ],
//       // },
//       // {
//       //   test: /\.s[ac]ss$/i,
//       //   use: [
//       //     "style-loader",
//       //     "css-loader",
//       //     {
//       //       loader: "sass-loader",
//       //       options: {
//       //         api: "modern-compiler",
//       //         sassOptions: {
//       //           // Your sass options
//       //         },
//       //       },
//       //     },
//       //   ],
//       // },
//     ],
//   },
// };
