function info(Objects){
	let info = "";
	for(let X in Objects){
		info += X + ": " + Objects[X] + " ";
	}
	return info;
}

let Human = new Object();
Human.FirstName = "John";
Human.LastName = "Doe";
Human.age = 25;
console.log(info(Human));