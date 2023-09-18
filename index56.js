function friend(friends){
    let res = []
    for(let i = 0; i<friends.length; i++){
        if(friends[i].length === 4){
            res.push(friends[i])
        }
    }
    return res
}