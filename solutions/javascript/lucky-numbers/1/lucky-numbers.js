// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const array1ToNumber = Number(array1.join(''));
  const array2ToNumber = Number(array2.join(''));
  return array1ToNumber + array2ToNumber;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueToString = String(value);
  const reversedString = valueToString.split('').reverse().join('')
  return valueToString === reversedString;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const isEmptyinput = !Boolean(input) ;
  const isEqualToZeroOrNaN = !Number(input);
  
  if (isEmptyinput) {
    return 'Required field';
  }
  
  if (isEqualToZeroOrNaN){
    return 'Must be a number besides 0';
  }
  
  return '';
}
