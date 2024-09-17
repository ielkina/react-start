import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };
  // nameInputId = shortid.generate(6);

  nameInputId = shortid.generate();
  loginInputId = nanoid(5); //NOTE - (5) передаем длину id

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
  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* htmlFor для jsx  - аналог for в html */}
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            id={this.nameInputId}
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
        <label htmlFor={this.loginInputId}>Лэйбл отдельно от инпута</label>
        <input
          type="text"
          name="tag"
          value={this.state.tag}
          id={this.loginInputId}
          onChange={this.handleChange}
        />
        <p style={{ marginBottom: '1px' }}>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Согласен с условием
        </label>
        <br />
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
