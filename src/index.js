/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { ThemeProvider } from 'styled-components';
import 'modern-normalize/modern-normalize.css';
import 'styles/_base.scss';
import 'index.css';
import App from 'App/App';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Example1 } from 'App/pages/Example1';
import { Reader } from 'App/components/Reader/Reader';
import publications from 'data/publications.json'

const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App>
      <ThemeProvider theme={theme}></ThemeProvider>
      <Reader items={publications} />
      <Example1></Example1>
    </App>
  </React.StrictMode>,
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

//   </React.StrictMode>,
// );

//Старый синтаксис
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
// // https://youtu.be/FbXe8QOW9jI?t=768
