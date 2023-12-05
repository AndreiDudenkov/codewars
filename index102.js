var uniqueInOrder=function(iterable){
    let res = []
    let arr;
    if(Array.isArray(iterable)){
        arr = iterable
    } else {
        arr =  iterable.split('')
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]){
            res.push(arr[i])
        }
    }
    return res
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))