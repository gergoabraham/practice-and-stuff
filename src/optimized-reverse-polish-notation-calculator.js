'use strict';

function reversePolishNotationCalculator(input) {
  input = convertInputToArray(input);
  const stack = [];

  input.forEach((element) => {
    if (isOperator(element)) {
      const operator = element;
      const secondOperand = stack.pop();
      const firstOperand = stack.pop();
      stack.push(performOperation(firstOperand, operator, secondOperand));
    } else {
      stack.push(element);
    }
  });

  return stack.pop();
}

function performOperation(firstOperand, operator, secondOperand) {
  return eval(firstOperand + operator + secondOperand);
}

function convertInputToArray(input) {
  return input.split(' ');
}

function isOperator(item) {
  return '+-*/'.includes(item);
}

module.exports = { reversePolishNotationCalculator };
