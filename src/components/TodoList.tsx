import React from 'react';
import { Todo } from '../types/todo';
import classNames from 'classnames';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={classNames({ completed: todo.completed })}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}; 