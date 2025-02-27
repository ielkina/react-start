const path = require("path");
// const sass = require("sass");
const sass = require("sass-embedded");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  entry: "./src/index.js", // Входная точка приложения
  output: {
    path: path.resolve(__dirname, "dist"), // Выходная папка
    filename: "bundle.js", // Имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Регулярное выражение для всех .js файлов
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: "babel-loader", // Используем babel-loader для транспиляции
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-merge-rules"),
                  require("postcss-sort-media-queries")(),
                  require("css-declaration-sorter")({
                    order: "concentric-css",
                  }),
                  require("cssnano")({
                    preset: [
                      "default",
                      {
                        mergeRules: true, // Включает объединение одинаковых селекторов
                        discardDuplicates: true, // Удаляет повторяющиеся правила
                      },
                    ],
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
          "resolve-url-loader",
          {
            loader: "sass-loader",
            implementation: sass,
            options: {
              api: "modern-compiler",
              implementation: require("sass"),
              sourceMap: true,
            },
            sassOptions: {
              silenceDeprecations: ["legacy-js-api"],
            },
            sass,
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Расширения файлов, которые будет обрабатывать webpack
  },
  stats: {
    loggingDebug: ["sass-loader"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Путь к статическим файлам
    compress: true, // Включает сжатие
    port: 9000, // Порт для dev server
  },
};
