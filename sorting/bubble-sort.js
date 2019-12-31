const swap = require("./swap");

function bubbleSort(arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    // console.log(`${i + 1}/${arr.length}`);

    if (!swapped) {
      break;
    }
  }
}

module.exports = bubbleSort;
