/* eslint-disable no-unused-vars */
import styles from "./Clock.module.css";
import { useState, useEffect, useRef } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef(null); //в эту переменную будет записываться current(текущее значение)
  //useRef возвращает объект с текущим значением
  //вызывается только один раз при первом рендере
  //переменной которой мы присвоим useRef навсегда останется ссылка на этот объект
  // const [isRunning, setIsRunning] = useState(false); // Отслеживаем состояние

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log("Это интервал каждые 1000ms " + Date.now());
      setTime(new Date());
    }, 1000);
    return () => {
      console.log("Это функция очистки перед следующим вызовом useEffect");
      stop();
    };
  }, []);

  // const start = () => {
  //   if (!isRunning) {
  //     intervalId.current = setInterval(() => {
  //       console.log("Интервал каждые 1000ms " + Date.now());
  //       setTime(new Date());
  //     }, 1000);
  //     setIsRunning(true); // Устанавливаем состояние как "запущен"
  //   }
  // };

  const stop = () => {
    clearInterval(intervalId.current);
  };

  // const stop = () => {
  //   if (isRunning) {
  //     clearInterval(intervalId.current);
  //     intervalId.current = null;
  //     setIsRunning(false); // Устанавливаем состояние как "остановлен"
  //   }
  // };

  // const toggle = () => {
  //   if (isRunning) {
  //     stop();
  //   } else {
  //     start();
  //   }
  // };

  return (
    <div className={styles.container}>
      <button onClick={() => setTime(new Date())}>Обновить стейте time </button>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      {/* <button type="button" onClick={toggle}>
        {isRunning ? "Остановить" : "Запустить"}
      </button> */}
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
}
//**** class OldClock*/
// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log("Это интервал каждые 1000ms " + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log("Эот метод вызывается перед размонтированием компонента");
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }

// export default OldClock;

//**** */

// export default function Clock() {
//   const [time, setTime] = useState(() => new Date());
//   const intervalId = useRef(null);

//   useEffect(() => {
//     intervalId.current = setInterval(() => {
//       console.log('Это интервал каждые 2000ms ' + Date.now());
//       setTime(new Date());
//     }, 2000);

//     return () => {
//       console.log('Это функция очистки перед следующим вызовом useEffect');
//       stop();
//     };
//   }, []);

//   const stop = () => {
//     clearInterval(intervalId.current);
//   };

//   return (
//     <div className={styles.container}>
//       <p className={styles.clockface}>
//         Текущее время: {time.toLocaleTimeString()}
//       </p>
//       <button type="button" onClick={stop}>
//         Остановить
//       </button>
//     </div>
//   );
// }

//******************** */
//*Второй вариант модуля Clock

// модуль работает вместе с файлом index.js
// import React, { Component } from 'react';
// import './Clock.scss';

// export default class Clock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   //публичное свойство
//   intervalId = null;

//   componentDidMount() {
//     console.log('setInterval');

//     this.intervalId = setInterval(
//       () => this.setState({ time: new Date().toLocaleTimeString() }),
//       1000,
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return <div className="Clock__face">{this.state.time}</div>;
//   }
// }
