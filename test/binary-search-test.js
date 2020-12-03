'use strict';

const { performance } = require('perf_hooks');

const { iterativeSearch, recursiveSearch } = require('../src/binary-search');

describe.only('Binary search', function () {
  context('iterative', function () {
    performBinarySearchTests(iterativeSearch);
  });

  context('recursive', function () {
    performBinarySearchTests(recursiveSearch);
  });

  function performBinarySearchTests(search) {
    it('search in 8 elements', function () {
      const input = [1, 2, 3, 4, 5, 6, 7, 8];

      input.forEach((value, index) => {
        search(value, input).should.equal(index);
      });
    });

    it('search in ~331 elements', function () {
      let input = generateInputArray(331);

      input.forEach((value, index) => {
        search(value, input).should.equal(index);
      });
    });

    context('not found', function () {
      const input = [1, 2, 3, 5, 6, 7, 8];

      it('in the middle', function () {
        should.equal(search(4, input), null);
      });

      it('smaller than any item', function () {
        should.equal(search(-2, input), null);
      });

      it('larger than any item', function () {
        should.equal(search(66, input), null);
      });
    });
  }

  it('performance comparison', function () {
    // increase these numbers if you want
    const INPUT_LENGTH = 1000;
    const MEASUREMENT_NUM = 100;
    //

    this.timeout(20000);

    const input = generateInputArray(INPUT_LENGTH);

    const iterativeDuration = measureDuration(
      MEASUREMENT_NUM,
      input,
      iterativeSearch
    );

    const recursiveDuration = measureDuration(
      MEASUREMENT_NUM,
      input,
      recursiveSearch
    );

    console.log(`
    Performance comparison result:
    - Iterative: ${iterativeDuration.toFixed(1)} ms
    - Recursive: ${recursiveDuration.toFixed(1)} ms
    `);
  });

  function measureDuration(MEASUREMENT_NUM, input, search) {
    const startTime = performance.now();

    for (let i = 0; i < MEASUREMENT_NUM; i++) {
      input.forEach((value, index) => {
        search(value, input).should.equal(index);
      });
    }

    return performance.now() - startTime;
  }

  function generateInputArray(n) {
    let input = Array(n);

    for (let i = 0; i < input.length; i++) {
      input[i] = Math.round(Math.random() * n * 100000);
    }

    input = input.sort((a, b) => a - b);

    return input.filter((value, i, array) => value !== array[i - 1]);
  }
});
