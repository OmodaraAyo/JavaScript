function countOdd(numbers){
	let odd = 0;
	for(let i = 0; i < numbers.length; i++){
		if(numbers[i] % 2 != 0){
				odd += 1;
		}
	}
	return odd;
}
module.exports = {countOdd};