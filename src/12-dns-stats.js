/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let temp = [];
  const res = {};
  for (let i = 0; i < domains.length; i++) {
    temp.push(`.${domains[i].split('.').reverse().join('.')}`);
  }
  temp = temp.sort();
  for (let i = 0; i < temp.length; i++) {
    res[temp[i].substring(0, temp[i].indexOf('.', 1))] = 0;
    res[temp[i]] = 0;
  }
  Object.keys(res).forEach((e) => {
    let count = 0;
    if (Object.prototype.hasOwnProperty.call(res, e)) {
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].indexOf(e) !== -1) {
          res[e] = ++count;
        }
      }
    }
  });
  return res;
}

module.exports = getDNSStats;
