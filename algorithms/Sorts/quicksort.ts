function quicksort(arr: number[]): number[]{
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0]

    let left = []
    let right = []

    for(let i = 1; i < arr.length; i++){
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }

    return quicksort(left).concat(pivot, quicksort(right))
}

console.log("original arr:", [52, 37, 63, 14, 17, 8, 6, 25])
console.log("arr with quicksort:", quicksort([52, 37, 63, 14, 17, 8, 6, 25]))