'use strict';

const { getNumberOfIslands } = require('../src/number-of-islands');

describe('Number of Islands', function () {
  context('no islands', function () {
    it('should return 0 if no island is present', function () {
      getNumberOfIslands([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]).should.equal(0);
    });
  });

  context('one sized islands', function () {
    it('should find island on first cell', function () {
      getNumberOfIslands([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]).should.equal(1);
    });

    it('should find two small islands', function () {
      getNumberOfIslands([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1],
      ]).should.equal(2);
    });

    it('should find 4 small islands', function () {
      getNumberOfIslands([
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 1],
      ]).should.equal(4);
    });
  });

  context('larger islands - recognizing neighbours', function () {
    it('should recognize left neighbour', function () {
      getNumberOfIslands([
        [0, 0, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]).should.equal(1);
    });

    it('should recognize left neighbour (two islands)', function () {
      getNumberOfIslands([
        [0, 0, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0],
        [1, 1, 1, 0],
      ]).should.equal(2);
    });

    it('should recognize upper-left neighbour', function () {
      getNumberOfIslands([
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 0],
      ]).should.equal(1);
    });

    it('should recognize upper neighbour', function () {
      getNumberOfIslands([
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ]).should.equal(1);
    });

    it('should recognize upper-right neighbour', function () {
      getNumberOfIslands([
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [1, 0, 0, 1],
      ]).should.equal(2);
    });
  });

  context('larger multiple islands', function () {
    it('one larger islands', function () {
      getNumberOfIslands([
        [1, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ]).should.equal(1);
    });

    it('two larger islands', function () {
      getNumberOfIslands([
        [1, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ]).should.equal(2);
    });

    it('three larger islands', function () {
      getNumberOfIslands([
        [1, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
      ]).should.equal(3);
    });
  });
});
