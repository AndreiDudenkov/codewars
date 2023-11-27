function descendingOrder(n){
    let res = n.toString().split('').sort().reverse()
    return +res.join('')
}