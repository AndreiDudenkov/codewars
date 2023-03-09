function solution(str, ending){
    let res = str.split('')
    let newArr = res.slice(-(ending.length)).join('')
    
    if (newArr != ending || ending === ''){
        console.log(true)
    } else {
        console.log(false)
    }
      }
      solution ('abc', '')