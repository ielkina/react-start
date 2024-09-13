import React from "react";
import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Counter />
      {/* Убираем модалку  */}
      {false && <Modal>Some</Modal>}
    </div>
  );
};

export default App;
