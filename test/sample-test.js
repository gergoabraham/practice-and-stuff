'use strict';

const { sampleFunction } = require('../src/sample');

describe('sample test', function () {
  it('should return sum', function () {
    sampleFunction(2, 3).should.equal(5);
  });
});
