/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const res = [];
  let subArray = [];
  let count = 0;
  const nArray = n.toString().split('');
  for (let j = 0; j < nArray.length; j++) {
    for (let i = 0; i < nArray.length; i++) {
      if (i !== count) {
        subArray.push(nArray[i]);
      }
    }
    res.push(Number(subArray.join('')));
    subArray = [];
    count++;
  }
  return Math.max.apply(null, res);
}

module.exports = deleteDigit;
