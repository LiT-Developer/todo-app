import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TodoInput } from './TodoInput';

describe('TodoInput', () => {
  it('calls onAdd with trimmed text when form is submitted', () => {
    const onAdd = jest.fn();
    const { getByPlaceholderText } = render(<TodoInput onAdd={onAdd} />);
    
    const input = getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: '  New Todo  ' } });
    fireEvent.submit(input);
    
    expect(onAdd).toHaveBeenCalledWith('New Todo');
  });

  it('clears input after submission', () => {
    const { getByPlaceholderText } = render(<TodoInput onAdd={() => {}} />);
    
    const input = getByPlaceholderText('What needs to be done?') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(input);
    
    expect(input.value).toBe('');
  });
}); 