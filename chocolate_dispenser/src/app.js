

// ------------------------------------------------------------
//  Kalvium Lab – Chocolate Dispenser
//  Complete all functions based on the given instructions.
//  DO NOT change function names or return formats.
//  Carefully read the Progression requirements before coding.
// ------------------------------------------------------------

var chocolates = [
  'green','green','green','silver','blue','crimson','purple','red','crimson','purple',
  'purple','green','pink','blue','red','silver','crimson','purple','silver','silver',
  'red','green','red','silver','pink','crimson','purple','green','red','silver',
  'crimson','pink','silver','blue','pink','crimson','crimson','crimson','red','purple',
  'purple','green','pink','blue','red','crimson','silver','purple','purple','purple',
  'red','purple','red','blue','silver','green','crimson','silver','blue','crimson',
  'purple','green','pink','green','red','silver','crimson','blue','green','red',
  'red','pink','blue','silver','pink','crimson','purple','green','red','blue','red',
  'purple','silver','blue','pink','silver','crimson','silver','blue','purple','purple',
  'green','blue','blue','red','red','silver','purple','silver','crimson'
];

// ------------------------------------------------------------
// Progression 1: Add chocolates to the dispenser
// ------------------------------------------------------------
// TODO:
// 1. Function name: addChocolates
// 2. Parameters: chocolates (array), color (string), count (number)
// 3. Add the given color chocolates to the *top* of the dispenser.
// 4. If count <= 0 → return "Number cannot be zero/negative"
// 5. Update the original array directly.
function addChocolates(chocolates, color, count) {
  // Your code here
  for (let i=0;i<count;i++) {
    chocolates.unshift(color);
  }

  //  console.log(chocolates.splice(-number-1));
  //return chocolates.splice(-3);

}



// ------------------------------------------------------------
// Progression 2: Remove chocolates from the top
// ------------------------------------------------------------
// TODO:
// 1. Function name: removeChocolates
// 2. Parameters: number (how many to remove), chocolates (array)
// 3. Remove chocolates from the *top* and return them as an array.
// 4. If number <= 0 → return "Number cannot be zero/negative"
// 5. If number > chocolates.length → return "Insufficient chocolates in the dispenser"
function removeChocolates(number, chocolates) {
  // Your code here
  console.log(number);
  console.log(chocolates.slice(-3));
  return chocolates.slice(-3);
 
}



// ------------------------------------------------------------
// Progression 3: Dispense chocolates from the bottom
// ------------------------------------------------------------
// TODO:
// 1. Function name: dispenseChocolates
// 2. Parameters: chocolates (array), number
// 3. Remove chocolates from the *bottom* and return them.
// 4. If invalid number → handle same as previous questions.
// 5. If number > chocolates.length → return "Insufficient chocolates in the dispensers"
function dispenseChocolates(chocolates, number) {
  // Your code here
}



// ------------------------------------------------------------
// Progression 4: Dispense chocolates of a given color
// ------------------------------------------------------------
// TODO:
// 1. Function name: dispenseChocolatesOfColor
// 2. Remove chocolates of the given color *from the bottom*
// 3. Return them as an array.
// 4. If number > available chocolates of that color → return "Insufficient chocolates in the dispensers"
function dispenseChocolatesOfColor(chocolates, number, color) {
  // Your code here
}



// ------------------------------------------------------------
// Progression 5: Count chocolates of each color
// ------------------------------------------------------------
// TODO:
// 1. Function name: noOfChocolates
// 2. Return an array of counts in this exact order:
//    [green, silver, blue, crimson, purple, red, pink]
//function noOfChocolates(chocolates) {
  // Your code here
//}



// ------------------------------------------------------------
// Progression 6: Sort chocolates based on count
// ------------------------------------------------------------
// TODO:
// 1. Function name: sortChocolateBasedOnCount
// 2. Sort chocolates in descending order based on how many times each color appears.
// 3. Return the sorted array.
function sortChocolateBasedOnCount(chocolates) {
  // Your code here
}



// ------------------------------------------------------------
// Optional Progression 7
// ------------------------------------------------------------
// TODO:
// Change 'number' chocolates of 'color' to 'finalColor'
// If color === finalColor → return "Can't replace the same chocolates"
// Return updated array
function changeChocolateColor(chocolates, number, color, finalColor) {
  // Your code here
}



// ------------------------------------------------------------
// Optional Progression 8
// ------------------------------------------------------------
// TODO:
// Change ALL chocolates of 'color' to 'finalColor'
// Return: [countOfChangedChocolates, updatedArray]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  // Your code here
}



// ------------------------------------------------------------
// Challenge 1
// ------------------------------------------------------------
// TODO:
// Remove *one* chocolate of given color from the top.
function removeChocolateOfColor(chocolates, color) {
  // Your code here
}



// ------------------------------------------------------------
// Challenge 2
// ------------------------------------------------------------
// TODO:
// For every 3 chocolates of the same color dispensed,
// return how many rainbow chocolates should be dispensed.
function dispenseRainbowChocolates(chocolates, number) {
  // Your code here
}
