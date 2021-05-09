function selection_sort(arr: number[]): number[]{
    let len = arr.length
    for(let i = 0; i < len; i++){
        let min = i
        for (let j = i + 1; j < len; j++) {
            if(arr[min] > arr[j]){
                min = j
            }
        }
        if (min !== i){
            let tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp

        }
    }
    return arr
}
console.log("original arr:", [5, 2, 4, 6, 1, 3])
console.log("with selection sort:", selection_sort([5, 2, 4, 6, 1, 3]))