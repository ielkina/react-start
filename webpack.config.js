const path = require("path");
// const sass = require("sass");
const sass = require('sass-embedded');
// const postcss = require("postcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssCombineDuplicatedSelectors = require("postcss-combine-duplicated-selectors");
const IconPlugin = require("svg-sprite-webpack-plugin").plugin;

const iconPlugin = new IconPlugin("icons-[hash].svg");

module.exports = {
  base: "/react-start/",
  entry: "./src/index.js", // Входная точка приложения
  static: {
    directory: path.join(__dirname, "public"),
  },
  output: {
    path: path.resolve(__dirname, "dist"), // Выходная папка
    //filename: 'bundle.js', // Имя выходного файла
    // filename: "static/js/[name].js",
    filename: "[name].js",
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Регулярное выражение для всех .js файлов
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: "babel-loader", // Используем babel-loader для транспиляции
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              implementation: require("postcss"),
              postcssOptions: {
                plugins: [
                  "postcss-preset-env",
                  "autoprefixer",
                  postcssCombineDuplicatedSelectors({
                    // Опции плагина при необходимости
                  }),
                  require("cssnano")({
                    preset: [
                      "default",
                      {
                        mergeRules: true,
                        discardDuplicates: true,
                      },
                    ],
                  }),
                  require("postcss-discard-duplicates"),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i, // Совместная обработка SASS и SCSS
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
                  require("postcss-discard-duplicates"),
                  purgecss({
                    content: [
                      "./src/**/*.js",
                      "./src/**/*.jsx",
                      "./public/index.html",
                    ],
                  }),
                  postcssCombineDuplicatedSelectors({
                    // Опции плагина при необходимости
                  }),
                ],
              },
            },
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            implementation: require.apply("sass"),
            options: {
              api: "modern-compiler",
              // implementation: require("sass"), // Подключение Dart Sass
              implementation: require.resolve("sass"), // Prefer `dart-sass`, even if `sass-embedded` is available
              sourceMap: true,
              sassOptions: {
                includePaths: [path.resolve(__dirname, "src")],
                style: `compressed`,
                silent: true,
                silenceDeprecations: ["legacy-js-api"],
                loadPaths: ["absolute/path/a", "absolute/path/b"],
              },
            },
            sass,
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(__dirname, "src/assets/style/*.scss"), //путь к общему файлу стилей
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require()],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: iconPlugin.extract(),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "assets/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body", // Использование только одного скрипта
      scriptLoading: "defer", // Убедитесь, что `defer` без значения
    }),
    iconPlugin,
  ],
  resolve: {
    alias: {
      //настройка автозаполнение путей
      "/": path.resolve(__dirname, "/src"), // указываем абсолютный путь к 'src' директории
      src: path.resolve(__dirname, "src/"), // указываем абсолютный путь к 'src' директории
      assets: path.resolve(__dirname, "src/assets"),
      // App: path.resolve(__dirname, "src/App/"),
      // components: path.resolve(__dirname, "src/App/components/"),
      // data: path.resolve(__dirname, "src/data/"),
      // icons: path.resolve(__dirname, "src/icons/"),
      // img: path.resolve(__dirname, "src/img/"),
      // scss: path.resolve(__dirname, "src/scss/"),
      // services: path.resolve(__dirname, "src/services/"),
      // style: path.resolve(__dirname, "src/style/"),
    },
    extensions: [".js", ".jsx", ".json", ".scss", ".sass", ".css"], // Расширения файлов, которые будет обрабатывать webpack
    modules: [path.resolve(__dirname, "src"), "node_modules"], // Добавлено для поддержки alias
  },
  stats: {
    loggingDebug: ["sass-loader"],
  },
};

//****** */
// devServer: {
//   contentBase: path.join(__dirname, "dist"), // Путь к статическим файлам
//   compress: true, // Включает сжатие
//   port: 9000, // Порт для dev server
//   open: true,
//   setupMiddlewares: (middlewares, devServer) => {
//     // Ваши настройки middleware
//     if (!devServer) {
//       throw new Error("webpack-dev-server is not defined");
//     }
//     // Пример использования middleware
//     devServer.app.get("/some/path", function (req, res) {
//       res.json({ custom: "response" });
//     });
//     return middlewares;
//   },
// },
