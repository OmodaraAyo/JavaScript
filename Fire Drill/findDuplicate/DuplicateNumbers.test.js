const {findFirstDuplicate} = require("./DuplicateNumbers.js");

test("find Duplicate", ()=> {
	let userInput = [3,2,6,5,4];
	let result = findFirstDuplicate(userInput);
	expect(result).toBe(-1);
})

test("find Duplicate test2", ()=> {
	let userInput = [3,2,6,5,4,6];
	let result = findFirstDuplicate(userInput);
	expect(result).toBe(6);
})

test("find Duplicate test3", ()=> {
	let userInput = [3,2,6,5,4,5];
	let result = findFirstDuplicate(userInput);
	expect(result).toBe(5);
})