const binaryArrayToNumber = arr => {
    arr.reverse();
    let res = 0;
    let newArr = []
   for ( i = 0; i < arr.length; i++){
    
    newArr.push(Math.pow(2,i)*arr[i])
    

    
   }
   console.log(newArr.reduce((a,b)=>a+b))
   
  };


  binaryArrayToNumber([0, 1, 0, 1])