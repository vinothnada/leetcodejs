var argumentsLength = function (...args) {
  return args.length;
};

// var argumentsLength = function(...args) {
//     let count = 0;
//     while (args[count++] !== undefined) {}
//     return count-1;
// };

console.log(argumentsLength(1, 2, 3, 4, 5, 6, 7, 8)); // 3
