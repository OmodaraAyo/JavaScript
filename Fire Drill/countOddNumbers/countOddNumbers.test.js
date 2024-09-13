const {countOdd} = require("./countOddNumbers.js");

test("Counting number of odd numbers in an array", ()=>{
	let input = [1,2,3,4,5,6,7];
	let result = countOdd(input);
	expect(result).toBe(4);
})