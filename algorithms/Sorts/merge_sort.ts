function merge_sort(arr: (number | undefined)[]): (number | undefined)[]{
    if (arr.length < 2) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(merge_sort(left), merge_sort(right));
}

function merge(left: (number | undefined)[], right: (number | undefined)[]): (number | undefined)[]{
    let arr = []

    while(left.length && right.length){
        if (left[0]! < right[0]!) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice().concat(right.slice()));
}



console.log(merge_sort([14, 7, 3, 12, 9, 11, 6, 12]))