let array = [1,2,3,"home", true]; // Array literal
console.log(array);

let newArray = new Array(3);
newArray[0] = 10;
newArray[1] = 1;
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);
newArray.push(6);

console.log(newArray);

let newArray2 = Array.from("semicolon");
console.log(newArray2);

let answer = Array.of(1,2,3,4,5,6);
console.log(answer);

let slice = answer.slice(2,4)
console.log(slice);