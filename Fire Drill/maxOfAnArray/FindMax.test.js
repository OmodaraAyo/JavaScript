const {findMax} = require("./FindMax.js");

test("Largest element in an array", ()=>{
		let array = ([1,13,10,8,24,16]);
		let result = findMax(array);
		expect(result).toEqual(24);
})