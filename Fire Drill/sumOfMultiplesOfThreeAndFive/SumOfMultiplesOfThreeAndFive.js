function sumMultiplesOfThreeAndFive(number){
	let output = 0;
	for(let i = 0; i <= number.length; i++){
		if(number[i] % 3 == 0 || number[i] % 5 == 0){
			output+= number[i];
		}
	}
	return output;
}
module.exports = {sumMultiplesOfThreeAndFive};

console.log(sumMultiplesOfThreeAndFive([1,2,3,4,5]));