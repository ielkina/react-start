import { Component } from "react";

class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("keydown", this.handlePressESC);
  }

  //очистка слушателя событий, setTimeout, http запросы
  componentWillUnmount() {
		window.removeEventListener('keydown', this.handlePressESC)
	}
  //event.code = {code} - деструктуризация ивента
  handlePressESC = ({ code }) => {
    console.log("object :>> ", Date.now());
    if (code === "Escape") this.props.closeModal();
  };
  render() {
    const { children, closeModal } = this.props;
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
  }
}

export default Modal;
