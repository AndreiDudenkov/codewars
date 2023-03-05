
function invert(array) {
   
    for ( i = 0; i < array.length; i++ ) {
      if ( array[i] != 0 ) {
        array[i] = array[i] *-1 
      } else {
        array[i] = -array[i]
      } 
      
    }
    console.log(array);
  }

  invert([1, 0, 2, 3, 4])
  