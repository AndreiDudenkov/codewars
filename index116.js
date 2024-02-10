function sumDigPow(a, b) {
    let res = []
    for (let i = a; i <= b; i++) {
           let arr = Array.from(i.toString(), Number)
            let sum = 0;
            for (let j = 0; j < arr.length; j++) {
                sum += arr[j]**(j+1)
            }
             if(sum === i){
                 res.push(sum)
             }
        }
    return res
}

console.log(sumDigPow(10, 100))