/* eslint-disable no-unused-vars */
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; //делает ссылку с бэкэнда рабочей
import App from "App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


