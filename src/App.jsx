import React, { Component } from 'react';
import Form from './components/Form/Form';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import Container from './components/Container';
import initialTodos from './todos.json';

class App extends Component {
  //state и коллекции в state не мутируем
  //используем методы filter, map, reduce
  state = {
    todos: initialTodos,
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    return (
      <Container>
        <>
          <Form onSubmit={this.formSubmitHandler} />
          <h1>Состояние компонента</h1>
          <Counter />
          <Dropdown />
          <ColorPicker />
          <div>
            <p>Общее кол-во: {totalTodoCount}</p>
            <p>Кол-во выполненных: {completedTodoCount}</p>
          </div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </>
      </Container>
    );
  }
}

export default App;
