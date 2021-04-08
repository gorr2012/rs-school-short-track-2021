/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = matrix.flat();
  let res = 0;
  if (arr.indexOf(0) !== -1) {
    for (let i = matrix[0].length; i < arr.length; i++) {
      if (matrix.length === 1 && matrix[0].length === 1) res = arr[i];
      if (arr[i] === 0) {
        if (Math.floor(i / matrix[0].length) >= 1) {
          let j = (Math.floor(i / matrix[0].length));
          while (j >= 1) {
            res += arr[i - matrix[0].length * j];
            j--;
          }
        }
      }
    }
  } else {
    res = arr.reduce((s, p) => s + p);
  }
  return res;
}

module.exports = getMatrixElementsSum;
