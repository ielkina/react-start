const path = require("path");
// const sass = require("sass");
const sass = require("sass-embedded");
const purgecss = require("@fullhuman/postcss-purgecss");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body", // Использование только одного скрипта
      scriptLoading: "defer", // Убедитесь, что `defer` без значения
    }),
  ],
  resolve: {
    alias: {
      //настройка автозаполнение путей
      'App': path.resolve(__dirname, 'src/App/'),
      'components': path.resolve(__dirname, 'src/components/'),
      'data': path.resolve(__dirname, 'src/data/'),
      'icons': path.resolve(__dirname, 'src/icons/'),
      'img': path.resolve(__dirname, 'src/img/'),
      'scss': path.resolve(__dirname, 'src/scss/'),
      'services': path.resolve(__dirname, 'src/services/'),
      'style': path.resolve(__dirname, 'src/style/'),
    },
    extensions: [".js", ".jsx", "json"], // Расширения файлов, которые будет обрабатывать webpack
  },
  stats: {
    loggingDebug: ["sass-loader"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Путь к статическим файлам
    compress: true, // Включает сжатие
    port: 9000, // Порт для dev server
    open: true,
  },
};
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'static/js/[name].js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: 'index.html',
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 3000,
//   },
// };

// module.exports = {
//   // ... другие настройки
//   devServer: {
//     setupMiddlewares: (middlewares, devServer) => {
//       // Ваши настройки middleware
//       if (!devServer) {
//         throw new Error('webpack-dev-server is not defined');
//       }
//       // Пример использования middleware
//       devServer.app.get('/some/path', function (req, res) {
//         res.json({ custom: 'response' });
//       });

//       return middlewares;
//     },
//   },
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'postcss-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               api: 'modern'
//             }
//           }
//         ]
//       }
//     ]
//   }
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               implementation: require('sass'), // Подключение Dart Sass
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

// const path = require('path');

// module.exports = {
//   // другие настройки
//   entry: {
//     main: path.resolve(__dirname, './src/index.js'),
//   },
//   resolve: {
//     alias: {
//       src: path.resolve(__dirname, 'src'), // указываем абсолютный путь к 'src' директории
//     },
//   },
//   rules: [
//     {
//       test: /\.scss$/,
//       use: ['style-loader', 'css-loader', 'sass-loader'],
//       include: path.resolve(__dirname, 'src/styles'),
//     },
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               implementation: require('sass'), // Используйте Dart Sass
//               sassOptions: {
//                 // Убедитесь, что используете современный API
//                 api: 'modern',
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
