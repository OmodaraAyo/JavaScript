const {sumEvenNumbers} = require("./EvenNumbers.js");


test("Get Summation of Even Elements", ()=>{
	let userInput = [1,2,3,6,9,12,4];
	let output = sumEvenNumbers(userInput);
	expect(output).toEqual(24);
})