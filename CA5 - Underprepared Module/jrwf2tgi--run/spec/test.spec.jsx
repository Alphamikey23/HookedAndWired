import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import SimpleCartComponent from '../src/components/SimpleCartComponent.jsx';
import PureCartComponent from '../src/components/PureCartComponent.jsx';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

describe('SimpleCartComponent', () => {
  it('Test Case 1: It should render Simple Cart with initial value 0', () => {
    render(<SimpleCartComponent />);

    expect(screen.getByText('0')).toBeTruthy();
    expect(screen.getByText('Activate Cart')).toBeTruthy();
    expect(screen.getByText('Add Item')).toBeTruthy();
  });

  it('Test Case 2: It should activate cart on clicking Activate Cart', () => {
    render(<SimpleCartComponent />);

    const toggleBtn = screen.getByText('Activate Cart');
    fireEvent.click(toggleBtn);

    // No direct UI change required, just ensuring no crash
    expect(toggleBtn).toBeTruthy();
  });

  it('Test Case 3: It should add item when cart is active', () => {
    render(<SimpleCartComponent />);

    fireEvent.click(screen.getByText('Activate Cart'));
    fireEvent.click(screen.getByText('Add Item'));

    expect(screen.getByText('1')).toBeTruthy();
  });

  it('Test Case 4: It should NOT add item when cart is inactive', () => {
    render(<SimpleCartComponent />);

    fireEvent.click(screen.getByText('Add Item'));

    expect(screen.getByText('0')).toBeTruthy();
  });

  it('Test Case 5: It should handle multiple item additions correctly', () => {
    render(<SimpleCartComponent />);

    fireEvent.click(screen.getByText('Activate Cart'));
    fireEvent.click(screen.getByText('Add Item'));
    fireEvent.click(screen.getByText('Add Item'));
    fireEvent.click(screen.getByText('Add Item'));

    expect(screen.getByText('3')).toBeTruthy();
  });
});

describe('PureCartComponent', () => {
  it('Test Case 6: It should render Pure Cart with initial value 0', () => {
    render(<PureCartComponent />);

    expect(screen.getByText('0')).toBeTruthy();
    expect(screen.getByText('Activate Cart')).toBeTruthy();
    expect(screen.getByText('Add Item')).toBeTruthy();
  });

  it('Test Case 7: It should activate cart on clicking Activate Cart', () => {
    render(<PureCartComponent />);

    const toggleBtn = screen.getByText('Activate Cart');
    fireEvent.click(toggleBtn);

    expect(toggleBtn).toBeTruthy();
  });

  it('Test Case 8: It should add item when cart is active', () => {
    render(<PureCartComponent />);

    fireEvent.click(screen.getByText('Activate Cart'));
    fireEvent.click(screen.getByText('Add Item'));

    expect(screen.getByText('1')).toBeTruthy();
  });

  it('Test Case 9: It should NOT add item when cart is inactive', () => {
    render(<PureCartComponent />);

    fireEvent.click(screen.getByText('Add Item'));

    expect(screen.getByText('0')).toBeTruthy();
  });

  it('Test Case 10: It should handle multiple item additions correctly', () => {
    render(<PureCartComponent />);

    fireEvent.click(screen.getByText('Activate Cart'));
    fireEvent.click(screen.getByText('Add Item'));
    fireEvent.click(screen.getByText('Add Item'));
    fireEvent.click(screen.getByText('Add Item'));

    expect(screen.getByText('3')).toBeTruthy();
  });
});
