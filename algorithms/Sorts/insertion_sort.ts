function insertion_sort(arr: number[]): number[]{
    const size = arr.length
    for (let i = 0; i < size; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key         
    }
    return arr
}
console.log(insertion_sort([32,44,12,4,55,2]))