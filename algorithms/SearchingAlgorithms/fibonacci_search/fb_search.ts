const arr_fb = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const n_fb = arr_fb.length;
const x_fb = 45;

function min(x: number, y: number) {
  return x <= y ? x : y;
}

function fibonacciSearch(arr: number[], n: number, x: number) {
  let fib1 = 0;
  let fib2 = 1;
  let fib = fib1 + fib2;
  let offset = 0;

  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib2 + fib1;
  }

  offset = offset - 1;

  while (fib > 1) {
    let i = min(offset + fib2, n - 1);

    if (arr[i] < x) {
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > x) {
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    } else return i;
  }

  if (fib1 == 1 && arr[offset + 1] == x) return offset + 1;

  return -1;
}

const result_fb = fibonacciSearch(arr_fb, n_fb, x_fb);

if (result_fb < 0) {
  console.log("Number not found in the arr");
} else {
  console.log("Number found in the index: ", result_fb);
}
