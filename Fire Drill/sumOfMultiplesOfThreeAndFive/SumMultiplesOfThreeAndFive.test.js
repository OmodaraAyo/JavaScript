const {sumMultiplesOfThreeAndFive} = require("./SumOfMultiplesOfThreeAndFive.js");

test("test to get sum of multiples of 3 and 5", ()=> {
		let userInput = [1,2,3,4,5];
		let result = sumMultiplesOfThreeAndFive(userInput);
		expect(result).toBe(8);
})

test("test to get total of multiples of 3 and 5", ()=> {
		let userInput = [1,2,3,4,5,6,7,8,9,10];
		let result = sumMultiplesOfThreeAndFive(userInput);
		expect(result).toBe(33);
	
})