let arr_binary_search: number[] = [10, 33, 88, 90, 230]


function binarySearch(arr:number[], l: number , r: number, n: number): number {
    
    if (r >= l){
        const mid = l + (r - l) / 2

        if(arr[mid] === n){
            return mid
        }else if(arr[mid] > n) {
            return binarySearch(arr, l, mid - 1, n)
        }else{
            return binarySearch(arr, l, mid + 1, n)
        }
    }
    return -1
}
const l: number = 0;
const r : number= arr_binary_search.length - 1
const index = binarySearch(arr_binary_search, l, r, 88)

console.log(`Element found at index: ${index}`)