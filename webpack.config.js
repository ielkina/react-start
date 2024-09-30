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
