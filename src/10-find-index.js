/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value, start = 0, end = array.length - 1) {
  const middle = Math.floor((start + (end - start) / 2));
  if (end < 1) return array[0];
  if (value === array[middle]) return middle;
  if (end - 1 === start) return value === array[start] ? start : end;
  if (value < array[middle]) return findIndex(array, value, start, middle);
  if (value > array[middle]) return findIndex(array, value, middle, end);
  return 'Error';
}

module.exports = findIndex;
