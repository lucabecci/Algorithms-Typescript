function binarySearch(arr: number[],  s: number): number {
    let max = arr.length - 1
    let min = 0
    let steps = 0
    while(max >= min){
        const mid = min + Math.floor((max - min) / 2)
        const selected = arr[mid]
        steps = steps + 1
        if(selected === s){
            console.log("Number of steps required for search:", steps)
            return arr[mid]
        }
        else if(arr[mid] > s){
            max = (mid - 1)
        }
        else {
            min = (mid + 1)
        }
    }
    return -1
}
let arr = [13, 21, 54, 81, 90]

console.log(binarySearch(arr, 81))