const {isPalindrome} = require("./Palindrome.js");

test("test That String is a palindrome", ()=> {
	
	let userInput = "fOOf";
	let output = isPalindrome(userInput);
	expect(output).toBe(true);
})

test("test That String is a palindrome", ()=> {
	
	let userInput = "2002";
	let output = isPalindrome(userInput);
	expect(output).toBe(true);
})

test("test That String is a palindrome", ()=> {
	
	let userInput = "Adenike";
	let output = isPalindrome(userInput);
	expect(output).toBe(false);
})

test("test That String is a palindrome", ()=> {
	
	let userInput = "1001001";
	let output = isPalindrome(userInput);
	expect(output).toBe(true);
})