function stray(numbers) {
    let startNum = numbers[0]
    let num = numbers.filter(n=>n!==startNum)
    if(num.length > 1){
        return startNum
    } else {
        return num[0]
    }
}


console.log(stray([10,7,10,10,10]))