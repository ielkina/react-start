/* eslint-disable no-unused-vars */
const path = require("path");
// const sass = require("sass");
const sass = require("sass-embedded");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  // entry: "./src/index.js", // Входная точка приложения
  entry: {
    main: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"), // Выходная папка
    filename: "bundle.js", // Имя выходного файла
    // filename: "static/js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"), // Use Dart Sass
              sassOptions: {
                api: "modern",
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/styles"),
        use: ["style-loader", "css-loader", "sass-loader"],
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
                        mergeRules: true, // Enable merging identical selectors
                        discardDuplicates: true, // Remove duplicate rules
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
            implementation: require("sass"),
            options: {
              api: "modern-compiler",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body", // Использование только одного скрипта
      scriptLoading: "defer", // Убедитесь, что `defer` без значения
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", "json"], // Расширения файлов, которые будет обрабатывать webpack
    // alias: {
    //   src: path.resolve(__dirname, "src"), // указываем абсолютный путь к 'src' директории
    //   "@components": path.resolve(__dirname, "src/components"),
    //   "@utils": path.resolve(__dirname, "src/utils"),
    // },
  },
  stats: {
    loggingDebug: ["sass-loader"],
    directory: path.join(__dirname, "public"),
  },
  devServer: {
    // setupMiddlewares: (middlewares, devServer) => {
    //   // Ваши настройки middleware
    //   if (!devServer) {
    //     throw new Error("webpack-dev-server is not defined");
    //   }
    //   // Пример использования middleware
    //   devServer.app.get("/some/path", function (req, res) {
    //     res.json({ custom: "response" });
    //   });
    //   return middlewares;
    // },
    contentBase: path.join(__dirname, "dist"), // Путь к статическим файлам
    compress: true, // Включает сжатие
    port: 9000, // Порт для dev server
    open: true,
  },

};




  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/, // Регулярное выражение для всех .js файлов
  //       exclude: /node_modules/, // Исключаем папку node_modules
  //       use: {
  //         loader: "babel-loader", // Используем babel-loader для транспиляции
  //       },
  //     },
  //           {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"],
  //     },
      
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         "style-loader",
  //         "css-loader",
  //         "postcss-loader",
  //         {
  //           loader: "sass-loader",
  //           options: {
  //             api: "modern",
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         "style-loader",
  //         "css-loader",
  //         {
  //           loader: "sass-loader",
  //           options: {
  //             implementation: require("sass"), // Используйте Dart Sass
  //             sassOptions: {
  //               // Убедитесь, что используете современный API
  //               api: "modern",
  //             },
  //           },
  //         },
  //     {
  //       test: /\.scss$/,
  //       use: ["style-loader", "css-loader", "sass-loader"],
  //       include: path.resolve(__dirname, "src/styles"),
  //     },
  //           {
  //       test: /\.scss$/,
  //       use: [
  //         "style-loader",
  //         "css-loader",
  //         {
  //           loader: "sass-loader",
  //           options: {
  //             implementation: require("sass"), // Подключение Dart Sass
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.s[ac]ss$/i,
  //       exclude: /node_modules/,
  //       use: [
  //         "style-loader",
  //         {
  //           loader: "css-loader",
  //           options: {
  //             sourceMap: true,
  //           },
  //         },
  //         {
  //           loader: "postcss-loader",
  //           options: {
  //             postcssOptions: {
  //               plugins: [
  //                 require("postcss-merge-rules"),
  //                 require("postcss-sort-media-queries")(),
  //                 require("css-declaration-sorter")({
  //                   order: "concentric-css",
  //                 }),
  //                 require("cssnano")({
  //                   preset: [
  //                     "default",
  //                     {
  //                       mergeRules: true, // Включает объединение одинаковых селекторов
  //                       discardDuplicates: true, // Удаляет повторяющиеся правила
  //                     },
  //                   ],
  //                 }),
  //                 purgecss({
  //                   content: [
  //                     "./src/**/*.js",
  //                     "./src/**/*.jsx",
  //                     "./public/index.html",
  //                   ],
  //                 }),
  //               ],
  //             },
  //           },
  //         },
  //         "resolve-url-loader",
  //         {
  //           loader: "sass-loader",
  //           implementation: sass,
  //           options: {
  //             api: "modern-compiler",
  //             implementation: require("sass"),
  //             sourceMap: true,
  //           },
  //           sassOptions: {
  //             silenceDeprecations: ["legacy-js-api"],
  //           },
  //           sass,
  //         },
  //       ],
  //     },
  //   ],
  // },