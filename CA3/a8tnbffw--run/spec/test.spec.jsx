import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Counter from '../src/components/Counter';

describe('Counter Component with useState', () => {

  // Test 1: Initial Render State
  it('should render the initial count as 0 ', () => {
    render(<Counter />);
    // Searches for "Count: 0"
    expect(screen.getByText(/Count:\s*0/i)).toBeInTheDocument();
  });

  // Test 2: Button Existence (Increment)
  it('should render an Increment button ', () => {
    render(<Counter />);
    expect(screen.getByRole('button', { name: /Increment/i })).toBeInTheDocument();
  });

  // Test 3: Button Existence (Decrement)
  it('should render a Decrement button', () => {
    render(<Counter />);
    expect(screen.getByRole('button', { name: /Decrement/i })).toBeInTheDocument();
  });

  // Test 4: Button Existence (Reset)
  it('should render a Reset button ', () => {
    render(<Counter />);
    expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
  });

  // Test 5: Increment Functionality
  it('should increase the count by 1 when Increment is clicked ', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /Increment/i });
    fireEvent.click(button);
    expect(screen.getByText(/Count:\s*1/i)).toBeInTheDocument();
  });

  // Test 6: Multiple Increments
  it('should increase correctly after multiple clicks ', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /Increment/i });
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText(/Count:\s*3/i)).toBeInTheDocument();
  });

  // Test 7: Decrement Functionality
  it('should decrease the count by 1 when Decrement is clicked ', () => {
    render(<Counter />);
    const incButton = screen.getByRole('button', { name: /Increment/i });
    const decButton = screen.getByRole('button', { name: /Decrement/i });
    
    // Increment first to 1, then decrement to 0
    fireEvent.click(incButton);
    fireEvent.click(decButton);
    expect(screen.getByText(/Count:\s*0/i)).toBeInTheDocument();
  });

  // Test 8: Negative Numbers
  it('should allow negative numbers when decrementing past 0', () => {
    render(<Counter />);
    const decButton = screen.getByRole('button', { name: /Decrement/i });
    fireEvent.click(decButton);
    expect(screen.getByText(/Count:\s*-1/i)).toBeInTheDocument();
  });

  // Test 9: Reset Functionality
  it('should reset the count to 0 when Reset is clicked ', () => {
    render(<Counter />);
    const incButton = screen.getByRole('button', { name: /Increment/i });
    const resetButton = screen.getByRole('button', { name: /Reset/i });

    // Increase count to 5
    for(let i=0; i<5; i++) fireEvent.click(incButton);
    expect(screen.getByText(/Count:\s*5/i)).toBeInTheDocument();

    // Click Reset
    fireEvent.click(resetButton);
    expect(screen.getByText(/Count:\s*0/i)).toBeInTheDocument();
  });

  // Test 10: Mixed Interaction
  it('should handle a sequence of increments, decrements, and reset ', () => {
    render(<Counter />);
    const inc = screen.getByRole('button', { name: /Increment/i });
    const dec = screen.getByRole('button', { name: /Decrement/i });
    const reset = screen.getByRole('button', { name: /Reset/i });

    fireEvent.click(inc); // 1
    fireEvent.click(inc); // 2
    fireEvent.click(dec); // 1
    fireEvent.click(inc); // 2
    fireEvent.click(reset); // 0
    
    expect(screen.getByText(/Count:\s*0/i)).toBeInTheDocument();
  });

});