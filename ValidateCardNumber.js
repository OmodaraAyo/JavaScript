function validateCardNumber(numbers){
	let newCard = ""
	for(let count = 0; count < numbers.length; count++){
		if(number[count] != "-") newCard += numbers[count]);
	}
	if(newCard.length == 16 && newCard[0] == "4" | newCard[0] == "5" | newCard[0] == "6"){	
		return true
	}
	else return false
}

console.log(validateCardNumber("5212-3456-78a0-1234"))
