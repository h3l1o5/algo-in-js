function mergeSort(arr, compare, method) {
  switch (method) {
    case "bottomUp":
      bottomUp(arr, 0, arr.length - 1, compare);
      break;
    case "topDown":
      topDown(arr, compare);
      break;
    default:
      bottomUp(arr, 0, arr.length - 1, compare);
  }
}

module.exports = mergeSort;

function bottomUp(arr, lo, hi, compare) {
  if (lo === hi) {
    return;
  }

  const mid = Math.floor((lo + hi) / 2);

  bottomUp(arr, lo, mid, compare);
  bottomUp(arr, mid + 1, hi, compare);
  merge(arr, lo, mid, hi, compare);
}

function topDown(arr, compare) {
  let size = 1;

  while (size < arr.length) {
    let lo = 0;
    let hi = Math.min(size * 2 - 1, arr.length - 1);

    while (lo < hi) {
      const mid = lo + size - 1;

      merge(arr, lo, mid, hi, compare);

      lo = hi + 1;
      hi = Math.min(hi + size * 2, arr.length - 1);
    }

    size = size * 2;
  }

  ///// Another solution
  //
  // for (let size = 1; size < arr.length; size += size) {
  //   for (let lo = 0; lo < arr.length - size; lo += size * 2) {
  //     merge(arr, lo, lo + size - 1, Math.min(lo + size + size - 1, arr.length - 1), compare);
  //   }
  // }
}

function merge(arr, lo, mid, hi, compare) {
  const aux = [];

  for (let i = lo; i <= hi; i++) {
    aux.push(arr[i]);
  }

  const auxMid = mid - lo;

  let leftHead = 0;
  let rightHead = auxMid + 1;

  for (let i = lo; i <= hi; i++) {
    if (leftHead > auxMid) {
      arr[i] = aux[rightHead++];
      continue;
    }

    if (rightHead > aux.length - 1) {
      arr[i] = aux[leftHead++];
      continue;
    }

    if (compare(aux[leftHead], aux[rightHead]) < 0) {
      arr[i] = aux[leftHead++];
    } else {
      arr[i] = aux[rightHead++];
    }
  }
}
