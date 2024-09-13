const {isPrime} = require("./Prime.js");

test("Get Prime", ()=>{
	let userInput = 7
	let result = isPrime(userInput);
	expect(result).toBe(true);

})