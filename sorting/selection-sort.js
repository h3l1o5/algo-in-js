const swap = require("./swap");

function selectionSort(arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[min], arr[j]) > 0) {
        min = j;
      }
    }

    swap(arr, i, min);
  }
}

module.exports = selectionSort;
