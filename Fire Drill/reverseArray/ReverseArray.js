function reverseArray(number){
	my_array = [];
	for(let i = number.length -1; i >= 0; i--){
		my_array.push(number[i]);
	}
	return my_array
}

module.exports = {reverseArray};