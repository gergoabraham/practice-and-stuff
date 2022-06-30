const items = [
  { name: "laptop", value: 2000, weight: 3 },
  { name: "guitar", value: 1500, weight: 1 },
  { name: "cat", value: 8800, weight: 2 },
  { name: "stereo", value: 3000, weight: 4 },
];

const doKnapsackGreedy = (items, limit) => {
  const sortedItems = [...items];
  sortedItems.sort((a, b) => b.value - a.value);

  let value = 0;
  sortedItems.forEach((item) => {
    if (item.weight <= limit) {
      value += item.value;
      limit -= item.weight;
    }
  });

  return value;
};

const doKnapsackMangy = (items, limit) => {
  const sortedItems = [...items];
  sortedItems.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let value = 0;
  sortedItems.forEach((item) => {
    if (item.weight <= limit) {
      value += item.value;
      limit -= item.weight;
    }
  });

  return value;
};

const doKnapsackDP = (items, limit) => {
  const increment = items.reduce(
    (min, { weight }) => Math.min(min, weight),
    Infinity
  );

  const grid = new Array(items.length);

  let i, j;
  for (i = 0; i < grid.length; i++) {
    grid[i] = new Array(limit / increment);

    const item = items[i];

    for (j = 0; j < grid[i].length; j++) {
      const currentLimit = (j + 1) * increment;
      const valueAbove = grid[i - 1]?.[j] ?? 0;

      if (item.weight > currentLimit) {
        grid[i][j] = valueAbove;
      } else if (item.weight === currentLimit) {
        grid[i][j] = Math.max(item.value, valueAbove);
      } else {
        const remainder = currentLimit - item.weight;
        const valueForRemainder = grid[i - 1]?.[remainder / increment - 1] ?? 0;

        const candidateValue = item.value + valueForRemainder;

        grid[i][j] = Math.max(candidateValue, valueAbove);
      }
    }
  }

  //   console.log(grid.map((line) => line.toString()).join("\n"));

  return grid[i - 1][j - 1];
};

for (let limit = 1; limit <= 10; limit++) {
  console.log(
    `${limit} kg | greedy: ${doKnapsackGreedy(
      items,
      limit
    )} | dynamic programming: ${doKnapsackDP(
      items,
      limit
    )} | mangusy: ${doKnapsackMangy(items, limit)}`
  );
}
