class UnionFind {
  constructor(n) {
    this.arr = new Array(n).fill(0).map((_, i) => i);
    this.ranks = new Array(n).fill(1);
  }

  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);

    if (rootA === rootB) return false;

    if (this.ranks[rootA] < this.ranks[rootB]) {
      this.arr[rootA] = this.arr[rootB];
    } else if (this.ranks[rootB] < this.ranks[rootA]) {
      this.arr[rootB] = this.arr[rootA];
    } else {
      this.arr[rootA] = this.arr[rootB];
      this.ranks[rootB]++;
    }

    return true;
  }

  find(a) {
    if (a === this.arr[a]) return a;

    const root = this.find(this.arr[a]);
    this.arr[a] = root;
    return root;
  }

  isUnion(a, b) {
    return this.find(a) === this.find(b);
  }
}

const set = new UnionFind(8);

console.log(set.union(3, 4));
console.log(set.union(5, 6));
console.log(set.union(4, 5));
console.log(set.union(6, 7));
console.log(set.arr);
console.log(set.find(3));
console.log(set.arr);
console.log(set.ranks);

console.log(set.find(4));
console.log(set.arr);
