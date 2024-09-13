function sumEvenNumbers(arrayOfNumbers){

	let sum = 0;
	for(let i = 0; i <= arrayOfNumbers.length; i++){
		if(arrayOfNumbers[i] % 2 == 0) sum += arrayOfNumbers[i];	
	}
	return sum;
}
module.exports = {sumEvenNumbers};