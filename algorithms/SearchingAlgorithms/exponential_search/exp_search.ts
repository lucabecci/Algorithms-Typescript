let arr_exp: number[] = [
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
class ExponentialSearch {
  public exponentialTest(arr: number[], n: number, x: number) {
    if (arr[0] === x) {
      return 0;
    }

    let i = 1;
    while (i < n && arr[i] <= x) {
      i = i * 2;
    }

    return this.binarySearch(arr, i / 2, Math.min(i, n - 1), x);
  }

  public binarySearch(arr: number[], l_it: number, r_it: number, x: number) {
    while (l_it <= r_it) {
      let m_it = l_it + (r_it - l_it) / 2;

      if (arr[m_it] === x) {
        return m_it;
      }
      if (arr[m_it] < x) {
        l_it = m_it + 1;
      } else {
        r_it = m_it - 1;
      }
    }
    return -1;
  }
}

const exponentialSearch = new ExponentialSearch();

const result_exp = exponentialSearch.exponentialTest(
  arr_exp,
  arr_exp.length,
  230
);

console.log(result_exp);
