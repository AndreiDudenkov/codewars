function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0){
      return []
    } else{
      
    let pos = input.filter(a=>a>0).length
    let neg = input.filter(a => a<0).reduce((a,b)=> a+b, 0)
    return [pos,neg]
  }
    }
    
    
  countPositivesSumNegatives([])
