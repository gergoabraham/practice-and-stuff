'use strict';

function getNumberOfIslands(islandArray) {
  let numberOfIslands = 0;

  for (let row = 0; row < islandArray.length; row++) {
    for (let col = 0; col < islandArray[row].length; col++) {
      if (isItANewIsland(islandArray, row, col)) {
        numberOfIslands++;
      }
    }
  }

  return numberOfIslands;
}

function isItANewIsland(islandIdArray, row, col) {
  return (
    isLand(islandIdArray, row, col) &&
    !hasVisitedNeighbours(islandIdArray, col, row)
  );
}

function isLand(islandIdArray, row, col) {
  return islandIdArray[row][col] != 0;
}

function hasVisitedNeighbours(islandIdArray, col, row) {
  return (
    hasLeftNeighbour(col, islandIdArray, row) ||
    hasUpperLeftNeighbour(col, row, islandIdArray) ||
    hasUpperNeighbour(row, islandIdArray, col) ||
    hasUpperRightNeighbour(col, row, islandIdArray)
  );
}

function hasLeftNeighbour(col, islandIdArray, row) {
  return col > 0 && isLand(islandIdArray, row, col - 1);
}

function hasUpperLeftNeighbour(col, row, islandIdArray) {
  return col > 0 && row > 0 && isLand(islandIdArray, row - 1, col - 1);
}

function hasUpperNeighbour(row, islandIdArray, col) {
  return row > 0 && isLand(islandIdArray, row - 1, col);
}

function hasUpperRightNeighbour(col, row, islandIdArray) {
  const numberOfColumns = islandIdArray[row].length;

  return (
    col < numberOfColumns - 1 &&
    row > 0 &&
    isLand(islandIdArray, row - 1, col + 1)
  );
}

module.exports = { getNumberOfIslands };
