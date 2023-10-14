var number = function(busStops){
    let res = 0
    for(let i = 0; i<busStops.length; i++){
        for(let j = 0; j<1; j++){
            res +=busStops[i][0]
            res -=busStops[i][1]
        }
    }
    return res
}