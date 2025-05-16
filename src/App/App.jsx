/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { nanoid } from "nanoid"; //пакет
import "../index.scss";
import logo from "../img/logo.jpg";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import FormLogin from "./components/FormLogin/FormLogin";
import Search from "./components/Search/Search";
import ContentInfo from "./components/ContentInfo/ContentInfo";
import Button from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import Counter from "./components/Counter/Counter";
import ToDoList from "./components/ToDoList/ToDoList";

// useState; //функция хук состояния

//переписываем App с классов на хуки

// const App = () => {
//   useState();
//   return <div className="container">App</div>;
// };

// export default App;

const App = () => {
  // useState();// всегда возвращает массив из двух элементов: текущее состояние и функцию для его обновления
  //аналог state в классах //{#f9e, 1}
  const [isShowModal, setIsShowModal] = useState(false);
  // инициализация состояния, где state - текущее состояние, а setState - функция для его обновления, передавая новое значение, initialState - начальное значение состояния
  const [searchText, setSearchText] = useState("");

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  function createUser(data) {
    const newUser = {
      ...data,
      id: nanoid(5),
    };
    // console.log("newUser :>> ", newUser);
  }
  //метод поиска текста в запросе на бэкэнд

  const handleSearch = (searchText) => {
    setSearchText(searchText);
    // console.log("searchText: ", searchText);
  }; //*методы кнопки

  // function handleSearch(searchText) {
  //   setSearchText(searchText);
  // }

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container">
      <h1>Hell world</h1>
      {false && <Modal>Some</Modal>} {/* - Убираем модалку  */}
      {isShowModal && (
        <Modal closeModal={() => setIsShowModal(false)}>
          {/* Добавляем в форму метод на получение данных */}
          <FormLogin
            closeModal={() => setIsShowModal(false)}
            createUser={(data) => {
              const newUser = {
                ...data,
                id: nanoid(5),
              };
              // console.log("id :>> ", newUser.id);
            }}
          ></FormLogin>
        </Modal>
      )}
      <Header showModal={showModal}></Header>
      <Search handleSearch={setSearchText}></Search>
      <ContentInfo searchText={searchText}></ContentInfo>
      {/* <Button
        type="submit"
        label="Submit"
        variant="primary"
        size="large"
        onClick={handleClick}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        icon={<i className="fas fa-check"></i>}
      /> */}
      {/* <Button
        label="Cancel"
        variant="secondary"
        size="medium"
        onClick={() => alert("Cancel clicked!")}
      /> */}
      {/* <Card isOnline></Card> */}
      {/* <Card></Card> */}
      {/* <Counter></Counter> */}
      <ToDoList></ToDoList>
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     isShowModal: false,
//     searchText: "",
//   };
//   //монтирование
//   // componentDidMount() {
//   //   //componentDidMount() Викликається відразу після монтування компонента в DOM
//   //   //Робимо HTTP-запити, вішаємо кастомні слухачі подій та виконуємо операції з DOM деревом
//   //   //Виклик setState() у цьому методі викличе повторний рендер – це нормально
//   //   // fetch();
//   //   console.log("App Mount");

//   // }
//   //обновление
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   //Не викликається під час ініціалізації компонента
//   //   //Викликається перед ререндером вже змонтованого компонента
//   //   //Необхідний виключно для оптимізації процесу рендеру
//   //   //Дозволяє порівняти поточні та попередні state і props, повернувши true або false, вказуючи React, чи є необхідність оновлювати компонент
//   //   //Якщо поверне false, то не станеться render() і componentDidUpdate()
//   //   //Не можна викликати setState()
//   //   //Використовувати необхідно дуже обережно, тільки після вимірів продуктивності, інакше може призвести до зворотного ефекту.
//   //   // Можливо, варто замінити на React.PureComponent, який робитиме поверхове порівняння props. Але лише після вимірів продуктивності
//   // }
//   // componentDidUpdate(prevProps, prevState) {
//   //   // Викликається відразу після оновлення компонента в DOM
//   //   // Не викликається при початковому рендері компонента
//   //   // Можна викликати setState(), обов'язково обгорнувши його в умову перевірки зміни попередніх і наступних props або state, щоб не виник нескінченний цикл ререндера (вкладка зависне або впаде).
//   //   // Можна робити HTTP-запити
//   //   // Якщо в компоненті є getSnapshotBeforeUpdate(), то значення, що повертається їм, буде передане третім аргументом snapshot, в іншому випадку його значенням буде undefined
//   //   //*
//   //   //при запросе выносим метод в ContentInfo
//   //   // if (prevProps !== this.state) fetch();
//   // }
//   // getSnapshotBeforeUpdate(prevProps, prevState) {
//   //   // На практиці цей метод використовується дуже рідко
//   //   // Викликається перед тим, як усі зміни готові до додавання в DOM
//   //   // Можна використовувати для отримання DOM-значень перед оновленням, наприклад, поточну позицію скрола або розмір елемента до оновлення
//   //   // Те, що поверне цей метод, буде передане як третій параметр snapshot в componentDidUpdate()
//   // }
//   //размонтирование
//   // componentWillUnmount() {
//   //   // Викликається перед розмонтуванням та видаленням елемента з DOM
//   //   // Добре підходить для прибирання за собою: слухачі, таймери, HTTP-запити. В іншому випадку будуть витоки пам'яті
//   //   // Викликати setState() немає сенсу, компонент ніколи не перерендериться
//   // }
//   // Обробка помилок рендеру
//   // componentDidCatch(error, info) {
//   //   // Використовується для контролю помилок
//   //   // Ловить помилки лише у дітей, але не в самому батьку
//   //   // error – результат toString() об'єкта помилки
//   //   // info – об'єкт, що описує stack trace
//   // }
//   showModal = () => {
//     this.setState({ isShowModal: true });
//   };
//   closeModal = () => {
//     this.setState({ isShowModal: false });
//   };
//   //создаем метод который принимает дату с формы и добавляем его в форму
//   createUser = (data) => {
//     // console.log(data);
//     const newUser = {
//       ...data,
//       id: nanoid(5),
//     };
//     console.log("newUser :>> ", newUser);
//   };
//   //метод поиска текста в запросе на бэкэнд
//   handleSearch = (searchText) => {
//     this.setState({ searchText });
//     console.log("searchText: ", searchText);
//   };
//   //*методы кнопки
//   handleClick() {
//     alert("Button clicked!");
//   }
//   handleMouseEnter() {
//     console.log("Mouse entered!");
//   }
//   handleMouseLeave() {
//     console.log("Mouse left!");
//   }
//   //*
//   render() {
//     const { searchText, isShowModal } = this.state; //деструктуризация state
//     const { handleSearch } = this; //деструктуризация методов
//     return (
//       <div className="container">
//         <h1>Hell world</h1>
//         <Header showModal={this.showModal}></Header>
//         {/* Убираем модалку  */}
//         {false && <Modal>Some</Modal>}
//         {isShowModal && (
//           <Modal closeModal={this.closeModal}>
//             {/* Добавляем в форму метод на получение данных */}
//             <FormLogin
//               createUser={this.createUser}
//               closeModal={this.closeModal}
//             ></FormLogin>
//           </Modal>
//         )}
//         <Search handleSearch={handleSearch}></Search>
//         <ContentInfo searchText={searchText}></ContentInfo>
//         {/* <Card isOnline></Card> */}
//         {/* <Card></Card> */}
//         {/* <Counter></Counter> */}
//         {/* <ToDoList></ToDoList> */}
//         {/* <Button
//             type="submit"
//             label="Submit"
//             variant="primary"
//             size="large"
//             onClick={this.handleClick}
//             onMouseEnter={this.handleMouseEnter}
//             onMouseLeave={this.handleMouseLeave}
//             icon={<i className="fas fa-check"></i>}
//           /> */}
//         {/* <Button
//             label="Cancel"
//             variant="secondary"
//             size="medium"
//             onClick={() => alert("Cancel clicked!")}
//           /> */}
//         {/* подключение в папки public */}
//         {/* <img src="favicon/webpack.svg" alt="" /> */}
//         {/* подключение картинки и папки src  */}
//         {/* <img src={logo} alt="" /> */}
//       </div>
//     );
//   }
// }

// export default App;
