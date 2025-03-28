/* eslint-disable no-unused-vars */
import styles from "./Clock.module.css";
import { useState, useEffect, useRef } from "react";

// export default function Clock() {
//   const [time, setTime] = useState(new Date());
//   const [isRunning, setIsRunning] = useState(false); // Отслеживаем состояние
//   const intervalId = useRef(null);

//   const start = () => {
//     if (!isRunning) {
//       intervalId.current = setInterval(() => {
//         console.log("Интервал каждые 1000ms " + Date.now());
//         setTime(new Date());
//       }, 1000);
//       setIsRunning(true); // Устанавливаем состояние как "запущен"
//     }
//   };

//   const stop = () => {
//     if (isRunning) {
//       clearInterval(intervalId.current);
//       intervalId.current = null;
//       setIsRunning(false); // Устанавливаем состояние как "остановлен"
//     }
//   };

//   const toggle = () => {
//     if (isRunning) {
//       stop();
//     } else {
//       start();
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <p className={styles.clockface}>
//         Текущее время: {time.toLocaleTimeString()}
//       </p>
//       <button type="button" onClick={toggle}>
//         {isRunning ? "Остановить" : "Запустить"}
//       </button>
//     </div>
//   );
// }

//**** */

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef(null);

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

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
}
//**** */
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
