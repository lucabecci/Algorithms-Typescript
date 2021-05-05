function bubble_sort(arr: number[]): number[]{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            }
        }        
    }
    return arr
}

function reverse_bubble_sort(arr: number[]): number[]{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            }
        }        
    }
    return arr
}

console.log(reverse_bubble_sort([23,32523,523324,5533,324324,121,44,23,2]))

console.log(bubble_sort([23,32523,523324,5533,324324,121,44,23,2]))

