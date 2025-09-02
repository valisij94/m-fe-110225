const isNumber = (num) => {
  return !isNaN(num) && typeof num === 'number';
}

const add = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  else return 'something went wrong!';
}

const subtract = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  }
  else return 'something went wrong!';
}

const multiply = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a * b;
  }
  else return 'something went wrong!';
}

const divide = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    if (b !== 0) {
      return a / b;
    }
    else {
      return 'cannot divide by zero!';
    }
  }
  else return 'something went wrong!';
}

export { add, subtract, multiply, divide };