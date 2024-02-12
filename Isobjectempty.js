/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return Object.keys(obj).length > 0;
};

console.log(isEmpty({ x: 5, y: 42 }));
