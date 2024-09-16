import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
  };
  //состояние формы
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  //отправка формы
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };
  //очистка формы
  reset = () => {
    this.setState({ name: '', tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* htmlFor для jsx  - аналог for в html */}
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default Form;
