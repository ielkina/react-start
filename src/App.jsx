import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './components/Form/Form';
import Container from './components/Container';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import TodoEditor from 'components/TodoEditor';
import Filter from 'components/Filter';
import initialTodos from './todos.json';

class App extends Component {
  //NOTE state и коллекции в state не мутируем
  //используем методы filter, map, reduce
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
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
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
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

  render() {
    //NOTE - рефакторинг вычисляемых данных в методы
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    //NOTE - переносим в отдельный метод
    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <>
          <h1>Состояние компонента</h1>
          {/* NOTE: вынести в отдельный компонент */}
          <div>
            <p>Всего заметок: {totalTodoCount}</p>
            <p>Выполнено: {completedTodoCount}</p>
          </div>
          <TodoEditor onSubmit={this.addTodo} />
          <Filter value={filter} onChange={this.changeFilter} />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          <br />
          <Form onSubmit={this.formSubmitHandler} />
          <Counter />
          <Dropdown />
          <ColorPicker />
        </>
      </Container>
    );
  }
}

export default App;
