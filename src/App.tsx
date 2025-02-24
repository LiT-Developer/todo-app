import React, { useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilters } from './components/TodoFilters';
import { Todo, FilterType } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <h1>todos</h1>
      <div className="todo-container">
        <TodoInput onAdd={addTodo} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} />
        <TodoFilters
          activeFilter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          itemsLeft={itemsLeft}
        />
      </div>
    </div>
  );
};

export default App;
