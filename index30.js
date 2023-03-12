function doubleChar(str) {
    let res = ''
    for ( i = 0; i < str.length; i ++){
    res += str[i]+ str[i] 
    }
    console.log(res)
  }
  
  doubleChar('World')