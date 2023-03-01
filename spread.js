const max = Math.max(12,23,45,67);
const numbers = [12,23,45,67];
const largest =Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2=[...numbers];
numbers.push(33);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);