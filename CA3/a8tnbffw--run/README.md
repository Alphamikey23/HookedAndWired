# React State Assignment: The Counter

## Problem Statement

React components need a "memory" to keep track of data that changes over time (like a score, a form input, or a counter). Regular variables reset every time a component function runs. To fix this, we use the `useState` hook.

## Tasks

Open `src/components/Counter.jsx` and complete the following:

1.  **Import `useState`**: Add the import statement at the top of the file to bring in the hook from the 'react' library.
2.  **Declare State**: Inside the `Counter` function, use `useState` to create a state variable (e.g., `count`) and its setter function (e.g., `setCount`). Set the **initial value to 0**.
3.  **Display the Count**: Locate the `<h1>` tag. Render the `count` state variable inside it so it reads "Count: 0" (or whatever the current number is).
4.  **Create Buttons**: Inside the `.button-group` div, create three `<button>` elements:
    *   **"Increment"**: When clicked, update state to `count + 1`.
    *   **"Decrement"**: When clicked, update state to `count - 1`.
    *   **"Reset"**: When clicked, update state to `0`.

## Hints & Tips

*   **Syntax:** Remember the syntax: `const [state, setState] = useState(initialValue);`.
*   **Events:** Use `onClick={() => ...}` to attach your logic to the buttons.
*   **Re-rendering:** You don't need to manually tell the screen to update. Calling `setCount(...)` automatically triggers a re-render!

## Testing Your Code

1.  **Preview:** Run `vite` in the terminal to see your app. Click the buttons. Does the number change?
2.  **Run Tests:** Run `npm run test:serve` to run the automated grading tests.  

**Submission Guidelines:**
*   Ensure the component exports correctly.
*   Ensure all buttons work as described.
*   Check that all 10 test cases pass before submitting.  
* Only edit in `src/components/Counter.jsx`

## Test Cases

1.  **Initial Render:** Checks if "Count: 0" is displayed on load.
2.  **Increment Button:** Checks if a button with text "Increment" exists.
3.  **Decrement Button:** Checks if a button with text "Decrement" exists.
4.  **Reset Button:** Checks if a button with text "Reset" exists.
5.  **Increment Action:** Verifies clicking Increment changes count to 1.
6.  **Multiple Increments:** Verifies clicking Increment 3 times changes count to 3.
7.  **Decrement Action:** Verifies clicking Decrement reduces the count.
8.  **Negative Numbers:** Verifies the counter can go below zero (e.g., -1).
9.  **Reset Action:** Verifies clicking Reset returns a high count back to 0.
10. **Mixed Interaction:** Verifies a sequence of clicks (Inc -> Dec -> Reset) results in the correct final state.

Good luck! Give your component a memory!