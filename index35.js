function findAverage(array) {
    if (array.length>0){
        let res = (array.reduce((a,b) =>a+b))/array.length
        console.log (res)
    
  } else{
    return 0
  }
}


  findAverage([1, 2, 3])