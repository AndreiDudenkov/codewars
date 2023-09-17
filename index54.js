function XO(str) {
    const low =  str.toLowerCase()
    let x = 0;
    let o = 0;
    for(let i = o; i< low.length; i++){
        if(low[i] === 'x'){
            x +=1
        }
        if(low[i] === 'o'){
            o +=1
        }
    }
    return x === o
}