import React from 'react';
// TODO: Import useState from react
import { useState } from 'react';

function Counter() {
  // TODO: Declare a state variable 'count' initialized to 0
  const [count,setCount] = useState(0);
  
  // TODO: Create a function to handle incrementing
  function handleIncrement() {
    setCount(count+1);
  }


  
  // TODO: Create a function to handle decrementing
  function handleDecrement() {
    setCount(count-1);
  }
  
  // TODO: Create a function to handle reset
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      {/* Display the count */}
      <h1>Count: {count}</h1>

      <div className="button-group">
        {/* Buttons with onClick handlers */}
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;