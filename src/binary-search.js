'use strict';

/**
 *
 * @param {*} value
 * @param {Array} array
 */
function iterativeSearch(value, array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let targetIndex = Math.ceil((right - left) / 2) + left;

    if (array[targetIndex] === value) {
      return targetIndex;
    } else if (value < array[targetIndex]) {
      right = targetIndex - 1;
    } else {
      left = targetIndex + 1;
    }
  }

  return null;
}

/**
 *
 * @param {*} value
 * @param {Array} array
 */
function recursiveSearch(value, array, _left = 0, _right = array.length - 1) {
  if (_right < _left) {
    return null;
  }

  let targetIndex = Math.ceil((_right - _left) / 2) + _left;

  if (array[targetIndex] === value) {
    return targetIndex;
  } else if (value < array[targetIndex]) {
    return recursiveSearch(value, array, _left, targetIndex - 1);
  } else {
    return recursiveSearch(value, array, targetIndex + 1, _right);
  }
}

module.exports = { iterativeSearch, recursiveSearch };
