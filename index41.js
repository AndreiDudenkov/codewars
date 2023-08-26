function getGrade (s1, s2, s3) {
    const sum = (s1 + s2 + s3 )/3
    if(sum >=90){
        return 'A'
    }
    if(sum <=90 && sum>=80 ){
        return 'B'
    }
    if(sum <=80&&sum >=70){
        return 'C'
    }
    if(sum <=70 && sum>=60){
        return 'D'
    } else {
        return 'F'
    }
}