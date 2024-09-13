const {factorial} = require("./Factorial");

test("Factorial test", ()=> {
	let userInput = 6;
	let result = factorial(userInput);
	expect(result).toBe(720);
})