const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, val) => total + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, val) => {
    return total *= val
  }, 1);
};

const power = function(base, power) {
  return base**power;
};

const factorial = function(num) {
  let fact = 1;
	for(let i = num; i > 0; i--){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
