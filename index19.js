function accum(s) {
console.log ([...s.toUpperCase()].reduce((acc, cur, ind) => acc + '-' 
+ cur + cur.toLowerCase().repeat(ind))) 
}

accum("aBcd")
