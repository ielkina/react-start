import React from 'react';
import IconButton from 'components/IconButton';
import { ReactComponent as IconDelete } from 'icons/delete.svg';

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
      <IconDelete height="30" width="30" fill='#fff'/>
    </IconButton>
  </>
);

export default Todo;
