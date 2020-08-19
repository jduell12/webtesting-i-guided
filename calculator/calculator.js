module.exports = {
  add,
  multiply,
};

function add(...nums) {
  return nums.reduce((acc, current) => acc + current);
}

function multiply(a, b) {
  return a * b;
}
