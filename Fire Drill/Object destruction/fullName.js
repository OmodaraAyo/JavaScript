function fullName(firstName, lastName){
	return firstName + " " + lastName;
}

let person = new Object();
person.firstName = "Ayodele";
person.SecondName = "Omodara";
console.log(fullName(person.firstName, person.SecondName));