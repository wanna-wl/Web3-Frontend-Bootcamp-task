// src/components/ToDoItem.jsx
import React from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <li>
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>删除</button>
    </li>
  );
};

export default ToDoItem;
