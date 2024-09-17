function extractValuesOf(my_dict){
	for(let Objects in my_dict){
		console.log(Objects+ ": ", my_dict[Objects]);
	}
	return "";
}

let car = {Name: "Toyota", Model: "Camry", year: 2021};
console.log(extractValuesOf(car));