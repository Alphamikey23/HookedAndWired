//Trial 1 - Add ___ chocolates of ____ color
describe('Add chocolates of differenent color - addChocolates in the dispenser', function () {
  var candies = [
    'green',
    'blue',
    'blue',
    'red',
    'red',
    'silver',
    'purple',
    'silver',
  ];



  it('Add two more green chocolates in the dispenser', function () {
    let expectedResult = 10;

    addChocolates(candies, 'green', 2);

    let actualResult = candies.length;

    expect(actualResult).toEqual(expectedResult);
  });


  it('Dispense chocolates from the bottom of the dispenser, return them in an array( dispense it).', function () {
    var candies = [
      'green',
      'blue',
      'blue',
      'red',
      'red',
      'silver',
      'purple',
      'silver',
    ];

    let expectedResult = ['silver', 'purple', 'silver'];

    let actualResult = dispenseChocolates(candies, 3);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Insufficient chocolates in the dispenser' when number is greater than chocolate count( dispenser)", function () {
    var candies = [
      'green',
      'blue',
      'blue',
      'red',
      'red',
      'silver',
      'purple',
      'silver',
    ];

    let expectedResult = 'Insufficient chocolates in the dispensers';

    let actualResult = dispenseChocolates(candies, candies.length + 1);

    expect(actualResult).toEqual(expectedResult);
  });
 

  it('Dispense 4 red chocolates from the bottom of the dispensers, return them in an array', function () {
    var candies = [
      'green',
      'green',
      'green',
      'green',
      'red',
      'red',
      'red',
      'red',
    ];

    let expectedResult = ['red', 'red', 'red', 'red'];

    let actualResult = dispenseChocolatesOfColor(candies, 4, 'red');

    expect(actualResult).toEqual(expectedResult);
  });
  it('Defines noOfChocolates', function () {
    expect(typeof noOfChocolates).toBe('function');
  });
  it('Return array of number of chocolate [green, silver, blue, crimson, purple, red, pink]', function () {
    let candies = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'red', 'pink', 'blue', 'crimson', 'crimson'];
    let expectedResult = [1, 1, 2, 3, 1, 2, 1];
    let actualResult = noOfChocolates(candies); // Ensure candies is passed
    expect(actualResult).toEqual(expectedResult);
});

it('Return chocolate in descending order based on count in each color', function () {
    let candies = ['red', 'blue', 'green', 'red'];
    let expectedResult = ['red', 'red', 'blue', 'green'];
    let actualResult = sortChocolateBasedOnCount(candies); // Pass candies
    expect(actualResult).toEqual(expectedResult);
});

   // New Test Case for removeChocolates()
   it('Removes chocolates from the top of the dispenser and returns an array of removed chocolates', function () {
    let expectedResult = ['green', 'blue'];
    let actualResult = removeChocolates(2, candies);
    expect(actualResult).toEqual(expectedResult);
    expect(candies).toEqual(['blue', 'red', 'red', 'silver', 'purple', 'silver']); // Remaining chocolates
});
});





