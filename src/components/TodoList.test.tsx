import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';

describe('TodoList', () => {
  const mockTodos = [
    { id: 1, text: 'Test Todo', completed: false },
    { id: 2, text: 'Completed Todo', completed: true }
  ];

  it('renders todos correctly', () => {
    const { getByText } = render(
      <TodoList todos={mockTodos} onToggle={() => {}} />
    );
    
    expect(getByText('Test Todo')).toBeInTheDocument();
    expect(getByText('Completed Todo')).toBeInTheDocument();
  });

  it('calls onToggle with correct id when checkbox is clicked', () => {
    const onToggle = jest.fn();
    const { container } = render(
      <TodoList todos={mockTodos} onToggle={onToggle} />
    );
    
    const firstCheckbox = container.querySelector('input[type="checkbox"]');
    fireEvent.click(firstCheckbox!);
    
    expect(onToggle).toHaveBeenCalledWith(1);
  });
}); 