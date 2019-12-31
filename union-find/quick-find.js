class QuickFind {
  constructor(N) {
    this.id = new Array(N).fill(null).map((_, index) => index);
    this.count = N;
  }

  find(p) {
    return this.id[p];
  }

  union(p, q) {
    const pID = this.find(p);
    const qID = this.find(q);

    if (pID === qID) {
      return;
    }

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pID) {
        this.id[i] = qID;
      }
    }

    this.count--;
  }

  connected(p, q) {
    return this.find(p) == this.find(q);
  }
}

module.exports = QuickFind;
