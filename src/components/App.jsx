import React, { Component } from "react";
import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import ToDoList from "./ToDoList/ToDoList";
// import Card from "./Card/Card"

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
  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Counter />
        {/* Убираем модалку  */}
        {/* {false && <Modal>Some</Modal>} */}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>Some</Modal>
        )}
        {/* <Card/> */}
        <ToDoList />
      </div>
    );
  }
}

export default App;
