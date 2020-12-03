'use strict';

const {
  reversePolishNotationCalculator,
} = require('../src/optimized-reverse-polish-notation-calculator');

describe('Optimized Reverse Polish Notation calculator', function () {
  context('operators', function () {
    it('2 3 + = 5', function () {
      reversePolishNotationCalculator('2 3 +').should.equal(5);
    });
    it('3 3 * = 9', function () {
      reversePolishNotationCalculator('3 3 *').should.equal(9);
    });
    it('4 9 - = -5', function () {
      reversePolishNotationCalculator('4 9 -').should.equal(-5);
    });
    it('12 3 / = 4', function () {
      reversePolishNotationCalculator('12 3 /').should.equal(4);
    });
  });
  context('multiple operators', function () {
    it('2 3 4 + + = 9', function () {
      reversePolishNotationCalculator('2 3 4 + +').should.equal(9);
    });
    it('2 3 4 + - = -5', function () {
      reversePolishNotationCalculator('2 3 4 + -').should.equal(-5);
    });
    it('2 3 4 5 + - * = -12', function () {
      reversePolishNotationCalculator('2 3 4 5 + - *').should.equal(-12);
    });
    it('15 7 1 1 + − ÷ 3 × 2 1 1 + + − = 5', function () {
      reversePolishNotationCalculator(
        '15 7 1 1 + - / 3 * 2 1 1 + + -'
      ).should.equal(5);
    });
  });
});
