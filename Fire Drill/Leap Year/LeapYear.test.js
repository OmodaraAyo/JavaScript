const {isLeapYear} = require("./LeapYear.js");

test("test isLeapYear functionality if it's a LeapYear", ()=> {
	let year = 2028;
	let result = isLeapYear(year);
	expect(result).toBeTruthy();
})

test("test isLeapYear functionality if it's not a LeapYear", ()=> {
	let year = 2027;
	let result = isLeapYear(year);
	expect(result).toBeFalsy();
})