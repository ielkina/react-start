/* eslint-disable no-unused-vars */
// import useLocalStorage from '../../hooks/useLocalStorage';
// import React, { Component } from "react";
// import { useState } from "react";
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from "./SignupForm.module.css";

// export default function SignupForm() {
//   const [email, setEmail] = useLocalStorage('email', '');
//   const [password, setPassword] = useLocalStorage('password', '');

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         return;
//     }
//   };

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           onChange={handleChange}
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }

export default function SignupForm() {
  //** state {
  //**    email: '',
  //**    password: '',
  //**  }
  // const inputState = useState('');
  // console.log(" SignupForm inputState >>", inputState)
  //деструктуризация
  //1элем state, и его функция
  // const [email, setEmail] = useState("");
  // console.log(" SignupForm setEmail >>", setEmail);
  // console.log(" SignupForm email >>", email);
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '')

  // const handleEmailChange = (e) => {
  //   // const {name, value} = e.target;
  //   // console.log(e.target.value);
  //   //передаем в функцию state
  //   setEmail(e.target.value);
  // };
  const handleChange = event => {
    const {name, value} = event.target;
        switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  }


  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          //хуки заменяет контекст
          //с контекстом
          //** onChange={this.handleChange}
          //**  value={this.state.email}
          //на хуках
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// class SignupForm extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = (evt) => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

//         <label className={styles.label}>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }

// export default SignupForm;
