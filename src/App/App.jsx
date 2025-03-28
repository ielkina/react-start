//Убираем ошибки
/* eslint-disable no-unused-vars */
//*** Пакеты сборки ***
import { Routes, Route } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { ToastContainer, toast } from "react-toastify";
import React, { Component } from "react";
import shortid from "shortid";

//*** Стили  ***
import { GlobalStyle } from "../assets/style/GlobalStyle";
import { Layout } from "../assets/style/Layout";
// import './scss/App.scss'

// Медиа {red, 3}
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import iconDelete from "../assets/icons/delete.svg";

// DATA файлы {#f9e,2}
import tabs from "./data/tabs.json";
import initialTodos from "./data/todos.json";

//*** Компоненты сайта ***
import Container from "./components/Container";
import Form from "./components/Form/Form";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";

// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter/Filter";
import LoginForm from "./components/LoinForm/LoginForm";
import Modal from "./components/Modal";
import { ProductReviewForm } from "./components/ProductReviewForm/ProductReviewForm";
import Tabs from "./components/Tabs";
import IconButton from "./components/IconButton";
import { Icons } from "./components/Icon/Icons";
import PokemonForm from "./components/Pokemon/PokemonForm";
import PokemonInfo from "./components/Pokemon/PokemonInfo";
import { MaterialEditorForm } from "./components/MaterialEditorForm/MaterialEditorForm";
import { MaterialList } from "./components/MaterialList/MaterialList";
import AppBar from "./components/AppBar/AppBar";
import Clock from "./components/Clock";
import OldClock from "./components/Clock";
import SignupForm from "./components/SignupForm/SignupForm";
import ColorPicker from "./components/ColorPicker";
import PokemonView from "./components/Pokemon/PokemonView";

//*** Api запросы  ***
import * as API from "./services/api.js";
// import * as api from './component/api';
// import * as itemApi from './component/item-api';

//*** Деструктуризация API ***
// const API = { ...api, ...itemApi };

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 15,
  paddingRight: 15,
};

class App extends Component {
  //NOTE state и коллекции в state не мутируем
  //используем методы filter, map, reduce
  state = {
    materials: [],
    isLoading: false,
    error: false,
    todos: initialTodos,
    /* todos: [],*/
    filter: "",
    showModal: false,
    pokemonName: "",
  };

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);
  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  //   console.log(parsedTodos);
  // }
  componentDidUpdate(prevProps, prevState) {
    //вызывается только по проверке какого либо условия
    // this.setState() //зацикливание компонента

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log("обновилось поле todos");
    }
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(prevState);
    console.log(this.state);
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }
  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    //NOTE - рефакторинг
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  // async addMaterial(values) {  //NOTE - контекст не привязывает
  addMaterial = async (values) => {
    //привязка контекста
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState((state) => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  deleteMaterial = async (id) => {
    try {
      await API.deleteMaterial(id);
      this.setState((state) => ({
        materials: state.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async (fields) => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState((state) => ({
        materials: state.materials.map((material) =>
          material.id === fields.id ? updatedMaterial : material,
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    //NOTE - рефакторинг вычисляемых данных в методы
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    //NOTE - переносим в отдельный метод
    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    const { materials, isLoading, error } = this.state;
    return (
      <>
        <GlobalStyle />
        <Layout>
          <Container>
            <div style={containerStyles}>
              <AppBar />
              <Routes>
                <Route path="/signup" element={<SignupForm />} />
                <Route
                  path="/colorpicker"
                  element={<ColorPicker options={colorPickerOptions} />}
                />
                <Route path="/counter" element={<Counter />} />
                <Route path="/clock" element={<Clock />} />
                <Route path="/pokemon" element={<PokemonView />} />
              </Routes>
            </div>
            {error && (
              <p>
                Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте
                еще раз.
              </p>
            )}
            {/* <MaterialEditorForm onSubmit={this.addMaterial} /> */}
            {/* {isLoading ? (
              "Загружаем материалы"
            ) : (
              <MaterialList
                items={materials}
                onDelete={this.deleteMaterial}
                onUpdate={this.updateMaterial}
              />
            )} */}
            {/* <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
              <PokemonForm onSubmit={this.handleFormSubmit} />
              <PokemonInfo pokemonName={this.state.pokemonName} />
              <ToastContainer autoClose={8000} style={{ width: 40 }} />
            </div> */}
            {/* <div>
              <a href="#" className="Add">
                <Icons name="add" size="20px" />
              </a>
            </div> */}
            {/* <a href="#">
              <DeleteIcon fill="red" />
            </a> */}
            {/* <img src={iconDelete} alt="icon delete" /> */}
            {/* <ReactSVG src="icons/delete.svg" /> */}
            {/* <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
              <AddIcon fill="red" width="50px" />
            </IconButton> */}
            {/* <Tabs items={tabs} /> */}
            {/* {showModal && <Clock />} */}
            {/* <button type="button" onClick={this.toggleModal}>
              Открыть таймер
            </button> */}
            {/* <button type="button" onClick={this.toggleModal}>
              Открыть модалку
            </button> */}
            {/* {showModal && (
              <Modal onClose={this.toggleModal}>
                <TodoEditor onSubmit={this.addTodo} />
                <h1>Привет</h1>
                <p>
                  «Пейте воду из крана, жуйте ногу, всегда ложитесь так, чтобы
                  хвост мог слегка касаться носа человека, но спите на
                  клавиатуре, взламывайте пушистые комочки, атакуйте, как
                  злобный монстр, мяукающий в пустых комнатах».
                </p>
                <button type="button" onClick={this.toggleModal}>
                  Закрыть
                </button>
              </Modal>
            )} */}
            {/* <ProductReviewForm /> */}
            {/* <LoginForm /> */}
            {/* <h1>Состояние компонента</h1> */}
            {/* NOTE: вынести в отдельный компонент */}
            {/* <div>
              <p>Всего заметок: {totalTodoCount}</p>
              <p>Выполнено: {completedTodoCount}</p>
            </div> */}
            {/* <TodoEditor onSubmit={this.addTodo} /> */}
            {/* <Filter value={filter} onChange={this.changeFilter} /> */}
            {/* <TodoList
              todos={visibleTodos}
              onDeleteTodo={this.deleteTodo}
              onToggleCompleted={this.toggleCompleted}
            /> */}
            {/* <Form onSubmit={this.formSubmitHandler} /> */}
            {/* <Dropdown /> */}
            {/* <ColorPicker /> */}
            {/* <div style={containerStyles}>
              <AppBar />
              <Clock />
              <SignupForm />
              <br />
              <ColorPicker />
            </div> */}
          </Container>
        </Layout>
      </>
    );
  }
}

export default App;
