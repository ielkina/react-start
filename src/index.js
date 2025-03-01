import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as Sentry from "@sentry/react";
import 'modern-normalize/modern-normalize.css';
import App from './App';
import './styles/base.scss';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


// https://youtu.be/dyOYs35-pKg?t=2931

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyle } from 'components/GlobalStyle';
// import { Example1 } from 'components/Example1';
// import { Reader } from 'components/Reader/Reader';
// import './index.css';
// import publications from './data/publications.json';

// const theme = {};

// //Старый синтаксис
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <ThemeProvider theme={theme}>
// //       <GlobalStyle />
// //       <Reader items={publications} />
// //     </ThemeProvider>
// //     {/* <Example1/> */}
// //   </React.StrictMode>,
// //   document.getElementById('root'),
// // );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <Reader items={publications} />
//     </ThemeProvider>
//     <Example1/>
//   </React.StrictMode>,
// );


// // https://youtu.be/FbXe8QOW9jI?t=768