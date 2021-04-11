/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  const strNew = str.split('');
  for (let i = 0; i < strNew.length; i++) {
    let j = i + 1;
    let count = 1;
    while (j < strNew.length) {
      if (strNew[i] === strNew[j]) {
        count++;
        j++;
      } else {
        break;
      }
    }
    if (res.find((e) => e === strNew[i]) === undefined) res.push(count, strNew[i]);
    if (res[res.length - 1] !== strNew[i]) res.push(count, strNew[i]);
  }
  return res.filter((e) => e !== 1).join('');
}

module.exports = encodeLine;
