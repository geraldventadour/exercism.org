// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  function doubleNumber(number) {
    return number * 2;
  }

  return deck.map(doubleNumber)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  function triplicate(accumulator,currentValue) {
    if (currentValue === 3) {
      accumulator.push(3,3,3);
    } else {
      accumulator.push(currentValue);
    }
    return accumulator;
  }

  return deck.reduce(triplicate,[]);
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  console.log(deck)
  const startIndex = deck.length / 2 - 1;
  const endIndex = startIndex + 2; 
  return deck.slice(startIndex,endIndex);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const middle = deck.length / 2;
  const lastCard = deck.pop();
  deck.splice(middle,0,lastCard)
  const firstCard = deck.shift();
  deck.splice(middle,0,firstCard)

  return deck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  function isNumberTwo(number) {
    return number === 2;
  }
  return deck.filter(isNumberTwo);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort(function(a, b) {
  return a - b;
});
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse()
  
}
