function count(string) {

   const arr = string.split('')
    const res = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        const filtered = arr.filter(e=>e === num)
        if(filtered.length > 0){
           res[num] = filtered.length
        }
    }
    return res
}

console.log(count('aba'))