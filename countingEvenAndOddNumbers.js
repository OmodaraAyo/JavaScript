function evenAndOddCounter(number){
	let array = [];
	let even = 0;
	let odd = 0;
	for(let i = 0; i < number.length; i++){
		if(number[i] % 2 == 0){
			even++;
		}
		else{
			odd++;
		}
	}
	array.push(even);
	array.push(odd);
	return array;
}


console.log(evenAndOddCounter([2,4,1,5,7]))
console.log(evenAndOddCounter([4,1,5,7,9]))