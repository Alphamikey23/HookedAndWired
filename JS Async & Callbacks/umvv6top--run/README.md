## Assignment Overview
This assignment will help you understand the basics of asynchronous programming and callbacks in JavaScript. You will simulate an API call using `setTimeout`, handle errors for invalid inputs, and display the results in a specific format.

## Steps to Complete the Assignment

### 1️⃣ Write the `fetchUserData` Function
- **Parameters:**
  - `userId` (number): The ID of the user to fetch details for.
  - `callback` (function): A function to handle the result (either user data or an error).
- **Functionality:**
  - Simulate a delay of **2 seconds** using `setTimeout` to mimic an API call.
  - Check if the `userId` exists in the predefined `mockUserData` object:
    - **If the user exists:** Call the `callback` with `null` for the error and the user data.
    - **If the user does NOT exist:** Call the `callback` with the error message **"User not found"** and `null` for the data.

### 2️⃣ Write the `displayUserData` Function
- **Parameters:**
  - `error` (string): The error message if the user ID is invalid.
  - `data` (object): The user data if the user ID is valid.
- **Functionality:**
  - If an error is provided, log the message in the format: **`Error: User not found`**.
  - If data is provided, log the user details in this format:
    
    **`Name: [name], Age: [age], City: [city]`**  
    Example: **`Name: Alice, Age: 25, City: New York`**

### 🔑 Mock User Data
```javascript
const mockUserData = {
  1: { name: "Alice", age: 25, city: "New York" },
  2: { name: "Bob", age: 30, city: "Los Angeles" },
  3: { name: "Charlie", age: 35, city: "Chicago" }
};
```

### ✅ Example Code
```javascript
// Function to simulate fetching user data asynchronously
function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = mockUserData[userId];
    if (user) {
      callback(null, user); // No error, user data found
    } else {
      callback("User not found", null); // Error message, no data
    }
  }, 2000); // Simulate 2-second API delay
}

// Function to display user data or error
function displayUserData(error, data) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log(`Name: ${data.name}, Age: ${data.age}, City: ${data.city}`);
  }
}

// Example usage
fetchUserData(1, displayUserData); // Logs: Name: Alice, Age: 25, City: New York (after 2 seconds)
fetchUserData(5, displayUserData); // Logs: Error: User not found (after 2 seconds)
```

### 🚀 Key Points to Remember
- Use `setTimeout` to mimic API delay.
- Always handle both success and error cases.
- Follow the exact logging format for consistency.
