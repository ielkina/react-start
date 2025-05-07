import {  useEffect } from "react";

//переписываем на хуки
const Modal = ({ children, closeModal }) => {
  //переносим метод из классов и переделываем его на функцию
  // const handlePressESC = ({ code }) => {
  //   console.log("object :>> ", Date.now());

  //   if (code === "Escape") closeModal(); //(code, closeModal)переносим пропсы из классов в функции и деструктурируем их
  // };
  // useEffect(() =>{}, [])//пример зарезервированного синтаксиса хуков useEffect, принимает колбэк и массив

  //аналог componentDidMount и componentWillUnmount
  //срабатывает на каждом рендере, если не передать массив зависимостей, то будет бесконечный цикл рендеров
  // при передачи зависимостей в массив [] - сработает только один раз при монтировании компонента
  //при не передачи зависимостей в массив [] - сработает на каждом рендере компонента

  useEffect(() => {
    const handlePressESC = ({ code }) => {
      console.log("object :>> ", Date.now());
      if (code === "Escape") closeModal(); //(code, closeModal)переносим пропсы из классов в функции и деструктурируем их
    };
    // console.log("useEffect = componentDidMount");
    window.addEventListener("keydown", handlePressESC);
    //для componentWillUnmount в конце useEffect прописывает return функцию, которая сработает при размонтировании компонента
    return () => {
      // console.log("useEffect = componentWillUnmount");
      window.removeEventListener("keydown", handlePressESC);
    }; //очистка слушателя событий, setTimeout, http запросы
    //вызов функции при размонтировании компонента
  }, [closeModal]); //предупреждение о том, что в хуках нужно передавать зависимости в массив [] не игнорим а передаем необходимою зависимость

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backdropFilter: "blur(5px)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Регистрация</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

///********************************************************* */
// class Modal extends Component {
//   state = {};
//   componentDidMount() {
//     window.addEventListener("keydown", this.handlePressESC);
//   }

//   //очистка слушателя событий, setTimeout, http запросы
//   componentWillUnmount() {
// 		window.removeEventListener('keydown', this.handlePressESC)
// 	}
//   //event.code = {code} - деструктуризация ивента
//   handlePressESC = ({ code }) => {
//     console.log("object :>> ", Date.now());
//     if (code === "Escape") this.props.closeModal();
//   };
//   render() {
//     const { children, closeModal } = this.props;
//     return (
//       <div
//         className="modal fade show"
//         style={{ display: "block", backdropFilter: "blur(5px)" }}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Регистрация</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 aria-label="Close"
//                 onClick={closeModal}
//               ></button>
//             </div>
//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;
