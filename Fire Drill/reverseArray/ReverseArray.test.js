const {reverseArray} = require("./ReverseArray.js");

test("Reverse Element in an array", ()=>{
	let expected = [2,5,6,8,3];
	let result = reverseArray(expected)
	expect(result).toEqual([3,8,6,5,2])
})