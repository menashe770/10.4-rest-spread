// Given
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Refactor to use rest op and arrow func
const filterOutOdds = (...args) => args.filter((nums) => nums % 2 === 0);

