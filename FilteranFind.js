// const arr = [1, 2, 3, 4, 5, 6];

// const asd = arr.filter((item) => item > 10);

// console.log(asd);

// const arr2 = [1, 2, 3, 4, 5, 6];

// const asd2 = arr.find((item) => item > 10);

// console.log(asd2);

// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const newArr = myArr.flat();

// console.log(newArr);

// const arrNumber = [1, 2, 3, 3, 5, 6];
// const maxFunction = (arr) => {
//   return arr.reduce(function (pre, cur) {
//     return pre > cur ? pre : cur;
//   });
// };

// console.log(maxFunction(arrNumber));

const arrNumber = [1, 2, 3, 3, 5, 6];
console.log(Math.max(...arrNumber));
