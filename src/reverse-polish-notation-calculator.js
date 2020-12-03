'use strict';

function reversePolishNotationCalculator(input) {
  input = convertInputToArray(input);

  for (let i = 0; i < input.length; i++) {
    if (isOperator(input[i])) {
      input[i] = getOperationResult(input, i);
      removeOperands(input, i);
      i -= 2;
    }
  }

  return input[0];
}

function convertInputToArray(input) {
  return input.split(' ');
}

function isOperator(item) {
  return '+-*/'.includes(item);
}

function getOperationResult(input, i) {
  const firstOperand = input[i - 2];
  const secondOperand = input[i - 1];
  const operator = input[i];

  return eval(firstOperand + operator + secondOperand);
}

function removeOperands(input, operatorIndex) {
  input.splice(operatorIndex - 2, 2);
}

module.exports = { reversePolishNotationCalculator };
