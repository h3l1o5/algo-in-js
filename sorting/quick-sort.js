const swap = require("./swap");

function quickSort(arr, compare) {
  sort(arr, 0, arr.length - 1, compare);
}

module.exports = quickSort;

function sort(arr, lo, hi, compare) {
  if (lo >= hi) {
    return;
  }

  const p = partition(arr, lo, hi, compare);

  sort(arr, lo, p - 1, compare);
  sort(arr, p + 1, hi, compare);
}

function partition(arr, lo, hi, compare) {
  const pivot = arr[lo];

  let left = lo + 1;
  let right = hi;
  while (left <= right) {
    if (compare(arr[left], pivot) <= 0) {
      left += 1;
      continue;
    }

    if (compare(arr[right], pivot) >= 0) {
      right -= 1;
      continue;
    }

    swap(arr, left, right);
    left += 1;
    right -= 1;
  }

  swap(arr, lo, right);

  return right;
}
