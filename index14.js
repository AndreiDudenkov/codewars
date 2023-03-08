function grow(x){
    let res = 1;
      for (i = 0; i < x.length; i++){
        res *=x[i]
      }
      console.log(res)  
    }
    grow([2 , 3, 4, 5])