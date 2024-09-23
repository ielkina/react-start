 /* eslint-disable no-unused-vars */
import React, { Component} from "react";
import { nanoid } from "nanoid";
import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import ToDoList from "./ToDoList/ToDoList";
import { Card } from "./Card/Card";
import FormLogin from "./FormLogin/FormLogin";


class App extends Component {
  state = {
    isShowModal: false,
  };
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
  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Counter />
        {/* Убираем модалку  */}
        {/* {false && <Modal>Some</Modal>} */}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            {/* Добавляем в форму метод на получение данных */}
            <FormLogin createUser={this.createUser} closeModal={this.closeModal}/>
          </Modal>
        )}
        <ToDoList />
        {/* <Card isOnline /> */}
        {/* <Card  /> */}
      </div>
    );
  }
}

export default App;
