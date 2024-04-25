function oddOrEven(array) {
    if(array.length === 0){
        return 'even'
    }
    let sum =  array.reduce((a,b)=>a+b)
    return sum%2?'odd': 'even'
}