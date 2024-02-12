/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val === val2) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function (val2) {
      if (val !== val2) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
