/* eslint-disable no-unused-vars */
import React from "react";
// import { createRoot } from "react-dom/client"; // Import createRoot instead of ReactDOM
import ReactDOM from "react-dom/client"; // Import createRoot instead of ReactDOM
import { BrowserRouter } from "react-router-dom";

import "modern-normalize/modern-normalize.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App/App";
import AuthProvider from "./App/context/Provider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
// import { ThemeProvider } from 'styled-components';
// import * as Sentry from '@sentry/react';
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // import 'assets/styles/_base.scss';
// import 'modern-normalize/modern-normalize.css';
// import './assets/style/_base.scss';
// import 'index.css';
// import App from 'App/App';
// import { GlobalStyle } from './assets/style/GlobalStyle.jsx';
// import { Example1 } from './App/pages/Example1.jsx';
// import { Reader } from './App/components/Reader/Reader.jsx';
// import publications from './App/data/publications.json';

// const theme = {};

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <GlobalStyle />
//     <App>
//       <ThemeProvider theme={theme}></ThemeProvider>
//       <Reader items={publications} />
//       <Example1></Example1>
//     </App>
//   </React.StrictMode>,
// );

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
