//Убираем ошибки
/* eslint-disable no-unused-vars */
//***Пакеты сборки*/
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ReactSVG } from "react-svg";
import shortid from "shortid";
//***Стили*/
import { GlobalStyle } from "styles/GlobalStyle";
import { Layout } from "styles/Layout";
//***Медиа*/
//***Data файлы */
//***REST запросы */
//***Компоненты*/
import Clock from "./components/Clock/Clock";
import Form from "./components/Form/Form";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Clock></Clock>
        <Form></Form>
      </>
    );
  }
}
export default App;
