function factorial(number){
	let newNumber = 1;
	for(let i = number; i > 0; i--){
		newNumber *= i;
	}
	return newNumber;
}
module.exports = {factorial};
console.log(factorial(5));