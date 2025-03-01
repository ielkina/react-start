/* eslint-disable no-unused-vars */
//*** Пакеты сборки */
import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import "modern-normalize/modern-normalize.css";
import { ThemeProvider } from "styled-components";
//***Стили */
import "./styles/base.scss";
import "./index.css";
//***Компоненты */
import App from "./App/App";
// import { GlobalStyle } from 'components/GlobalStyle';
// import { Example1 } from 'components/Example1';
// import { Reader } from 'components/Reader/Reader';
//***Data файлы */
import publications from "./data/publications.json";

const theme = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      {/* <ThemeProvider></ThemeProvider> */}
      <ThemeProvider theme={theme}></ThemeProvider>
      {/*<GlobalStyle /> */}
      {/*<Reader items={publications} /> */}
      {/*<Example1/> */}
    </App>
  </React.StrictMode>
);
