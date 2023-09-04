function between(a, b) {
    let res =[a]
    if(a<b){
        let recursive = between(a + 1, b)
        res = res.concat(recursive)
    }
    return res
}