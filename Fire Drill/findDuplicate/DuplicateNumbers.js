function findFirstDuplicate(number){
	let duplicate = -1;
	for(let i = 0; i < number.length; i++){
		for(let j = i +1; j < number.length; j++){
			if(number[i] == number[j]){
				duplicate = number[i];
			}
		}
	}
	return duplicate;
}	
module.exports = {findFirstDuplicate};