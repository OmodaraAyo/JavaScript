function findMax(arrayOfNumbers){
	let max = arrayOfNumbers[0];
	for(let i = 0; i <= arrayOfNumbers.length; i++){
		 if(arrayOfNumbers[i] > max) max = arrayOfNumbers[i];
		
	}
	return max;
}
module.exports = {findMax};