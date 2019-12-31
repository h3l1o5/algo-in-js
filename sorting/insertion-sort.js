const swap = require("./swap");

function insertiont(arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (compare(arr[j], arr[j - 1]) < 0) {
        swap(arr, j, j - 1);
      }
    }
  }
}

module.exports = insertiont;
