const arr_linear_search: number[] = [
  20,
  30,
  20,
  80,
  30,
  60,
  50,
  10,
  100,
  130,
  170,
  2,
];

function linearSearch(arr: number[], n: number): number {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === n) {
      return element;
    }
  }
  return -1;
}

const result = linearSearch(arr_linear_search, 2);

console.log(result);
