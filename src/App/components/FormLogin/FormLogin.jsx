import { Component } from "react";
// import { nanoid } from "nanoid";

class FormLogin extends Component {
  //NOTE - конструктор идет под капотом Component
  //под капотом создается и this.props = props который прилетает с конструктора
  state = {
    email: "",
    password: "",
    isChecked: false,
    gender: "male",
    // isAgreed: false,
    // rememberMe: false,
  };

  componentDidMount() {
    // console.log("Form Login Mount");
  }
  componentDidUpdate(nextProps, nextState) {
    // Не викликається під час ініціалізації компонента
    // Викликається перед ререндером вже змонтованого компонента
    // Необхідний виключно для оптимізації процесу рендеру
    // За замовчуванням render відбувається щоразу з новими props або state
    // Дозволяє порівняти поточні та попередні state і props, повернувши true або false, вказуючи React, чи є необхідність оновлювати компонент
    // Якщо поверне false, то не станеться render() і componentDidUpdate()
    // Не можна викликати setState()
    // Використовувати необхідно дуже обережно, тільки після вимірів продуктивності, інакше може призвести до зворотного ефекту.
    // Можливо, варто замінити на React.PureComponent, який робитиме поверхове порівняння props. Але лише після вимірів продуктивності
    // console.log("Form  Update");
  }
  componentWillUnmount() {
    // Викликається перед розмонтуванням та видаленням елемента з DOM
    // Добре підходить для прибирання за собою: слухачі, таймери, HTTP-запити. В іншому випадку будуть витоки пам'яті
    // Викликати setState() немає сенсу, компонент ніколи не перерендериться
    // console.log("Form Will Unmount");
  }

  // handleChange = (event) => {
  //   console.log(event.target);
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  //NOTE - деструктуризация event.target
  handleChange = ({ target }) => {
    console.log("target.name > ", target.name);
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    //NOTE - Если метод был написан в App его можно запустить через пропсы
    //При сабмите запускаем метод с пропсов на получение данных
    //и передаем методу обьект с какими данными мам надо получить
    this.props.createUser({
      // email: this.state.email,
      //деструктурируем
      email: email,
      // password: this.state.password,
      password: password,
      gender: this.state.gender,
    });
    //NOTE - или так
    // this.props.createUser(this.state);
    //NOTE - или так
    // this.props.createUser({
    //   email: this.state.email,
    //   password: this.state.password,
    //   gender: this.state.gender,
    // });
    //NOTE - для очистки формы если в state пустые email, password можно передать просто this.state
    this.setState(this.state);
    //NOTE - если по дефолту state не пустые то прописываем код ниже
    // this.setState({
    //   email: "",
    //   password: "",
    // });
    this.props.closeModal();
  };
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     const { email, password, isAgreed, rememberMe } = this.state;
  //     this.props.createUser({ email, password });
  //     this.setState({ email: "", password: "" });
  //     this.props.closeModal();
  //   };
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     const { email, password, isAgreed, rememberMe } = this.state;
  //     this.props.createUser({ email, password });
  //     this.setState({ email: "", password: "" });
  //     this.props.closeModal();
  //   };

  // handleCheck = ({target}) => {
  //   // console.log(e.currentTarget.checked);
  //   // console.log(e.currentTarget);
  //   // this.setState({ isChecked: e.currentTarget.checked });
  //   //
  //   // console.log(target);
  //   // console.log(target.checked);
  //   // console.log(checked);
  //   // this.setState({
  //   //   isChecked: checked,
  //   // });

  // };
  handleCheck = ({ target: { checked } }) => {
    console.log(checked);
    this.setState({
      isChecked: checked,
    });
  };
  // handleCheck = ({ target: { name, checked } }) => {
  //   // this.setState((prevState) => ({
  //   //   todoList: prevState.todoList.map((todo) =>
  //   //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   //   ),
  //   // }))
  //   // if (name === "isAgreed" && checked) {
  //   //   this.setState({
  //   //     isAgreed: true,
  //   //     rememberMe: false,
  //   //   });
  //   // } else if (name === "rememberMe" && checked) {
  //   //   this.setState({
  //   //     isAgreed: false,
  //   //     rememberMe: true,
  //   //   });
  //   // }
  //   this.setState({
  //     isAgreed: name === "isAgreed" ? checked : false,
  //     rememberMe: name === "rememberMe" ? checked : false,
  //   });
  // };

  //   handleCheck = ({ target: { name, checked } }) => {
  //     this.setState({
  //       [name]: checked,
  //     });
  //   };

  handleRadio = ({ target }) => {
    this.setState({ gender: target.value });
  };
  render() {
    //NOTE - Деструктуризируем state
    const { email, password, isChecked } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address<span style={{ color: "red" }}>*</span>
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            // onChange={console.log}
            // onChange={(e) => {console.log(e);}}
            // onChange={(e) => {console.log(e.target.value);}}
            onChange={this.handleChange}
            // value={this.state.email}
            value={email}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password<span style={{ color: "red" }}>*</span>
          </label>
          <input
            name="password"
            type="password"
            // value={this.state.password}
            value={password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={this.state.gender === "male"}
            onChange={this.handleRadio}
            value="male"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={this.state.gender === "female"}
            onChange={this.handleRadio}
            value="female"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <div
          className="mb-3 form-check"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <input
            className="form-check-input"
            id="flexRadioDefault2"
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleCheck}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            I agree
          </label>
          <label className="form-check-label" htmlFor="exampleCheck1">
            <input
              className="form-check-input"
              id="exampleCheck1"
              type="checkbox"
              checked={isChecked}
              onChange={this.handleCheck}
            />
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.isChecked}
        >
          Submit
        </button>
      </form>
    );
  }
  //   render() {
  //     const { email, password, isAgreed, rememberMe } = this.state;
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <div className="mb-3">
  //           <label htmlFor="exampleInputEmail1" className="form-label">
  //             Email address<span style={{ color: "red" }}>*</span>
  //           </label>
  //           <input
  //             name="email"
  //             type="email"
  //             className="form-control"
  //             id="exampleInputEmail1"
  //             value={email}
  //             onChange={this.handleChange}
  //           />
  //         </div>
  //         <div className="mb-3">
  //           <label htmlFor="exampleInputPassword1" className="form-label">
  //             Password<span style={{ color: "red" }}>*</span>
  //           </label>
  //           <input
  //             name="password"
  //             type="password"
  //             className="form-control"
  //             id="exampleInputPassword1"
  //             value={password}
  //             onChange={this.handleChange}
  //           />
  //         </div>
  //         <div className="mb-3 form-check">
  //           <input
  //             className="form-check-input"
  //             id="isAgreed"
  //             name="isAgreed"
  //             type="checkbox"
  //             checked={isAgreed}
  //             onChange={this.handleCheck}
  //           />
  //           <label className="form-check-label" htmlFor="isAgreed">
  //             I agree
  //           </label>
  //         </div>
  //         <div className="mb-3 form-check">
  //           <input
  //             className="form-check-input"
  //             id="rememberMe"
  //             name="rememberMe"
  //             type="checkbox"
  //             checked={rememberMe}
  //             onChange={this.handleCheck}
  //           />
  //           <label className="form-check-label" htmlFor="rememberMe">
  //             Remember me
  //           </label>
  //         </div>
  //         <button type="submit" className="btn btn-primary">
  //           Submit
  //         </button>
  //       </form>
  //     );
  //   }
  //   render() {
  //     const { email, password, isAgreed, rememberMe } = this.state;
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <div className="mb-3">
  //           <label htmlFor="exampleInputEmail1" className="form-label">
  //             Email address<span style={{ color: "red" }}>*</span>
  //           </label>
  //           <input
  //             name="email"
  //             type="email"
  //             className="form-control"
  //             id="exampleInputEmail1"
  //             value={email}
  //             onChange={this.handleChange}
  //           />
  //         </div>
  //         <div className="mb-3">
  //           <label htmlFor="exampleInputPassword1" className="form-label">
  //             Password<span style={{ color: "red" }}>*</span>
  //           </label>
  //           <input
  //             name="password"
  //             type="password"
  //             className="form-control"
  //             id="exampleInputPassword1"
  //             value={password}
  //             onChange={this.handleChange}
  //           />
  //         </div>
  //         <div className="mb-3 form-check">
  //           <input
  //             className="form-check-input"
  //             id="isAgreed"
  //             name="isAgreed"
  //             type="checkbox"
  //             checked={isAgreed}
  //             onChange={this.handleCheck}
  //           />
  //           <label className="form-check-label" htmlFor="isAgreed">
  //             I agree
  //           </label>
  //         </div>
  //         <div className="mb-3 form-check">
  //           <input
  //             className="form-check-input"
  //             id="rememberMe"
  //             name="rememberMe"
  //             type="checkbox"
  //             checked={rememberMe}
  //             disabled={!isAgreed}
  //             onChange={this.handleCheck}
  //           />
  //           <label className="form-check-label" htmlFor="rememberMe">
  //             Remember me
  //           </label>
  //         </div>
  //         <button type="submit" className="btn btn-primary">
  //           Submit
  //         </button>
  //       </form>
  //     );
  //   }
}
export default FormLogin;
