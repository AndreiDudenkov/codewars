function sumTwoSmallestNumbers(numbers) {  
let res = numbers.sort((a,b)=> a-b)
res = numbers[0]+numbers[1]
 console.log(res)
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77])