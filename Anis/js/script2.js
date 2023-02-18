

function sum(arr){
    let sum = 0
    // for(let i= 0; i< arr.length;i++){
    //     console.log(arr[i]);
    //     sum = sum + arr[i]
    // }
    for (const val of arr) {
        console.log(val);
            sum += val;
    }
    return sum
}

console.log(sum([1,2,3,4,5]));