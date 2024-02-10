function sortArray(array) {
    let odd = []
    let even = []
    let res = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            odd.push(array[i])
        } else {
            even.push(array[i])
        }
        odd.sort()
    }
    let a = 0
    for (let j = 0; j < array.length; j++) {

        if (array[j] % 2 === 0) {
            res.push(array[j])
        } else {
            res.push(odd[a])
            a++
        }
    }
    return res
}

console.log(sortArray([5, 8, 6, 3, 4]))