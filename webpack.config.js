module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              api: 'modern'
            }
          }
        ]
      }
    ]
  }
};

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
