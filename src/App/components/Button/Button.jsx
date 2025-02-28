import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Button.scss"; // Подключение стилей

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || "button",
      disabled: props.disabled || false,
      variant: props.variant || "primary",
      size: props.size || "medium",
      fullWidth: props.fullWidth || false,
    };
  }

  handleClick = (event) => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(event);
    }
  };

  handleMouseEnter = (event) => {
    const { onMouseEnter } = this.props;
    if (onMouseEnter) {
      onMouseEnter(event);
    }
  };

  handleMouseLeave = (event) => {
    const { onMouseLeave } = this.props;
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  };

  handleFocus = (event) => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(event);
    }
  };

  handleBlur = (event) => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(event);
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  render() {
    const { label, icon, ...props } = this.props;
    const { type, disabled, variant, size, fullWidth } = this.state;
    const classNames = `btn btn-${variant} btn-${size} ${
      fullWidth ? "btn-fullwidth" : ""
    }`;

    return (
      <button
        type={type}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onSubmit={this.handleSubmit}
        disabled={disabled}
        className={classNames}
        {...props}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "warning",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
};

export default Button;

// import { Component } from "react";
// import "./Button.scss";

// class Button extends Component {
//   state = {};
//   componentDidMount() {
//     console.log("Form Login Mount");
//   }
//   componentDidUpdate(nextProps, nextState) {
//     console.log("Form  Update");
//   }
//   componentWillUnmount() {
//     console.log("Form Will Unmount");
//   }
//   handleChange = ({ target }) => {
//     console.log("target.name > ", target.name);
//   };
//   render() {
//     return <button className="btn"></button>;
//   }
// }

// export default Button;
