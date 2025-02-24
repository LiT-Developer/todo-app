import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('adds new todo', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    
    const input = getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(input);
    
    expect(getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles todo completion', () => {
    const { getByPlaceholderText, container } = render(<App />);
    
    // Add todo
    const input = getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(input);
    
    // Toggle checkbox
    const checkbox = container.querySelector('input[type="checkbox"]');
    fireEvent.click(checkbox!);
    
    expect(container.querySelector('.completed')).toBeInTheDocument();
  });

  it('filters todos', () => {
    const { getByText, getByPlaceholderText, container } = render(<App />);
    
    // Add and complete todo
    const input = getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(input);
    const checkbox = container.querySelector('input[type="checkbox"]');
    fireEvent.click(checkbox!);
    
    // Filter completed
    fireEvent.click(getByText('Completed'));
    expect(container.querySelectorAll('li').length).toBe(1);
    
    // Filter active
    fireEvent.click(getByText('Active'));
    expect(container.querySelectorAll('li').length).toBe(0);
  });
}); 