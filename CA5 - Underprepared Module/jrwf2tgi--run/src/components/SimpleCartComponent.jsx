import React, { Component } from 'react';

// Task 2: Complete the implementation of the SimpleCartComponent
export default class SimpleCartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Define:
      // - isActive → boolean (cart status)
      // - items → number (count of items in cart)
      isActive: false,
      items: 0,
    };
  }

  toggleCart = () => {
    // Toggle isActive between true and false
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  addItem = () => {
    // Increment items ONLY if isActive is true
    if (this.state.isActive) {
      this.setState((prevState) => ({
        items: prevState.items + 1,
      }));
    }
  };

  render() {
    console.log('Simple Cart Component');

    return (
      <div>
        <h1>Simple Cart</h1>
        <label>Items in Cart:</label>
        <span>{this.state.items}</span>
        <button onClick={this.toggleCart}>
          {this.state.isActive ? 'Deactivate Cart' : 'Activate Cart'}
        </button>
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}
