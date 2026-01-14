
// ------------------------------------------------------------
//  Recursive Function Lab – sumOfDigits
//  Complete the function based on the given instructions.
//  DO NOT change the function name or return statements.
//  Make sure all test cases pass.
// ------------------------------------------------------------

// ------------------------------------------------------------
// Instructions for Students:
// ------------------------------------------------------------
// 1. You must implement this function using RECURSION ONLY.
//    Do NOT use loops (no for, while, etc.).
// 2. Identify and write the BASE CASE clearly.
// 3. For the RECURSIVE CASE, break the number into:
//        - last digit: n % 10
//        - remaining digits: Math.floor(n / 10)
// 4. The function should work for:
//        - single-digit numbers
//        - numbers with zeros
//        - large numbers
// 5. Read the test cases carefully before writing the logic.
// ------------------------------------------------------------

// ------------------------------------------------------------
// TODOs:
// ------------------------------------------------------------
// TODO 1: Write the BASE CASE → When should the recursion stop?
// TODO 2: Extract the last digit of the number.
// TODO 3: Recursively call sumOfDigits on the remaining digits.
// TODO 4: Return the sum of (last digit + recursive result).
// ------------------------------------------------------------

// Complete the recursive function to calculate the sum of digits of a number
function sumOfDigits(n) {
  let sum1 = 0;

  // TODO: Base Case → If the number is 0, return 0
  if(n == 0 || n < 1) {
    return 0;
  }



  // TODO: Extract the last digit using modulus (%) operator
  let last_digit = n % 10;
  console.log(last_digit,n); 

  // TODO: Remove the last digit using Math.floor()
  n = Math.floor(n / 10);

  // TODO: Recursively calculate the sum of the remaining digits
  sum1 = sum1 + last_digit + sumOfDigits(n) 


  // TODO: Add last digit + recursive result and return the value
  return sum1;
}
