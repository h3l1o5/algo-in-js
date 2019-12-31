class WeightedQuickUnion {
  constructor(N) {
    this.id = new Array(N).fill(null).map((_, index) => index);
    this.size = new Array(N).fill(1);
    this.count = N;
  }

  find(p) {
    let i = p;
    while (this.id[i] !== i) {
      i = this.id[i];
    }

    return i;
  }

  union(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) {
      return;
    }

    if (this.size[pRoot] > this.size[qRoot]) {
      this.id[qRoot] = pRoot;
      this.size[qRoot] += this.size[pRoot];
    } else {
      this.id[pRoot] = qRoot;
      this.size[pRoot] += this.size[qRoot];
    }

    this.count--;
  }

  connected(p, q) {
    return this.find(p) == this.find(q);
  }
}

module.exports = WeightedQuickUnion;
