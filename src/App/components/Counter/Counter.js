import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
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
