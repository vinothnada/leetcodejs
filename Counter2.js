/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = n;
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    reset: () => {
      count = n;
      return count;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
