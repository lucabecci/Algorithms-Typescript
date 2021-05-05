

function linear_search(arr: number[], n: number): number{
    console.time('Execution Time');
    let result = -1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === n){
            result = arr[i]
            break
        }else{
            continue
        }
    }
    console.timeEnd('Execution Time');
    return result
}

console.log(linear_search([1,44,55,2,4, 2332, 55453, 6643543, 656456, 6564564, 324324, 3423432, 432432, 432423, 432423, 423,344432, 1213123, 5667744, 342342364265], 5667744))
console.log(linear_search([1,44,55], 44))
console.log(linear_search([132,4324,542415,223,42], 223))