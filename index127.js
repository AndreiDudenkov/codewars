//
// const findMin = (arr) =>{
//     let minVal = arr[0]
//     for (let i = 0; i<arr.length; i++){
//         if (arr[i]<minVal){
//             minVal= arr[i]
//         }
//     }
//     return minVal
// }
// function findMin2 (arr){
//    return Math.min(...arr)
// }
// function recursion (num){
//    if(num ===1) return 1
//    return num * recursion(num-1)
// }
// console.log(findMin([5, 3, 5, 4]))
// console.log(findMin2([6,7,8,9,11,15]))
// console.log(recursion(100))
//
// function bubbleSortConcept1(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length-1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr
// }
//
// console.log(bubbleSortConcept1([15,3,12, 22, 1,14,10]))
// const server = {
//     getData(num) {
//         return new Promise((resolve, reject) => {
//            num === 1 ?reject('fail') : resolve('success')
//
//         })
//     }
// }
//
// const server = {
//     getData(num) {
//         return new Promise((resolve, reject) => {
//            num === 1 ?reject('fail') : resolve('success')
//
//         })
//     }
// }
//
// server.getData(1)
//     .then(() => {
//         console.log('then1')
//     })
//     .then(() => {
//         console.log('then2')
//     })
//     .then(() => {
//         console.log('then3')
//     })
//     .catch(() => {
//         console.log('error1')
//     })
//     .then(() => {
//         console.log('then4')
//     })
//     .catch(() => {
//         console.log('error2')
//     })
//     .finally(()=>{
//         console.log('final')
//     })
//
//
// console.log(server)
console.log('start');

const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
    const timer2 = setTimeout(() => {
        console.log('timer2')
    }, 0)
});

const timer1 = setTimeout(() => {
    console.log('timer1')
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)

console.log('end');