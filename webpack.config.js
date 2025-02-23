const path = require("path");
const Sass = require("sass-embedded");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          'sass-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-merge-rules'),
                  require("postcss-sort-media-queries")(),
                  require("css-declaration-sorter")({
                    order: "concentric-css",
                  }),
                  require('cssnano')({
                    preset: ['default', {
                      mergeRules: true,  // Включает объединение одинаковых селекторов
                      discardDuplicates: true, // Удаляет повторяющиеся правила
                    }],
                  }),
                  purgecss({
                    content: [
                      "./src/**/*.js",
                      "./src/**/*.jsx",
                      "./public/index.html",
                    ],
                  }),
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: Sass,
              api: "modern-compiler",
            },
          },
          
        ],
      },
    ],
  },
};
