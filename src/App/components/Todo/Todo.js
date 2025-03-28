/* eslint-disable no-unused-vars */
import React from "react";
import { ReactComponent as IconDelete } from "../../../assets/icons/delete.svg";
import IconButton from "../IconButton/IconButton.js";

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    {/* <button type="button" className="TodoList__btn" onClick={onDeleteTodo}>
      Удалить
    </button> */}
    <IconButton className="IconButton" onClick={onDeleteTodo}>
      <IconDelete height="30" width="30" fill="#fff" />
    </IconButton>
  </>
);

export default Todo;
