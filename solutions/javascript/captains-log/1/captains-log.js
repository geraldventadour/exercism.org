// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const PREFIX = 'NCC-'
  const MIN_NUMBER = 1000;
  const MAX_NUMBER = 9999;
  // min + Math.random()*(max - min)
  const randomNumber = Math.floor(MIN_NUMBER + Math.random() * (MAX_NUMBER - MIN_NUMBER));
  const registryNumber = PREFIX + randomNumber;
  return registryNumber;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const MIN_STARTDATE = 41000.0;
  const MAX_STARTDATE = 42000.0;   
  const randomStartDate = MIN_STARTDATE + Math.random() * (MAX_STARTDATE - MIN_STARTDATE)
  return randomStartDate; 
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const PLANETARY_CLASSES = 'DHJKLMNRTY';
  const MIN_RANGE = 0;
  const maxRange = PLANETARY_CLASSES.length;
  const randomIndex = Math.floor(MIN_RANGE + Math.random() * maxRange - MIN_RANGE)
  const randomPlanetaryClass = PLANETARY_CLASSES[randomIndex];
  return randomPlanetaryClass;
}
