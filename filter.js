const numbers = [12,56,74,23];
const bigNums = numbers.filter(number =>number>20);
console.log(bigNums);

const numbers1 = [12,56,74,23];
const tiny =numbers.filter(x=>x<20);
console.log(tiny);

// function even(num){
//     if(num%2===0){
//         return 'even'
//     }
//     else{
//         return 'true';
//     }
// }

// const result=even(10);
// console.log(result);
const even =numbers.filter(x=>x%2==0);
console.log(even);
