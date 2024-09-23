const {countChars} = require("./CountingCharsInAList");

test("CountingCharsInAList functionality", ()=> {
	let userInput = [1,2,3,2,2,4,5];
	let result = countChars(userInput);
	expect(result).toEqual({'1': 1, '2': 3, '3':1, '4': 1, '5': 1});
})

test("CountingCharsInAList functionality2", ()=> {
	let userInput = [4,5,6,4,7,4,5,7];
	let result = countChars(userInput);
	expect(result).toEqual({'4': 3, '5': 2, '6':1, '7': 2});
})