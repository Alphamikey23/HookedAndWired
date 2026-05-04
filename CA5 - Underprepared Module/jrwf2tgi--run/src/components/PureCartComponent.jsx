import React, { PureComponent } from 'react';

// Task 1: Complete the implementation of this PureComponent
export default class PureCartComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // Define:
      // - isActive → boolean
      // - items → number
      isActive: false,
      items: 0,
    };
  }

  toggleCart = () => {
    // Toggle isActive
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
    console.log('Pure Cart Component');

    return (
      <div>
        <h1>Pure Cart</h1>
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
