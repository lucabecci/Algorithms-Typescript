let arr_is: number[] = [
  10,
  12,
  13,
  16,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  33,
  35,
  42,
  47,
];

/*
lo ==> Starting index in arr[]
hi ==> Ending index in arr[] 
*/
function interpolationSearch(
  arr: number[],
  lo: number,
  hi: number,
  x: number
): any {
  let pos;
  if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    pos = Math.round(lo + ((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));
    if (arr[pos] == x) {
      return pos;
    }

    if (arr[pos] < x) {
      return interpolationSearch(arr, pos + 1, hi, x);
    }

    if (arr[pos] > x) {
      return interpolationSearch(arr, lo, pos - 1, x);
    }
  }
  return -1;
}

const n = arr_is.length;
const x = 20;
const value = interpolationSearch(arr_is, 0, n - 1, x);

if (value != -1) {
  console.log("Element found at index: " + value);
} else {
  console.log("Element not found.");
}
