function isPalindrome(userInput){
	let output = "";
	console.log(output);
	for(let i = userInput.length - 1; i >= 0; i--){
		output += userInput[i];
	}
	if(userInput === output){
		return true;
	}
	else{
		return false;
	}
}
module.exports = {isPalindrome};