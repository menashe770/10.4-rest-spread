// Given
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Refactor to use rest op and arrow func
const filterOutOdds = (...args) => args.filter((nums) => nums % 2 === 0);

//
// findMin
const findMin = (...args) => Math.min(args);

//
// mergeObjects
const mergeObjects = (arg1, arg2) => ({ ...arg1, ...arg2 });

//
// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((x) => x * 2),
];

//
// Slice and Dice!

// removeRandom
const removeRandom = (items) => 
