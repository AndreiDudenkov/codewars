function squareSum(numbers){
    let res = 0;
    for ( i = 0; i < numbers.length; i++){
      let mult = numbers[i]*numbers[i]
      res +=mult 
    }
      console.log( res)
    }
    squareSum([ 2, 3])