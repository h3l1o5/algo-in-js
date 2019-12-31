const fs = require("fs");
const path = require("path");
const selectionSort = require("./selection-sort");
const insertionSort = require("./insertion-sort");
const bubbleSort = require("./bubble-sort");
const mergeSort = require("./merge-sort");
const quickSort = require("./quick-sort");

const numbers = fs
  .readFileSync(path.join(__dirname, "numbers.txt"), "utf-8")
  .split("\n")
  .map(x => Number(x))
  .filter(x => !isNaN(x));

const ascendingCompare = (a, b) => a - b;
const descendingCompare = (a, b) => b - a;

console.time("Duration");
// selectionSort(numbers, ascendingCompare);
// insertionSort(numbers, ascendingCompare);
// bubbleSort(numbers, ascendingCompare);
// mergeSort(numbers, ascendingCompare, "topDown");
quickSort(numbers, ascendingCompare);
console.timeEnd("Duration");
console.log(isSorted(numbers, ascendingCompare));
// console.log(numbers);

function isSorted(arr, compare) {
  const _arr = [...arr];
  _arr.sort(compare);

  let sorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== _arr[i]) {
      sorted = false;
      break;
    }
  }

  return sorted;
}
