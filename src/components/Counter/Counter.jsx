import { Component, PureComponent } from "react";

class Button extends PureComponent {
  //убираем лишний рендер элемента, рендер только значения 
  //*** */
  //PureComponent не смотрит вглубь обьекта, не следит за изменение значений ключей в объекте
  //поэтому будет происходить рендер кнопок
  //при отсутствии передачи данных кнопкам обьекта такого не произойдет и будет рендерится только значение
  shouldComponentUpdate(nextProps, nextState) { //рендер по нашему условию 
    // console.log("nextProps :>> ", nextProps);
    // console.log("this.props :>> ", this.props);
    if (
      nextProps.handleClickPlus === this.props.handleClickPlus &&
      nextProps.obj === this.props.obj // условие в случае передачи обьекта
    )return false;
    return true;
  }
  render() {
    // console.log("this.props > ", this.props);
    console.log("render Btn");
    return (
      <button
        className="btn btn-outline-success me-5"
        type="button"
        onClick={this.props.handleClickPlus}
      >
        <i className="bi bi-plus-circle fs-1"></i>
      </button>
    );
  }
}
//жизненный цикл и класс 
//клас нада делать на том компоненте где нам необходим state 
class Counter extends Component {
  //NOTE - В React функция наследования родителя constructor и super прописаны автоматически
  // constructor(parameters) {
  // super();
  // }
  //NOTE - State всегда обьект. this прописан под капотом
  state = {
    total: 0,
  };
  //NOTE - Методы
  // handleClickIncrement = (e) => {
  //   //prevState - название не зарезервированное
  //   this.setState((prevState) => {
  //     let { value } = prevState;
  //     return { value: value + 1 };
  //     // return { value: prevState.value + 1 };
  //   });
  // };
  // handleClickDecrement = (e) => {
  //   // this.setState((prevState) => {
  //   //   return { value: prevState.value - 1 };
  //   // });
  //   this.setState((prevState) => ({ value: prevState.value - 1 })); //коунтер с отрицательными числами
  // };
  // {} - тело функции
  // ({}) - обьект
  // {return{}} - или так
  // handleClickDecrement = (e) => {
  //   //коунтер без отрицательных чисел
  //   this.setState((prevState) => {
  //     let { value } = prevState;
  //     // return ({value: value -1})
  //     if (value > 0) {
  //       return { value: value - 1 };
  //     } else {
  //       return { value: 0 };
  //     }
  //   });
  // };
  handleClickPlus = () => {
    this.setState((prevState) => ({ total: prevState.total + 1 }));
  };
  handleClickMinus = () => {
    this.setState((prevState) => ({ total: prevState.total - 1 }));
  };
  handleClickBtn = () => {
    const { name, count } = this.props;
    console.log("name > ", name);
    const age = count ?? 10;
    console.log("age > ", age);
  };
  render() {
    console.log("render");
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white " style={{ width: "600px" }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text  text-center" style={{ fontSize: "80px" }}>
              {this.state.total}
            </p>
            <div className="d-flex justify-content-center px-5">
              <Button
                obj={{ name: "asd" }}
                handleClickPlus={this.handleClickPlus}
              />
              <button
                className="btn  btn-outline-danger ms-5"
                onClick={this.handleClickMinus}
              >
                <i className="bi bi-dash-circle fs-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

//*************************** */
// import React, { Component, PureComponent } from "react";

// class Button extends PureComponent {
//   // shouldComponentUpdate(nextProps, nextState) {
//   // 	// console.log('nextProps :>> ', nextProps)
//   // 	// console.log('this.props :>> ', this.props)
//   // 	if (
//   // 		nextProps.handleClickPlus === this.props.handleClickPlus &&
//   // 		nextProps.obj === this.props.obj )
//   // 		return false
//   // 	return true
//   // }
//   render() {
//     console.log("render Btn :>> ");
//     return (
//       <button
//         className="btn btn-outline-success me-5"
//         onClick={this.props.handleClickPlus}
//       >
//         <i className="bi bi-plus-circle fs-1"></i>
//       </button>
//     );
//   }
// }

// class Counter extends Component {
//   state = {
//     total: 0,
//   };

//   handleClickPlus = () => {
//     this.setState((prevState) => ({ total: prevState.total + 1 }));
//   };
//   handleClickMinus = () => {
//     this.setState((prevState) => ({ total: prevState.total - 1 }));
//   };
//   handleClickBtn = () => {
//     const { name, count } = this.props;
//     console.log("name :>> ", name);
//     const age = count ?? 10;
//     console.log("age :>> ", age);
//   };
//   render() {
//     console.log("render");
//     return (
//       <div className="position-absolute top-50 start-50 translate-middle">
//         <div className="card bg-dark text-white " style={{ width: "600px" }}>
//           <div className="card-body">
//             <h5 className="card-title text-center fs-1">Counter</h5>
//             <p className="card-text  text-center" style={{ fontSize: "80px" }}>
//               {this.state.total}
//             </p>
//             <div className="d-flex justify-content-center px-5">
//               {/* <button
// 								className='btn btn-outline-success me-5'
// 								onClick={this.handleClickPlus}
// 							>
// 								<i className='bi bi-plus-circle fs-1'></i>
// 							</button> */}
//               <Button
//                 // obj={{ name: 'asd' }}
//                 handleClickPlus={this.handleClickPlus}
//               />
//               <button
//                 className="btn  btn-outline-danger ms-5"
//                 onClick={this.handleClickMinus}
//               >
//                 <i className="bi bi-dash-circle fs-1"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

// https://youtu.be/Asf7CCe6Vxg?t=4941