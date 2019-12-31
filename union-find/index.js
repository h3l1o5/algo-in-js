const fs = require("fs");
const path = require("path");
const QuickFind = require("./quick-find");
const QuickUnion = require("./quick-union");
const WeightedQuickUnion = require("./weighted-quick-union");

/**
 * Client
 */

const data = fs
  .readFileSync(path.join(__dirname, "largeUF.txt"), "utf-8")
  .split("\n")
  .filter(x => x);
const N = Number(data.shift(0));

const uf = new QuickFind(N);

console.time("Duration");
data.forEach((pair, i) => {
  const p = Number(pair[0]);
  const q = Number(pair[2]);

  uf.union(p, q);

  // console.log(`${i}/${data.length}`);
});

console.log(uf.count);
console.timeEnd("Duration");
