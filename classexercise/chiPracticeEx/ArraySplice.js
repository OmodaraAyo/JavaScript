let arrayOfNumbers = [1,2,3,4,5,67];
let answer = arrayOfNumbers.splice(1,2);

let myArray = [7,4,5,6]
// let answerSplice = arrayOfNumbers.splice(1,0,...myArray);
let answerSplice2 = arrayOfNumbers.splice(1,0,6,9,...myArray);
// console.log("this "+arrayOfNumbers);


console.log(arrayOfNumbers);
console.log(answer);

console.log(myArray);
// console.log(answerSplice);
