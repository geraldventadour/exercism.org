//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function isEven(number) {
  return number % 2 === 0;
}

function divide(divisor) {
  return function (dividend) {
    return dividend / divisor;
  };
}

function multiply(multiplier) {
  return function (multiplicand) {
    return multiplicand * multiplier;
  };
}

const divideByTwo = divide(2);
const multiplyByThree = multiply(3);

export const steps = (number) => {
  if (number <= 0) {
    throw new Error('Only positive integers are allowed');
  }

  let stepsCount = 0;

  while (number > 1) {
    if (isEven(number)) {
      number = divideByTwo(number); // Even number case
    } else {
      number = multiplyByThree(number) + 1; // Odd number case
    }

    stepsCount++; // Increment the step counter
  }

  return stepsCount; // Return the total number of steps
};




