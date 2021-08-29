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
/** remove a random element in the items array and return a new array without that item. */
const removeRandom = (items) => {
  let removedIndex = Math.floor(Math.random() * items.length);
  console.log(`Removed item '${items[removedIndex]}' at index ${removedIndex}`);
  return [...items.slice(0, removedIndex), ...items.slice(removedIndex + 1)];
};

//
/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

//
/** Return a new object with all the keys and values from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  obj[key] = val;
  return newObj;
};

//
/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */
// let obj1 = {a:1, b:2}
// let obj2 = {c:3, d:4}
function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
  
}
