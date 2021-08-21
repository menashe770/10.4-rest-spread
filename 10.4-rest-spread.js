// filterOutOdds
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
// Slice and Dice
// removeRandom
const removeRandom = (items) => {
  let removedIdx = Math.floor(Math.random() * items.length);
  console.log('Removed item:', items[removedIdx]);
  return [...items.slice(0, removedIdx), ...items.slice(removedIdx + 1)];
};

//
// extend
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

//
// addKeyVal
const addKeyVal = (obj, key, val) => {};
