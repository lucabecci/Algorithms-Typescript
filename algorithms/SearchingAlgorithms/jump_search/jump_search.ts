const arr_js: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

function jumpSearch(arr: number[], n: number){
    const num: number = arr.length
    //La función Math.sqrt() retorna la raíz cuadrada de un número
    let step: number = Math.floor(Math.sqrt(num))
    let prev: number = 0

    //La función Math.min() devuelve el menor de cero o más números.
    while(arr[Math.min(step, num)- 1] < n){ 
        prev = step
        //La funcion Math.floor devuelve el máximo entero menor o igual a un número.
        step += Math.floor(Math.sqrt(num))
        if (prev >= n) return -1
    } 
    while(arr[prev] < n){
        prev++
        // array, element is not present. 
        if (prev == Math.min(step, num)) return -1; 
    }
    if (arr[prev] == n) return prev;
    
    return -1
}

const result_jump_search = jumpSearch(arr_js, 89)

if (result_jump_search != -1){
    console.log('Number finded in the index:', result_jump_search)
}else {
    console.log('Number index not found')
    console.log(result_jump_search)
}