/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { nanoid } from "nanoid"; //пакет
import "../styles/main.scss";
// import Header from "./Header/Header";
import Modal from "./Modal/Modal";
import FormLogin from "./FormLogin/FormLogin";
import Search from "./Search/Search";
import ContentInfo from "./ContentInfo/ContentInfo";
import Button from "./Button/Button";
// import { Card } from "./Card/Card";
// import Counter from "./Counter/Counter";
// import ToDoList from "./ToDoList/ToDoList";

class App extends Component {
  state = {
    isShowModal: false,
    searchText: "",
  };
  componentDidMount() {
    //Викликається відразу після монтування компонента в DOM
    //Робимо HTTP-запити, вішаємо кастомні слухачі подій та виконуємо операції з DOM деревом
    //Виклик setState() у цьому методі викличе повторний рендер – це нормально
    // fetch();
    console.log("App Mount");
  }
  componentDidUpdate(prevProps, prevState) {
    //при запросе выносим метод в ContentInfo
    // if (prevProps !== this.state) fetch();
  }
  showModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  //создаем метод который принимает дату с формы и добавляем его в форму
  createUser = (data) => {
    // console.log(data);
    const newUser = {
      ...data,
      id: nanoid(5),
    };
    console.log("newUser :>> ", newUser);
  };
  handleSearch = (searchText) => {
    this.setState({ searchText });
  };
  //методы кнопки
  handleClick() {
    alert("Button clicked!");
  }
  handleMouseEnter() {
    console.log("Mouse entered!");
  }
  handleMouseLeave() {
    console.log("Mouse left!");
  }
  render() {
    return (
      <div className="container">
        {/* <Header showModal={this.showModal} /> */}
        {/* Убираем модалку  */}
        {false && <Modal>Some</Modal>}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            {/* Добавляем в форму метод на получение данных */}
            <FormLogin
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
        <h1>Hell world</h1>
        {/* <Search handleSearch={this.handleSearch} /> */}
        {/* <ContentInfo searchText={this.state.searchText} /> */}
        {/* <Card isOnline /> */}
        {/* <Card /> */}
        {/* <Counter /> */}
        {/* <ToDoList /> */}
        <Button
          type="submit"
          label="Submit"
          variant="primary"
          size="large"
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          icon={<i className="fas fa-check"></i>}
        />
        {/* <Button
          label="Cancel"
          variant="secondary"
          size="medium"
          onClick={() => alert("Cancel clicked!")}
        /> */}
      </div>
    );
  }
}

export default App;
