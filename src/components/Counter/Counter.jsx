import { Component } from "react";

class Counter extends Component {
  //NOTE - В React функция наследования родителя constructor и super прописаны автоматически
  // constructor(parameters) {
  // super();
  // }
  //NOTE - State всегда обьект. this прописан под капотом
  state = {
    value: 0,
  };
  //NOTE - Методы
  handleClickIncrement = (e) => {
    //prevState - название не зарезервированное
    this.setState((prevState) => {
      let { value } = prevState;
      return { value: value + 1 };
      // return { value: prevState.value + 1 };
    });
  };
  // handleClickDecrement = (e) => {
  //   // this.setState((prevState) => {
  //   //   return { value: prevState.value - 1 };
  //   // });
  //   this.setState((prevState) => ({ value: prevState.value - 1 })); //коунтер с отрицательными числами
  // };
  // {} - тело функции
  // ({}) - обьект
  // {return{}} - или так
  handleClickDecrement = (e) => {
    //коунтер без отрицательных чисел
    this.setState((prevState) => {
      let { value } = prevState;
      // return ({value: value -1})
      if (value > 0) {
        return { value: value - 1 };
      } else {
        return { value: 0 };
      }
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white" style={{ width: "600px" }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text text-center" style={{ fontSize: "80px" }}>
              {/* {this.state.value} */}
              {value}
            </p>
            <div className="d-flex justify-content-center px-5">
              <button
                className="btn btn-outline-success me-5"
                onClick={this.handleClickIncrement}
              >
                <i className="bi bi-plus-circle-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg>
              </button>
              <button
                className="btn btn-outline-danger ms-5"
                onClick={this.handleClickDecrement}
              >
                <i className="bi bi-dash-circle"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
