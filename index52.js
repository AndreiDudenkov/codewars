function persistence(num) {
    const numToArray = () => String(num).split('').map(Number)
    let numArray = numToArray(num)
    if (numArray.length === 1) {
        return 0
    }
    let res = numArray.reduce((a, b) => a * b)
    return 1 + persistence(res)
}

console.log(persistence(39))