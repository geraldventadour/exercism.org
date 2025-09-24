// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirdCount = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    totalBirdCount += birdsPerDay[index]
  };
  return totalBirdCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalBirdCount = 0;
  const DAY_IN_A_WEEK = 7;
  let startIndex = 0;
  if (week > 1) {
    startIndex = (week - 1 ) * DAY_IN_A_WEEK;
  }
  const endIndex = startIndex + DAY_IN_A_WEEK - 1;
   for (let index = startIndex; index <= endIndex; index++) {
    totalBirdCount += birdsPerDay[index]
  };
  return totalBirdCount;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index+=2) {
    birdsPerDay[index]++
  };
  return birdsPerDay
}
