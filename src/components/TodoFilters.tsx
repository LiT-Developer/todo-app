import React from 'react';
import { FilterType } from '../types/todo';
import classNames from 'classnames';

interface TodoFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
  itemsLeft: number;
}

export const TodoFilters: React.FC<TodoFiltersProps> = ({
  activeFilter,
  onFilterChange,
  onClearCompleted,
  itemsLeft
}) => {
  return (
    <div className="todo-filters">
      <span>{itemsLeft} items left</span>
      <div className="filters">
        <button
          className={classNames({ active: activeFilter === 'all' })}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={classNames({ active: activeFilter === 'active' })}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={classNames({ active: activeFilter === 'completed' })}
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
}; 