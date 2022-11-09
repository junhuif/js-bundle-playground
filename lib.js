function add(n) {
  return (m) => n + m;
}

function subtract(n) {
  return (m) => n - m;
}

function plus(n) {
  return (m) => n * m;
}

function double(n) {
  return plus(n)(n);
}

const basic = {
  add,
  subtract,
};

export default basic;

export { add, subtract, plus, double };
