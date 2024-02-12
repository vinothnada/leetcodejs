/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const arr2 = [];
  arr.forEach((item, index) => {
    arr2.push(fn(item, index));
  });
  return arr2;
};

console.log(
  map([1, 2, 3], function plusI(n, i) {
    return n + i;
  })
);
