const {squareOfNumber} = require ("./SqaureOfNumbers.js")

test("squareOfNumber functionality",()=>{
	let numbers = [2,3,4,5,6];
	let result = squareOfNumber(numbers);
	expect(result).toEqual([4,9,16,25,36]);
})