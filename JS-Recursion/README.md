# **Recursive Function Assignment – sumOfDigits**

## About the Assignment

In this assignment, you will implement a **recursive JavaScript function** that calculates the **sum of digits** of any given number.
The goal is to help you understand how recursion works by repeatedly breaking down a larger problem into smaller parts until a **base case** is reached.

For example:
`sumOfDigits(123) → 1 + 2 + 3 = 6`

This problem helps you practice:

* Writing recursive functions
* Identifying base cases
* Performing number decomposition
* Eliminating loops and trusting recursive flow

---

## Tasks for Students

Your assignment is to complete the function `sumOfDigits(n)` using **recursion only**.

You must:

1. Define the correct **base case**.
2. Extract the **last digit** using `%`.
3. Remove the last digit using `Math.floor(n / 10)`.
4. Make a **recursive call** with the remaining digits.
5. Return the correct sum.

---

## Instructions

* You **must not use loops** (`for`, `while`, or any variation).
* Do **not** change the function name.
* Your solution must correctly process:

  * Single-digit numbers
  * Numbers with zeroes
  * Large numbers
  * The number `0` (edge case)
* Use recursion as the main logic flow — no arrays, no iteration.

---

## Test Cases (1–8)

These are the **exact test expectations** your solution must pass.

### **Test Case 1**

**Input:** `123`
**Expected Output:** `6`
Explanation: 1 + 2 + 3 = 6

### **Test Case 2**

**Input:** `456`
**Expected Output:** `15`
Explanation: 4 + 5 + 6 = 15

### **Test Case 3**

**Input:** `1001`
**Expected Output:** `2`
Explanation: 1 + 0 + 0 + 1 = 2

### **Test Case 4**

**Input:** `0`
**Expected Output:** `0`
Explanation: Base case

### **Test Case 5**

**Input:** `9`
**Expected Output:** `9`
Explanation: Single-digit number

### **Test Case 6**

**Input:** `987654321`
**Expected Output:** `45`
Explanation: 9 + 8 + … + 1 = 45

### **Test Case 7**

**Input:** `1`
**Expected Output:** `1`
Explanation: Single-digit edge case

### **Test Case 8**

**Input:** `100000`
**Expected Output:** `1`
Explanation: 1 + 0 + 0 + 0 + 0 + 0 = 1

---

## Submission Guidelines

* Make sure your solution strictly uses **recursion**.
* Ensure that **all 8 test cases pass** without modifying the test file.
* Keep the provided function name and structure unchanged.
* Review your logic for:

  * Correct base case
  * Correct digit extraction
  * Proper recursive breakdown
* Edit only `app.js` file.

---

## **Good Luck!**

Think step-by-step, trust the recursive process, and test often.
You are building an essential foundation for solving complex problems—stay focused and you’ll do great!
