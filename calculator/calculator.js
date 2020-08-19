module.exports = {
  add,
  multiply,
};

function add(a, b = 0) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
