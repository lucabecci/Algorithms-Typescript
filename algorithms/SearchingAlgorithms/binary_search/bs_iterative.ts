let arr_bs_it: number[] = [
  10,
  33,
  88,
  90,
  230,
  330,
  440,
  488,
  890,
  1032,
  2444,
  34400,
  10000,
  10001,
  200000,
];

export function binarySearch_it(arr: number[], n: number): number {
  let l_it: number = 0;
  let r_it: number = arr.length - 1;
  while (l_it <= r_it) {
    let m_it = l_it + (r_it - l_it) / 2;

    if (arr[m_it] === n) {
      return m_it;
    }
    if (arr[m_it] < n) {
      l_it = m_it + 1;
    } else {
      r_it = m_it - 1;
    }
  }
  return -1;
}

const index_it = binarySearch_it(arr_bs_it, 890);

if (index_it === -1) {
  console.log("Element not found");
} else {
  console.log(`Element found at index: ${index_it}`);
}
