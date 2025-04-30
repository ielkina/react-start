/* eslint-disable no-unused-vars */
// import { useEffect } from "react"; //переносим в hook
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./SignupForm.module.css";

// Реализация компонента на Хуках

// //обертка для повторяющегося кода
// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     console.log(" Делаем начальное состояние для email use State");
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });
//   //useEffect нельзя завернуть в if, они должны быть на вернем уровне области видимости.
//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];//возвращаем массив (т.к легко деструктуризировать) состояние и метод состояния
// };

export default function SignupForm() {
  //state выносим в хук
  // state {
  //    email: '',
  //   password: '',
  //  }
  // const inputState = useState('');
  // console.log(" SignupForm inputState >>", inputState)
  //деструктуризация
  //1 элем state, и его функция
  // const [email, setEmail] = useState("");//по умолчанию это пустая строка
  //мы можем назначит дефолтные значения
  // const [email, setEmail] = useState(() => {
  //   console.log(" Делаем начальное состояние для email use State");
  //   return JSON.parse(window.localStorage.getItem("email")) ?? "";
  // });

  // const [password, setPassword] = useState("");
  // const [password, setPassword] = useState(
  //   //   - lazy state initialization
  //   () => {
  //     return JSON.parse(window.localStorage.getItem("password")) ?? "";
  //     //выполняет один раз при первом рендере
  //     //не вызывает каждый раз localStorage, улучшает производительность
  //   },
  //   // JSON.parse(window.localStorage.getItem("password")) ?? "",
  // );

  // console.log(" SignupForm setEmail >>", setEmail);
  // console.log(" SignupForm email >>", email);
  const [email, setEmail] = useLocalStorage("email", ""); //передаем в хук key и дефолтное значение
  const [password, setPassword] = useLocalStorage("password", "");

  // const handleEmailChange = (e) => {
  //   // const {name, value} = e.target;
  //   // console.log(e.target.value);
  //   //передаем в функцию state
  //   setEmail(e.target.value);
  // };
  const handleChange = (event) => {
    //деструктуризируем event
    const { name, value } = event.target;
    switch (name) {
      case "email":
        //если массив state
        // setArray(prevSate=> [...prevSate, {}])
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  //хуки useEffect
  //срабатывает при каждом рендере
  // useEffect(() => {
  //   // console.log("email useEffect", email); //ielkinairinka@gmail.com
  //   // window.localStorage.setItem("email", JSON.stringify(email));
  //   window.localStorage.setItem("email", JSON.stringify(email)); //undefined
  // }, [email]);
  // //срабатывает при каждом рендере email
  // useEffect(() => {
  //   // console.log("password useEffect", password);
  //   window.localStorage.setItem("password", JSON.stringify(password)); //undefined
  // }, [password]);

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

//Реализация компонента на классах
// import { Component } from "react";

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
