This task explores how React handles component re-rendering and how performance can be optimized using `PureComponent`. You will build two similar cart interaction components — one using the standard `Component` class and another using `PureComponent`.

Both components will manage a simple cart system where users can activate the cart and add items. While the functionality remains identical, the internal rendering behavior will differ. By observing console logs, you will understand how `PureComponent` avoids unnecessary re-renders through shallow comparison.

---

## Project Structure

```
src/
│
├── components/
│   ├── SimpleCartComponent.jsx
│   └── PureCartComponent.jsx
│
├── App.jsx
```

---

## Functional Requirements

### 1. SimpleCartComponent

- Extend React’s `Component` class
- Maintain state:

  - `isActive` (boolean)
  - `items` (number)

- Implement:

  - Toggle activation
  - Add item only when cart is active

- Log render activity using:

  ```js
  console.log("This is Simple Cart Component")
  ```

---

### 2. PureCartComponent

- Extend React’s `PureComponent` class
- Implement identical logic as `SimpleCartComponent`
- Log render activity using:

  ```js
  console.log("This is Pure Cart Component")
  ```

---

### 3. App Integration

- Import both components into `App.jsx`
- Render them side-by-side for comparison

---

## Expected Behavior

- Both components should behave identically from a user perspective
- The cart should:

  - Start with `0` items
  - Only allow adding items when activated

- Console logs should reveal:

  - Frequent renders in `Component`
  - Optimized renders in `PureComponent`

---

## Test Coverage

Your implementation will be validated using the following scenarios:

1. Simple Cart renders with initial value `0`
2. Pure Cart renders with initial value `0`
3. Activation toggles correctly in Simple Cart
4. Activation toggles correctly in Pure Cart
5. Items increment when cart is active (Simple)
6. Items increment when cart is active (Pure)
7. Items do not increment when cart is inactive (Simple)
8. Items do not increment when cart is inactive (Pure)
9. Multiple increments work correctly (Simple)
10. Multiple increments work correctly (Pure)

---

## Key Concepts

### React Rendering

React re-renders a component whenever:

- State changes
- Props change

Standard `Component` does not check whether values actually changed.

---

### PureComponent Optimization

`PureComponent` performs a **shallow comparison**:

- If state/props are unchanged → skips render
- Helps reduce unnecessary computations

---

### Shallow Comparison

Only checks:

- Primitive values directly
- Object references (not deep values)

---

## Common Mistakes to Avoid

- Forgetting to extend the correct class (`Component` vs `PureComponent`)
- Incorrect state updates using `this.setState`
- Not applying conditional logic for adding items
- Missing or incorrect button event handlers
- Forgetting to log render statements

---

## Evaluation Criteria

- Correct implementation of both components
- Proper conditional logic for cart updates
- Accurate rendering of item count
- Correct usage of `Component` and `PureComponent`
- Passing all 10 test cases
- Clear console logs demonstrating render behavior

---

## Summary

This assignment demonstrates a critical performance concept in React — avoiding unnecessary renders. By comparing a standard component with a `PureComponent`, you gain insight into how React optimizes UI updates and how small design decisions can impact performance at scale.

Understanding this concept is essential for building efficient, scalable frontend applications.

## Run:

`npm run test:serve` to see how many testcases are passing.