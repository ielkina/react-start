import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const { type, placeholder, ...props } = this.props;
    const { value } = this.state;

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: function(props, propName, componentName) {
    const value = props[propName];
    const type = props.type;
    
    if (type === 'text') {
      if (!/^[A-Za-z0-9!@#$%^&*]+$/.test(value)) {
        return new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
        );
      }
    } else if (type === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
        );
      }
    } else if (type === 'tel') {
      if (!/^\+?[1-9]\d{1,14}$/.test(value)) {
        return new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
        );
      }
    }
  }
};

export default Input;
/*********************** */

//App

// import React, { Component } from 'react';
// import Input from './Input';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loginValue: '',
//       emailValue: '',
//       telValue: '',
//       firstName: '',
//       lastName: '',
//       aboutMe: '',
//       birthDate: ''
//     };
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   render() {
//     return (
//       <div>
//         <Input
//           type="text"
//           name="loginValue"
//           placeholder="Введите логин"
//           value={this.state.loginValue}
//           onChange={this.handleChange}
//         />
//         <Input
//           type="email"
//           name="emailValue"
//           placeholder="Введите email"
//           value={this.state.emailValue}
//           onChange={this.handleChange}
//         />
//         <Input
//           type="tel"
//           name="telValue"
//           placeholder="Введите номер телефона"
//           value={this.state.telValue}
//           onChange={this.handleChange}
//         />
//         <Input
//           type="text"
//           name="firstName"
//           placeholder="Введите имя"
//           value={this.state.firstName}
//           onChange={this.handleChange}
//         />
//         <Input
//           type="text"
//           name="lastName"
//           placeholder="Введите фамилию"
//           value={this.state.lastName}
//           onChange={this.handleChange}
//         />
//         <Input
//           type="text"
//           name="aboutMe"
//           placeholder="Расскажите о себе"
//           value={this.state.aboutMe}
//           onChange={this.handleChange}
//         />
//         <Input
//           type="date"
//           name="birthDate"
//           value={this.state.birthDate}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }

// export default App;
