import { useReducer } from "react";
import styles from "./Counter.module.css";
// import { type } from "@testing-library/user-event/dist/types/utility";

function countReducer(state, action) {
  //action - это объект который содержит тип действия и его значение
  // const { type, payload } = action;

  // return prevState + nextState;

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload }; //распыляем старое состояние (...state) и добавляем новое значение
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      //return state;
      throw new Error(`Unknown action type: ${action.type}`);
  }

  // return (state, action) => {
  //   switch (action.type) {
  //     case "increment":
  //       return { ...state, [action.name]: state[action.name] + 1 };
  //     default:
  //       throw new Error();
  //   }
  // };
}

function init(initialState) {
  return { ...initialState, count: 0 }; //распыляем старое состояние (...state) и добавляем новое значение
}

export default function Counter() {
  // const [state, setState] = useState
  // const [counterA, setCounterA] = useState(0);
  // const [counterB, setCounterB] = useState(0);

  const [state, dispatch] = useReducer(countReducer, { count: 0 }, init); //деструктуризуем потому что в обьекте может быть несколько значений, а нам нужно только одно. useReducer - это хук который позволяет управлять состоянием компонента с помощью редьюсера. Он принимает два аргумента: редьюсер и начальное состояние. Возвращает массив из двух элементов: текущее состояние и функцию для его обновления.
  // const [count, setCount] = useReducer(countReducer, 0); //деструктуризуем потому что в обьекте может быть несколько значений, а нам нужно только одно. useReducer - это хук который позволяет управлять состоянием компонента с помощью редьюсера. Он принимает два аргумента: редьюсер и начальное состояние. Возвращает массив из двух элементов: текущее состояние и функцию для его обновления.
  document.title = `Всего кликнули ${state.count} раз`;

  // console.log(count);

  // const handleCounterAIncrement = () => {
  //   setCounterA((state) => state + 1);
  // };

  // const handleCounterBIncrement = () => {
  //   setCounterB((state) => state + 1);
  // };

  // useEffect(() => {
  //   const totalClicks = counterA + counterB;
  //   document.title = `Всего кликнули ${totalClicks} раз`;
  //   console.log(`useEffect - Всего кликнули ${totalClicks} раз ` + Date.now());
  // }, [counterA, counterB]); // [counterA, counterB] аналог проверки if
  // //в массив(массив зависимостей) передаем зависимости,  если он пустой то у функции нет зависимостей и она запуститься только при первом рендер, если есть значения в массиве то она будет запускаться каждый раз.
  // //useEffect можно вызывать несколько раз, запускаются асинхронно, передается анонимная функция и внутри пишется весь код который необходим или функция
  // useEffect(() => {
  //   console.log("useEffect - componentDidMount");
  //   return () => {
  //     console.log("useEffect - componentWillUnmount");
  //   };
  // }, [counterA]);//useEffect - аналог componentDidMount и componentWillUnmount сработает тогда когда компонент будет размонтирован, в данном случае при каждом изменении counterA. Если передать пустой массив то он сработает только один раз при первом рендере компонента и не будет срабатывать при изменении состояния. Если передать массив зависимостей то он будет срабатывать каждый раз при изменении состояния.

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 1 })} // onClick={handleCounterAIncrement}
      >
        Кликнули counter A {state.count} раз
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 1 })} // onClick={handleCounterBIncrement}
      >
        Кликнули counter B {state.count} раз
      </button>
    </>
  );
}



// class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;
//   document.title = `Всего кликнули ${totalClicks} раз`;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;
//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;
//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }
// }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }

// import React, { Component } from 'react';
// import Controls from './Controls.js';
// import Value from './Value.js';
// import './Counter.css';

// class Counter extends Component {
//   //Дефолтные значения
//   static defaultProps = {
//     initialValue: 0,
//   };
//   static propTypes = {
//     //
//   };
//   state = {
//     value: this.props.initialValue,
//     a: 'a',
//     b: 'b',
//   };
//   //!
//   //Принцип работы рендера и state
//   // currState = {
//   //   value: 5,
//   //   a: 'a',
//   //   b: 'b',
//   // };
//   // update = {
//   //   value: 10,
//   // };
//   // newState = {
//   // берет старое состояние и поверх него распыляет новое
//   // ...currState, ...update } получаем - state = {a: 'a', b: 'b', value: 10}
//   //!
//   //Синтаксис публичного свойства с стрелочной функцией автоматически привязывает контекст
//   handleIncrement = () => {
//     // console.log(e.target);
//     // //event работает только в синхронном коде
//     // //что б это обойти нужно просто сохранить ссылку на e.target в локальную переменную
//     // // const target = e.target;
//     // const { target } = e;
//     // setTimeout(() => {
//     //   console.log(target);
//     // }, 1000);
//     //
//     //в методах нельзя обновлять состояние на прямую никогда по ссылке в ручную
//     //SECTION
//     //!SECTION - пример
//     //! this.state.value = 6 - НЕЛЬЗЯ
//     //this.setState({ value: 10 }); //передается обьект. setState - асинхронная
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div className="Counter">
//         <Value value={this.state.value} />
//         <Value value={value} />
//         {/* <span className="Counter__value">{this.state.value}</span> */}
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//         {/* <div className="Counter__controls">
//           {/* <button type="button" onClick={()=>{console.log('Click'); */}
//         {/* }}>Увеличить на 1</button> */}
//         {/* <button type="button" onClick={}>Уменьшить на 1</button> */}
//         {/* <button type="button" onClick={this.handleIncrement}> */}
//         {/* Увеличить на 1 */}
//         {/* </button> */}
//         {/* <button type="button" onClick={this.handleDecrement}> */}
//         {/* Уменьшить на 1 */}
//         {/* </button> */}
//         {/* </div> */}
//       </div>
//     );
//   }
// }

// export default Counter;
