function arrRepeat(str){
    let res = Array.from(str)
    console.log (res.filter((item, index) => res.indexOf(item) != index))
    
    }
    arrRepeat('qegbeaadb')
function isIsogram(str){
    // var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; i++) {
      for(j = i + 1; j < str.length; j++) {
        if(str[i] === str[j]) {
            console.log ('false');
        }
      }
    }
    console.log ('true');
 }
 isIsogram('qeaeeb')